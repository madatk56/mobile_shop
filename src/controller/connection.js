const sql = require('mssql/msnodesqlv8');
const config = require('./config');
const connection = new sql.ConnectionPool(config);
const request = new sql.Request(connection);
module.exports = {
    connection,
    request
}
