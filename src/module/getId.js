const conn = require('../controller/connection');
const queryString = 'SELECT productCode FROM dbo.product';
function getProductCode(){
    conn.connection.connect(err=>{
        if(err){
            console.log('dang bi loi');
            return;
        }
        conn.request.query(queryString,(err,data)=>{
            if(err){
                console.log('loi connect');
            }else{
                console.log(data);
            }
        conn.connection.close();
        });
    });
}
getProductCode();