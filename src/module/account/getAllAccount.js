const conn = require('../../controller/connection');

const selectUserString = 'SELECT userName,password FROM dbo.account';
module.exports = () => {
    conn.connection.connect(err => {
        if (err) {
            return Error 'error connect to server';
        }
        conn.request.query(selectUserString, (err, data) => {
            if (err) {
                return {
                    code: '401',
                    message: 'Connect DataBase Error'
                }
            } else {
                return data;
            }
            conn.connection.close();
        });
    });
}
