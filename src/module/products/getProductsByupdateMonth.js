const conn = require('../../controller/connection');

module.exports = (date) => {
    const month = month(date);
    const year = year(date);
    const dateQueryString = 'SELECT productCode FROM dbo.product '
        + 'WHERE month(dbo.product.updateTime)=' + month
        + 'AND year(dbo.product.updateTime)=' + year;
    conn.connection.connect(err => {
        if (err) {
            return Error 'error connect to server';
        }
        conn.request.query(dateQueryString, (err, data) => {
            if (err) {
                return {
                    code: '401',
                    message: 'Connect DataBase Error'
                }
            } else {
                return {
                    code: '200',
                    message: 'Ok',
                    data: data
                }
            }
            conn.connection.close();
        })
    })
}