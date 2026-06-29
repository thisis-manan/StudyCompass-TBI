const { Router } = require("express");

const router = Router();

/** GET /api/health — simple liveness probe used by the frontend & monitoring. */
router.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "studycompass-backend",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
