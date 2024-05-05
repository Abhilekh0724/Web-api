// models/Reservation.js

const mongoose = require("mongoose");

const reservationsSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  eventDate: { type: Date, required: true },
  numberOfGuests: { type: Number, required: true },
});

const Reservations = mongoose.model("Reservations", reservationsSchema);

module.exports = Reservations;
