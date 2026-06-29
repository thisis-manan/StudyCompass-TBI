const ApiError = require("../utils/ApiError");
const config = require("../config/env");

/**
 * Central error-handling middleware. Express recognises it by its four
 * arguments. Every thrown/forwarded error funnels through here and is returned
 * as a consistent JSON shape:
 *
 *   { "error": { "message": "...", "status": 400, "details": {...} } }
 */
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const isKnown = err instanceof ApiError;
  const statusCode = isKnown ? err.statusCode : 500;

  // Malformed JSON bodies are thrown by express.json() with this signature.
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      error: { message: "Invalid JSON in request body", status: 400 },
    });
  }

  if (!isKnown) {
    // Unexpected error — log the full stack server-side, hide it from clients.
    console.error("[unhandled error]", err);
  }

  res.status(statusCode).json({
    error: {
      message: isKnown ? err.message : "Internal server error",
      status: statusCode,
      ...(err.details ? { details: err.details } : {}),
      ...(config.nodeEnv === "development" && !isKnown
        ? { stack: err.stack }
        : {}),
    },
  });
}

module.exports = errorHandler;
