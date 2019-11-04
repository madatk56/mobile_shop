const orderProducts = require('./insertOrder');
const order ={
    userName:'guest',
    productCode:'1',
    quantityOrdered:'1'
}
orderProducts(order).then(rs=>{
    console.log(rs)
})