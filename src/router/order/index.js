const router = require('express').Router();

const directory = require('../../config/api');
const insertOrder = require('./insertOrder');

router.post(directory.ORDER.insertOrder,insertOrder);

module.exports= router;
