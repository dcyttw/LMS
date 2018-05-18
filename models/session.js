const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  cohortID: { type: mongoose.Schema.Types.ObjectId, ref: 'Cohort' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true }
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;