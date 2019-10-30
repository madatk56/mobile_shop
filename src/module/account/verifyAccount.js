const getAccount = require('./getAccount');
const jwt = require('jsonwebtoken');
const secretKey = require('../../config/constants').secretKey;
module.exports = (user) => {
    return new Promise((resolve, reject) => {
        getAccount(user).then(result => {

            if (result.code == '200') {
                jwt.sign(user, secretKey, (err, token) => {
                    if (err) {
                        return reject(new Error('token err'))
                    }else{
                        return resolve({
                            code: '200',
                            message: 'ok',
                            account: {
                                userName: user.userName,
                                password: user.password,
                                token: token,
                            }
                        })
                    }
                })
            } else {
                if (result.code == '420') {
                    return resolve({
                        code: '420',
                        message: 'username or password is incorrect'
                    })
                }
            }
        })
    })
}