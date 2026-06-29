/**
 * materials.controller — request handlers for the /api/materials resource.
 *
 * Controllers read the request, call the store, and send the response with the
 * correct HTTP status code. Validation lives in utils/validate; persistence
 * lives in services/materials.store. Errors are thrown as ApiError and handled
 * centrally by the error middleware (no try/catch noise here — `next(err)` is
 * wired up by the route layer's asyncHandler).
 */
const store = require("../services/materials.store");
const ApiError = require("../utils/ApiError");
const { validateMaterial } = require("../utils/validate");

/** GET /api/materials — list all, with optional ?subject= & ?type= filters. */
function listMaterials(req, res) {
  let materials = store.list();

  const { subject, type } = req.query;
  if (subject) {
    materials = materials.filter(
      (m) => m.subject.toLowerCase() === String(subject).toLowerCase()
    );
  }
  if (type) {
    materials = materials.filter(
      (m) => m.type.toLowerCase() === String(type).toLowerCase()
    );
  }

  res.status(200).json({ count: materials.length, data: materials });
}

/** GET /api/materials/search?q= — full-text-ish search over title/desc/tags. */
function searchMaterials(req, res) {
  const q = String(req.query.q || "").trim().toLowerCase();
  if (!q) {
    throw ApiError.badRequest("Query parameter 'q' is required");
  }

  const results = store.list().filter((m) => {
    const haystack = [
      m.title,
      m.description || "",
      m.subject,
      ...(m.tags || []),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });

  res.status(200).json({ query: q, count: results.length, data: results });
}

/** GET /api/materials/:id — fetch one, or 404. */
function getMaterial(req, res) {
  const material = store.findById(req.params.id);
  if (!material) {
    throw ApiError.notFound(`No material found with id '${req.params.id}'`);
  }
  res.status(200).json({ data: material });
}

/** POST /api/materials — create, returns 201. */
function createMaterial(req, res) {
  const clean = validateMaterial(req.body);
  const created = store.create(clean);
  res.status(201).json({ data: created });
}

/** PUT /api/materials/:id — full update (all required fields), or 404. */
function replaceMaterial(req, res) {
  if (!store.findById(req.params.id)) {
    throw ApiError.notFound(`No material found with id '${req.params.id}'`);
  }
  const clean = validateMaterial(req.body); // full validation
  const updated = store.update(req.params.id, clean);
  res.status(200).json({ data: updated });
}

/** PATCH /api/materials/:id — partial update, or 404. */
function updateMaterial(req, res) {
  if (!store.findById(req.params.id)) {
    throw ApiError.notFound(`No material found with id '${req.params.id}'`);
  }
  const clean = validateMaterial(req.body, { partial: true });
  const updated = store.update(req.params.id, clean);
  res.status(200).json({ data: updated });
}

/** DELETE /api/materials/:id — remove, or 404. */
function deleteMaterial(req, res) {
  const removed = store.remove(req.params.id);
  if (!removed) {
    throw ApiError.notFound(`No material found with id '${req.params.id}'`);
  }
  res.status(200).json({ message: "Material deleted", id: req.params.id });
}

module.exports = {
  listMaterials,
  searchMaterials,
  getMaterial,
  createMaterial,
  replaceMaterial,
  updateMaterial,
  deleteMaterial,
};
