/**
 * Wrap an async (or sync) route handler so any thrown error — including
 * rejected promises — is forwarded to Express's error middleware via next().
 * Lets controllers `throw new ApiError(...)` instead of repeating try/catch.
 */
function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = asyncHandler;
