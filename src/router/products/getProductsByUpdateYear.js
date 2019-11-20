const getProducts = require('../../module/products/getProductsByUpdateYear');

module.exports = (req, res) => {
    getProducts.then(result => {
        if (result.code == 200) {
            res.json({
                code: '200',
                title: 'Success',
                data: {
                    message: result.message,
                    products: result.data
                }
            })
        } else if (result.code == 420) {
            res.json({
                code: '420',
                title: 'get Empty',
                data: {
                    message: result.message
                }
            })
        }
    })
}