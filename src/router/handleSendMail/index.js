const router = require('express').Router();
const directory = require('../../config/api')
const handleSendMail = require('./handleSendMail');

router.post(directory.Mail.sendMail,handleSendMail);

module.exports = router;