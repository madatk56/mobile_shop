const conn = require('../../controller/connection');

const getAllProducts = 'SELECT * FROM dbo.product';

module.exports = new Promise((resolve, reject) => {
    conn.connection.close();
    conn.connection.connect(err => {
        if (err) {
            return reject(new Error('error connect to server'))
        }
        conn.request.query(getAllProducts, (err, data) => {
            if (err) {
                return reject(new Error('can not get data in database'))
            } else {
                if (data) {
                    return resolve({
                        code: '200',
                        message: 'OK',
                        data: data
                    })
                } else {
                    return resolve({
                        code: '420',
                        message: 'database is empty'
                    })
                }
            }
        conn.connection.close();
        })
    })
})
