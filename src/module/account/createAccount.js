const conn = require('../../controller/connection');
const getAccountByUserName = require('./getAccountByUserName');
module.exports = (user) => {
    return new Promise((resolve, reject) => {
        const queryString = 'INSERT INTO dbo.account (userName,password)'
            + 'VALUES(\''+ user.userName + '\',\'' + user.password + '\');'
            + 'INSERT INTO dbo.customer(userName,fullName)'
            + 'VALUES(\'' + user.userName + '\',\'' + user.fullName + '\');';
        getAccountByUserName(user).then(result => {
            if (result.code == '200') {
                return (resolve({
                    code: '520',
                    message: 'account is existing'
                }))
            } else if (result.code == '420') {
                conn.connection.close();
                conn.connection.connect(err => {
                    if (err) {
                        return reject(new Error('can not get data in database'))
                    }
                    conn.request.query(queryString, (err, data) => {
                        if (err) {
                            return (resolve({
                                code: '520',
                                message: 'account is existing'
                            }))
                        } else {
                            return (resolve({
                                code: '200',
                                message: 'ok'
                            }))
                        }
                        conn.connection.close();
                    })
                })
            }
        })
    })
}