const products = require('./products/index');
const login = require('./auth/index');
const sendMail =require('./handleSendMail/index')
const directory = require('../config/api');
//const order = require('./order/index')

module.exports=(app)=>{
    app.use(directory.ROOT_API.PRODUCTS,products);
    app.use(directory.ROOT_API.HOMEPAGE,login);
    app.use(directory.ROOT_API.HOMEPAGE,sendMail);
    //app.use(directory.ROOT_API.ROOT_ORDER,order)
}