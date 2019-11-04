const conn = require('../../controller/connection');
const verifyToken = require('../token/verifyToken');
module.exports= (order)=>{
    return new Promise((resolve,reject)=>{
        verifyToken(order.token).then(decode=>{
            const userName=decode.userName;
            const queryString = 'INSERT INTO dbo.sale(userName,productCode,quantityOrdered) \n'
                                +'VALUES(\''+userName+'\',\''
                                +order.productCode+'\',\''
                                +order.quantityOrdered+'\')';
            conn.connection.close();
            conn.connection.connect(err=>{
                if(err){
                    return(new Error('cant connect to server'))
                }
                conn.request.query(queryString,(err,data)=>{
                    if(err){
                        return(resolve({
                            code:'420',
                            message:err
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
        })
    })
}