/**
 * Centralised environment configuration.
 * Loads variables from `.env` (see `.env.example` for the required keys)
 * and exposes them with sensible defaults so the rest of the app never
 * touches `process.env` directly.
 */
require("dotenv").config();

const config = {
  port: Number(process.env.PORT) || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  // Comma-separated list of origins allowed to call the API (CORS).
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3000",
};

module.exports = config;
