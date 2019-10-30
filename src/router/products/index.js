const router = require('express').Router();
const directory = require('../../config/api')
const getAllProducts = require('./getAllProducts');
const getProductByID = require('./getProductByID');
const getProductsByUpdateYear = require('./getProductsByUpdateYear')
router.get(directory.PRODUCT.getAllProducts,getAllProducts);
router.get(directory.PRODUCT.getProductByID,getProductByID);
router.get(directory.PRODUCT.getProductByUpdateYear,getProductsByUpdateYear);
module.exports=router;