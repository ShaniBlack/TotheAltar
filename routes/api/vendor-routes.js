const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");

// Matches with "/api/vendor"
router.route("/")
  .get(vendorController.findAll)
  .post(vendorController.findOrCreate);

// Matches with "/api/vendor/:id"
router
  .route("/:id")
  .get(vendorController.findByPk)
  .put(vendorController.update)
  .delete(vendorController.remove);

module.exports = router;
