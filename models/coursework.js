const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseworkSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true }
});

const Coursework = mongoose.model("Coursework", courseworkSchema);

module.exports = Coursework;