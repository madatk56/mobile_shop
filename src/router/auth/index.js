const login = require('./login');
const router = require('express').Router();
const directory = require('../../config/api');
router.post(directory.LOGIN.signIn,login);

module.exports = router;