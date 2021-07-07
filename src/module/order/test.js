const insertOrder = require('./insertOrder');
const order ={
    token:'',
    productCode:'1',
    quantityOrdered:'2'
}
insertOrder(order).then(rs=>{
    console.log(rs);
})