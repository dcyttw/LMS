const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }]
});

const Cohort = mongoose.model("Cohort", cohortSchema);

module.exports = Cohort;