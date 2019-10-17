const conn = require('../../controller/connection');

module.exports = (year) => {
    const StringQuery = ''
    conn.connection.connect(err => {
        if (err)=> {
            return Error 'error connect to database server'
        }
        conn.request.query(StringQuery, (err, date) => {
            if (err)=> {
                return {
                    code: '401',
                    message: 'Connect Database Error'
                }
            }else {
                return {
                    code: '200',
                    message: 'Ok',
                    data: data
                }
            }
        })
    })
}