const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  sessionID: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
  status: { type: String, required: true },
  entryDate: { type: Date, default: Date.now }
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;