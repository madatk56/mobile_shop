const quantityInStock = require('./updateQuantityInStock');

quantityInStock('1','2').then(rs=>{
    console.log(rs)
})
console.log('its ok')