var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'acme_company_database',
    user: 'root',
    password: 'root'
});

module.exports = connection;