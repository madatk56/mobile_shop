const verifyAccount = require('../../module/account/verifyAccount');
module.exports=(req,res)=>{
   // console.log(req.body);
   const user = {
       userName: req.body.userName,
       password: req.body.password
   }
   verifyAccount(user).then(result=>{
       res.json(result);
   })
}