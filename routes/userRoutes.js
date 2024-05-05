//importing only router as u dont need the whole express

const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

//Make a create user API

router.post('/create', userControllers.createUser);

//exporting
module.exports = router;