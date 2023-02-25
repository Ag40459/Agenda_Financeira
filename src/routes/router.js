const express = require('express');
const { authenticationNewUser } = require('../authenticates/authenticateNewUser');
const router = express();
const { registerUser } = require('../controller/user');
const { schemesUsers } = require('../validation/schemesUser');

router.post('/registerUser', authenticationNewUser(schemesUsers), registerUser);


module.exports = router;