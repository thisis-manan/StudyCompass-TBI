const ApiError = require("./ApiError");

/** Allowed values for a material's `type` field. */
const MATERIAL_TYPES = ["note", "textbook", "pdf", "slide"];

/**
 * Validate and normalise the fields of a study material.
 *
 * @param {object} body                 Raw request body.
 * @param {object} [opts]
 * @param {boolean} [opts.partial]      When true (PATCH), only the fields that
 *                                      are present are validated and returned.
 * @returns {object} A clean object containing only known, valid fields.
 * @throws {ApiError} 400 with a `details` map of field → message on failure.
 */
function validateMaterial(body, { partial = false } = {}) {
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    throw ApiError.badRequest("Request body must be a JSON object");
  }

  const errors = {};
  const out = {};
  const has = (key) => Object.prototype.hasOwnProperty.call(body, key);

  // --- title (required) ---
  if (has("title") || !partial) {
    if (typeof body.title !== "string" || body.title.trim() === "") {
      errors.title = "title is required and must be a non-empty string";
    } else {
      out.title = body.title.trim();
    }
  }

  // --- subject (required) ---
  if (has("subject") || !partial) {
    if (typeof body.subject !== "string" || body.subject.trim() === "") {
      errors.subject = "subject is required and must be a non-empty string";
    } else {
      out.subject = body.subject.trim();
    }
  }

  // --- type (required, enum) ---
  if (has("type") || !partial) {
    if (!MATERIAL_TYPES.includes(body.type)) {
      errors.type = `type is required and must be one of: ${MATERIAL_TYPES.join(", ")}`;
    } else {
      out.type = body.type;
    }
  }

  // --- description (optional) ---
  if (has("description")) {
    if (typeof body.description !== "string") {
      errors.description = "description must be a string";
    } else {
      out.description = body.description.trim();
    }
  }

  // --- tags (optional, array of strings) ---
  if (has("tags")) {
    if (
      !Array.isArray(body.tags) ||
      !body.tags.every((t) => typeof t === "string")
    ) {
      errors.tags = "tags must be an array of strings";
    } else {
      out.tags = body.tags.map((t) => t.trim()).filter(Boolean);
    }
  }

  // --- pages (optional, positive integer) ---
  if (has("pages")) {
    if (!Number.isInteger(body.pages) || body.pages < 0) {
      errors.pages = "pages must be a non-negative integer";
    } else {
      out.pages = body.pages;
    }
  }

  if (partial && Object.keys(out).length === 0 && Object.keys(errors).length === 0) {
    throw ApiError.badRequest("Provide at least one field to update");
  }

  if (Object.keys(errors).length > 0) {
    throw ApiError.badRequest("Validation failed", errors);
  }

  return out;
}

module.exports = { validateMaterial, MATERIAL_TYPES };
