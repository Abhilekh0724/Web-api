const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.post('/create', productControllers.createProduct);

module.exports = router;