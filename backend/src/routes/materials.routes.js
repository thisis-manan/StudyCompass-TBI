const { Router } = require("express");
const controller = require("../controllers/materials.controller");
const asyncHandler = require("../utils/asyncHandler");

const router = Router();

// NOTE: /search is declared before /:id so that "search" isn't captured as an id.
router.get("/search", asyncHandler(controller.searchMaterials));

router
  .route("/")
  .get(asyncHandler(controller.listMaterials))
  .post(asyncHandler(controller.createMaterial));

router
  .route("/:id")
  .get(asyncHandler(controller.getMaterial))
  .put(asyncHandler(controller.replaceMaterial))
  .patch(asyncHandler(controller.updateMaterial))
  .delete(asyncHandler(controller.deleteMaterial));

module.exports = router;
