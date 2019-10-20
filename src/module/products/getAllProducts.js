const conn = require('../../controller/connection');

const getAllProducts = 'SELECT * FROM dbo.product';
module.exports = ()=>{
    conn.connection.connect(err=>{
        if(err){
            return Error 'error connect to server';
        }
        conn.request.query(getAllProducts,(err,data)=>{
            if(err){
                return{
                    code: '401',
                    message:'connecting to database is error'
                }
            }else{
                return data;
            }
        conn.connection.close();
        })
    })
}