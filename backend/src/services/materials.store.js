/**
 * materials.store — the data-access layer.
 *
 * A tiny file-backed "database": study materials are persisted as JSON in
 * `data/materials.json`. This keeps the project zero-dependency to run (no
 * Postgres/Mongo to install) while still surviving server restarts. The rest of
 * the app talks to these functions and never reads the file directly.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const DATA_FILE = path.join(__dirname, "..", "..", "data", "materials.json");

function readAll() {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

function writeAll(materials) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(materials, null, 2) + "\n");
}

/** Return every material. */
function list() {
  return readAll();
}

/** Find a single material by id, or `undefined` if it doesn't exist. */
function findById(id) {
  return readAll().find((m) => m.id === id);
}

/** Insert a new material and return it (timestamps + id are generated here). */
function create(data) {
  const materials = readAll();
  const now = new Date().toISOString();
  const material = {
    id: crypto.randomUUID(),
    ...data,
    createdAt: now,
    updatedAt: now,
  };
  materials.push(material);
  writeAll(materials);
  return material;
}

/**
 * Replace/merge a material by id. Pass the fields to change; `createdAt` and
 * `id` are preserved and `updatedAt` is refreshed. Returns the updated record
 * or `undefined` if no material has that id.
 */
function update(id, data) {
  const materials = readAll();
  const index = materials.findIndex((m) => m.id === id);
  if (index === -1) return undefined;

  const existing = materials[index];
  const updated = {
    ...existing,
    ...data,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: new Date().toISOString(),
  };
  materials[index] = updated;
  writeAll(materials);
  return updated;
}

/** Delete a material by id. Returns `true` if something was removed. */
function remove(id) {
  const materials = readAll();
  const next = materials.filter((m) => m.id !== id);
  if (next.length === materials.length) return false;
  writeAll(next);
  return true;
}

module.exports = { list, findById, create, update, remove };
