const products = require('./products/index');
const directory = require('../config/api');

module.exports=(app)=>{
    app.use(directory.ROOT_API.PRODUCTS,products)
}