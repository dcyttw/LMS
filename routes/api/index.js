const router = require("express").Router();
const cohortRoutes = require("./cohorts");
const sessionRoutes = require("./sessions");
const courseworkRoutes = require("./courseworks");

// Cohort routes
router.use("/cohorts", cohortRoutes);
// Session routes
router.use("/sessions", sessionRoutes);
// Coursework routes
router.use("/courseworks", courseworkRoutes);

module.exports = router;