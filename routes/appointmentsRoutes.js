// routes/appointmentsRoutes.js

const express = require('express');
const router = express.Router();
const appointmentsControllers = require('../controllers/appointmentsControllers');

router.post('/create', appointmentsControllers.bookAppointments);

module.exports = router;