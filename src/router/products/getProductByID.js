const getProductByID = require('../../module/products/getProductByID');

module.exports = (req, res) => {
    getProductByID(req.params.ID).then(result => {
        if (result.code == 200) {
            res.json({
                code: '200',
                title: 'Success',
                data: {
                    message: result.message,
                    products: result.data.recordsets[0]
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