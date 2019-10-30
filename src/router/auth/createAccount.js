const createAccount = require('../../module/account/createAccount');

module.exports = (req,res)=>{
    const  user ={
        userName: req.body.userName,
        password: req.body.password,
        fullName: req.body.fullName
    }
    createAccount(user).then(result=>{
        if(result.code=='200'){
            res.json({
                code:'200',
                message:'created your account'
            })
        }else if(result.code =='520'){
            res.json({
                code:'520',
                message:'username is existing'
            })
        }
    })
}
