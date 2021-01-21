const router = require("express").Router();
const vendorController = require("../controllers/vendorController");

// Matches with "/api/event"
router.route("/")
  .get(vendorController.findAll)
  .post(vendorController.create);

// Matches with "/api/event/:id"
router
  .route("/:id")
  .get(vendorController.findById)
  .put(vendorController.update)
  .delete(vendorController.remove);

module.exports = router;
