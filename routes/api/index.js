const router = require("express").Router();
const cohortRoutes = require("./cohorts");
const sessionRoutes = require("./sessions");

// Cohort routes
router.use("/cohorts", cohortRoutes);
// Session routes
router.use("/sessions", sessionRoutes);

module.exports = router;