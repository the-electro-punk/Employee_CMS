const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'acme_company_database'
})

// connection.connect()

connection.connect(function(err) {
    if (err) throw err;
    console.log('you are now connected')
})