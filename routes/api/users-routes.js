const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/event"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.findOrCreate);

// Matches with "/api/event/:id"
router
  .route("/:id")
  .get(usersController.findByPk)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
