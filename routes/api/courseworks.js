const router = require("express").Router();
const courseworksController = require("../../controllers/courseworksController");

// Matches with "/api/courseworks"
router.route("/")
  .get(courseworksController.findAll)
  .post(courseworksController.create);

// Matches with "/api/courseworks/:id"
router.route("/:id")
  .get(courseworksController.findById)
  .put(courseworksController.update)
  .delete(courseworksController.remove);

module.exports = router;