const router = require("express").Router();
const cohortRoutes = require("./cohorts");

// Cohort routes
router.use("/cohorts", cohortRoutes);

module.exports = router;