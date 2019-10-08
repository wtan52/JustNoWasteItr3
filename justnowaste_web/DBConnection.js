const mysql = require('mysql');

function getConnection() {
    var con = mysql.createConnection({
        host: "industriesdb.c8fentaxoec5.ap-southeast-2.rds.amazonaws.com",
        user: "admin",
        password: "adminadmin",
        port: 3306,
        database: "industriesdb",
        multipleStatements: true
    });
    return con;
}

module.exports.getConnection = getConnection;