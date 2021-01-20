const router = require("express").Router();
const eventRoutes = require("./events");
const vendorRoutes = require("./vendors")

// Event routes
router.use("/events", eventRoutes);
router.use("/vendors", vendorRoutes)

module.exports = router;