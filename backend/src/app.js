/**
 * app.js — builds and configures the Express application (middleware + routes +
 * error handling). Kept separate from server.js so the app can be imported for
 * testing without binding to a port.
 */
const express = require("express");
const cors = require("cors");

const config = require("./config/env");
const materialsRoutes = require("./routes/materials.routes");
const healthRoutes = require("./routes/health.routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// --- Global middleware ---
app.use(cors({ origin: config.corsOrigin.split(",").map((o) => o.trim()) }));
app.use(express.json()); // parse JSON request bodies

// --- Routes ---
app.get("/", (req, res) => {
  res.status(200).json({
    name: "StudyCompass REST API",
    version: "1.0.0",
    endpoints: {
      health: "GET /api/health",
      list: "GET /api/materials",
      search: "GET /api/materials/search?q=",
      getOne: "GET /api/materials/:id",
      create: "POST /api/materials",
      replace: "PUT /api/materials/:id",
      update: "PATCH /api/materials/:id",
      remove: "DELETE /api/materials/:id",
    },
  });
});

app.use("/api/health", healthRoutes);
app.use("/api/materials", materialsRoutes);

// --- Error handling (must be last) ---
app.use(notFound); // unmatched routes → 404
app.use(errorHandler); // central JSON error responses

module.exports = app;
