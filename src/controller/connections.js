const sql = require('mssql/msnodesqlv8');
const config = require('./config');
const queryString = 'SELECT productCode FROM dbo.product';
function getData() {
    let conn =  new sql.ConnectionPool(config);
    let req = new sql.Request(conn);

    conn.connect(err => {
        if (err) {
            console.log(err);
            return;
        }
        req.query(queryString, (err, data) => {
            if (err) {
                console.log('loi connect');
            } else {
                console.log(data);
            }
            conn.close();
        });
    });
}
getData();

