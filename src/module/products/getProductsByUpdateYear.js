const conn = require('../../controller/connection');

module.exports = (date)=>{
    const year = year(date);
    const dateQueryString = 'SELECT productCode FROM dbo.product '
                            + 'WHERE year(dbo.product.updateTime)=' + year;
                            
    return new Promise((resolve, reject) => {
        conn.connection.connect(err=>{
            if(err){
                return reject(new Error('error connect to server'))
            }
            conn.request.query(dateQueryString,(err,data)=>{
                if(err){
                    return reject(new Error('can not get data in database'))
                }else{
                    if (data) {
                        return resolve({
                            code: '200',
                            message: 'OK',
                            data: data
                        })
                    } else {
                        return resolve({
                            code: '420',
                            message: 'database is empty'
                        })
                    }
                }
                conn.connection.close();   
            })
        })
    })
}