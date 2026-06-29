const ApiError = require("../utils/ApiError");

/**
 * Catch-all for any route that didn't match. Runs after all real routes,
 * so reaching it means the path doesn't exist → 404.
 */
function notFound(req, res, next) {
  next(ApiError.notFound(`Route not found: ${req.method} ${req.originalUrl}`));
}

module.exports = notFound;
