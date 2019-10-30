const verifyAccount = require('./verifyAccount');
const getAccount = require('./getAccount');
const verifyToken = require('../token/verifyToken');
const user = {
    userName: 'admin',
    password: 'admin'
}
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTU3MjQxMDcwMn0.apB8U7K2Cj8hIIt1fPZaRaVC0C9Mtgu5Qna7eNN1tho';
console.log(verifyToken.verify(token));
/* verifyAccount(user).then(result=>{
    console.log(result);
}) */
console.log('everything is ok')