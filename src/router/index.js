const products = require('./products/index');
const login = require('./auth/index');
const sendMail =require('./handleSendMail/index')
const directory = require('../config/api');


module.exports=(app)=>{
    app.use(directory.ROOT_API.PRODUCTS,products);
    app.use(directory.ROOT_API.HOMEPAGE,login);
    app.use(directory.ROOT_API.HOMEPAGE,sendMail);
}