const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Cohort = mongoose.model("Cohort", cohortSchema);

module.exports = Cohort;