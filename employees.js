// // sets up the database basics
// const {Model, Datatypes} = require('sequelize')
// const sequelize = require('../assets/connection.js')

// // this is the database
// class Employees extends Model {}

// // this creates the content of the database
// Employees.init(
//     {
//         department: Datatypes.STRING,
//         employee: Datatypes.STRING,
//         position: Datatypes.STRING
//     },
//     {
//         sequelize
//     }
// );

// module.exports = Employees;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bwr2555@hotmail.com",
  password: "Majora-2000",
  database: "GizmonicDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE employees (department VARCHAR(60), employee VARCHAR(60), position VARCHAR(100))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});