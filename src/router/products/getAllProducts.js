const getAllProducts = require('../../module/products/getAllProducts');

module.exports = (req, res) => {
    getAllProducts.then(result => {
        if (result.code == 200) {
            res.json({
                code: '200',
                title: 'Success',
                data: {
                    message: result.message,
                    products: result.data.recordset
                }
            })
        } else if (result.code == 420) {
            return res.json({
                code: '420',
                title: 'get Empty',
                data: {
                    message: result.message
                }
            })
        }
    })
}