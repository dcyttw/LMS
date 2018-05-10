const router = require("express").Router();
const cohortsController = require("../../controllers/cohortsController");

// Matches with "/api/cohorts"
router.route("/")
  .get(cohortsController.findAll)
  .post(cohortsController.create);

// Matches with "/api/cohorts/:id"
router.route("/:id")
  .get(cohortsController.findById)
  .put(cohortsController.update)
  .delete(cohortsController.remove);

module.exports = router;