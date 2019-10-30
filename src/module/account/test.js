const createAccount = require('./createAccount');
const user = {
    userName: 'admin',
    password: 'admin',
    fullName: 'dinh dat'
}
createAccount(user).then(result=>{
    console.log(result);
})
console.log('everything is ok')