// controllers/appointmentsControllers.js

const Appointments = require("../models/appointmentsModels");

exports.bookAppointments = async (req, res) => {
  const { date, time } = req.body;

  try {
    // Validate input
    if (
      !date ||
      !time ||
      !isValidDateFormat(date) ||
      !isValidTimeFormat(time)
    ) {
      return res.status(400).json({ message: "Invalid date or time format" });
    }

    // Validate future date
    if (new Date(date) <= new Date()) {
      return res.status(400).json({ message: "Date must be in the future" });
    }

    // Check availability
    const existingAppointments = await Appointments.findOne({ date, time });
    if (existingAppointments) {
      return res
        .status(409)
        .json({ message: "Appointment slot is already booked" });
    }

    // Create appointment
    const newAppointments = await Appointments.create({ date, time });

    // Confirm booking
    res
      .status(200)
      .json({
        message: "Appointment booked successfully",
        appointments: newAppointments,
      });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to validate date format (YYYY-MM-DD)
function isValidDateFormat(date) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(date);
}

// Function to validate time format (HH:mm)
function isValidTimeFormat(time) {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(time);
}
