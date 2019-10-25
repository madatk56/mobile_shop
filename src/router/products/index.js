const router = require('express').Router();
const directory = require('../../config/api')
const getAllProducts = require('./getAllProducts');

router.get(directory.PRODUCT.getAllProducts,getAllProducts);

module.exports=router;