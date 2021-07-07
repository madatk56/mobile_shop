const conn = require('../../controller/connection');
const getProductByID = require('./getProductByID');
module.exports = (id,order)=>{
    return new Promise((resolve,reject)=>{
        getProductByID(id).then(rs=>{
            const quantityInStock =parseInt(rs.data.recordset[0].quantityInStock) ;
            const amountOfOrder = parseInt(order);
            const sub = quantityInStock - amountOfOrder ;
            if(sub>=0){
                const queryString = 'UPDATE dbo.product SET quantityInStock=\''
                                    +sub+
                                    '\' \nWHERE productCode=\''+id+'\';'
                conn.connection.close();
                conn.connection.connect(err=>{
                    if(err){
                        return reject(new Error('cant update quantityInStock'))
                    }
                    conn.request.query(queryString,(err,data)=>{
                        if(err){
                            return reject(new Error('cant update quantityInStock1'))
                        }else{
                            return(resolve({
                                code:'200',
                                message:'ok'
                            }))
                        }
                    conn.connection.close();
                    })
                })
            }else{
                return resolve({
                    code:'420',
                    message:'dont enough amount of products'
                })
            }
        })
    })
}