
const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

const Appointments = mongoose.model('Appointments', appointmentsSchema);

module.exports = Appointments;
