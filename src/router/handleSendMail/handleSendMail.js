const sendMail = require('../../module/sendMail/sendMail');
const verifyToken = require('../../module/token/verifyToken');
module.exports= (req,res)=>{
    verifyToken(req.body.token).then(decode=>{
        if(decode.userName=='admin'){
            sendMail().then(result=>{
                res.json(result);
            })
        }else{
            res.json({
                code:'420',
                message:'user is not admin'
            })
        }
    })
}