const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;
module.exports= (token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secretKey,(err,decode)=>{
            if(err){
                return(reject(new Error('err decode token')));
            }else{
                //console.log(decode);
                return(resolve(decode));
            }
        })
    })
}
