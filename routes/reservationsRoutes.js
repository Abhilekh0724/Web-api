// routes/reservationsRoutes.js

const express = require('express');
const router = express.Router();
const reservationsControllers = require('../controllers/reservationsControllers');

router.post('/create', reservationsControllers.createReservations);

module.exports = router;