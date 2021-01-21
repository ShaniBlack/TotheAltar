const router = require("express").Router();
const eventRoutes = require("./event-routes");
const vendorRoutes = require("./vendor-routes")

// Event routes
router.use("/events", eventRoutes);
router.use("/vendors", vendorRoutes)

module.exports = router;