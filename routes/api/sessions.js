const router = require("express").Router();
const sessionsController = require("../../controllers/sessionsController");

// Matches with "/api/sessions"
router.route("/")
  .get(sessionsController.findAll)
  .post(sessionsController.create);

// Matches with "/api/sessions/:id"
router.route("/:id")
  .get(sessionsController.findById)
  .put(sessionsController.update)
  .delete(sessionsController.remove);

module.exports = router;