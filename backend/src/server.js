/**
 * server.js — application entry point. Starts the HTTP server on the configured
 * port. Run with `npm start` (or `npm run dev` for auto-reload via nodemon).
 */
const app = require("./app");
const config = require("./config/env");

app.listen(config.port, () => {
  console.log(
    `StudyCompass API running in ${config.nodeEnv} mode → http://localhost:${config.port}`
  );
});
