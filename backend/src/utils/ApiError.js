/**
 * ApiError — an Error subclass that carries an HTTP status code (and optional
 * machine-readable details). Throw this anywhere in the request lifecycle and
 * the central error-handling middleware will turn it into a clean JSON response.
 */
class ApiError extends Error {
  /**
   * @param {number} statusCode HTTP status code (e.g. 400, 404)
   * @param {string} message    Human-readable error message
   * @param {object} [details]  Optional extra context (e.g. validation fields)
   */
  constructor(statusCode, message, details) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = "ApiError";
    Error.captureStackTrace?.(this, this.constructor);
  }

  static badRequest(message, details) {
    return new ApiError(400, message, details);
  }

  static notFound(message = "Resource not found") {
    return new ApiError(404, message);
  }
}

module.exports = ApiError;
