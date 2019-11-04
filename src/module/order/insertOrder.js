const conn = require('../../controller/connection');
const verifyToken = require('../token/verifyToken');
const getAccountByUser =require('../account/getAccountByUserName');
module.exports = (order)=>{
    return new Promise((resolve,reject)=>{
        verifyToken(order.token).then(decode=>{
            getAccountByUser(decode.userName).then(result=>{
                if(result.code=='200'){
                    const queryString = 'INSERT INTO dbo.sale(userName,productCode,quantityOrdered) \n'
                    +'VALUES(\''+order.userName+'\',\''
                    +order.productCode+'\',\''
                    +order.quantityOrdered+'\')';
                    conn.connection.close();
                    conn.connection.connect(err=>{
                        if(err){
                            return(reject('err connect to server'))
                        }
                        conn.request.query(queryString,(err,data)=>{
                            if(err){
                                return(resolve({
                                    code:'420',
                                    message:''+err
                                }))
                            }else{
                                return(resolve({
                                    code:'200',
                                    message:'ok'
                                }))
                            }
                            conn.connection.close();
                        })
                    })
                }
            })
        })
    })
}