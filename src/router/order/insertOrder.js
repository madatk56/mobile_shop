const insertOrder = require('../../module/order/insertOrder');
module.exports = (req, res) => {
    const order = {
        productCode: req.body.productCode,
        quantityOrdered: req.body.quantityOrdered,
        token: req.body.token
    }
    
    insertOrder(order).then(result => {
        res.json(result);
    })
}