const conn = require('../../controller/connection');

module.exports = (user) => {
    const getProduct = 'SELECT * FROM dbo.account WHERE userName=\'' + user + '\';'
    conn.connection.connect(err => {
        if (err) {
            return Error 'error connect to server';

        }
        conn.request.query(getProduct, (err, data) => {
            if (err) {
                return {
                    code: '401',
                    message: 'connecting to database is error'
                }
            }
            else {
                return data;
            }
            conn.connection.close();
        })
    })
}
