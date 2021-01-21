const router = require("express").Router();
const vendorRoutes = require("./vendor-routes");
const eventRoutes = require("./event-routes");
const usersRoutes = require("./users-routes");

// Table routes
router.use("/vendors", vendorRoutes);
router.use("/events", eventRoutes);
router.use("/users", usersRoutes);

module.exports = router;
