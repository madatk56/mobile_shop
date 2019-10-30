const conn = require('../../controller/connection');

module.exports = (user) => {
    const userName = user.userName;
    const queryString = 'SELECT userName,password FROM dbo.account '
                        +'WHERE userName=\''+userName+'\';';
    conn.connection.close();
    return new Promise((resolve,reject)=>{
        conn.connection.connect(err=>{
            if(err){
                return reject(new Error('error connect to server'))
            }
            conn.request.query(queryString,(err,data)=>{
                if(err){
                    return reject(new Error('can not get data in database'))
                }else{
                    if(data.recordset.length>0){
                        return resolve({
                            code:'200',
                            message:'exsit'
                        })
                    }
                    if(data.recordset.length<1 || !data){
                        return resolve({
                            code:'420',
                            message:'database is empty'
                        })
                    }
                    
                }
            conn.connection.close();
            })
        })
    })
}
