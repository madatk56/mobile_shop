const insertOrder = require('../../module/order/insertOrder');

module.exports = (req,res)=>{
    const order ={
        productCode: req.productCode,
        quantityOrdered: req.quantityOrdered,
        token: req.token
    }
    insertOrder(order).then(result=>{
        res.json(result);
    })
}