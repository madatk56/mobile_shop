const router = require('express').Router();
const directory = require('../../config/api');

const login = require('./login');
const createAccount = require('./createAccount');
router.post(directory.LOGIN.signIn,login);
router.put(directory.LOGIN.createAccount,createAccount);
module.exports = router;