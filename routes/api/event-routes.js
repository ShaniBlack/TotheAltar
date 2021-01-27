const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/event"
router.route("/").get(eventController.findAll).post(eventController.create);

// Matches with "/api/event/:id"
router
  .route("/:id")
  .get(eventController.findByPk)
  .put(eventController.update)
  .delete(eventController.delete);

module.exports = router;
