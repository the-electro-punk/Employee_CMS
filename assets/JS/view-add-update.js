const fs = require('fs')
const inquirer = require('inquirer');
// const PathPrompt = require('inquirer-path')

const express = require('express')
const router = express.Router()
// const db = require('../database')

const mysql = require('mysql')

const app = express();

// this connects the JS code to the database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: '',
    port: '3306',
})

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected");
//     connection.query("Create Gizmonic Database",
//     function (err, result) {
//         if (err) throw err;
//         console.log("database created")
//     })
// })
connection.connect(function(error){
    if (error) throw error;
    console.log("connected at " +connection.threadId+ "\n");
    viewDept()
})
function viewDept() {
    inquirer.prompt([
        connection.query("SELECT * FROM employees", function(error, results){
            console.log("results",results);
            connection.end
        })
    ])
}

// inquirer.prompt([
//     {
//         type: 'list',
//         name: 'options',
//         message: 'what would you like to do?',
//         choices: ['view all departments', 'view all roles', 'view all employees', 'add department', 'add role', 'add employee', 'update employee role']
//     }
// ]).then(answers => {
//     console.info('Answer:', answers.options);
// });

// router.get('/user-list',
// function(req,res,next) {
//     var sql="SELECT * FROM users";
//     db.query(sql, function (err, data, fields) {if (err) throw err;
//     res.render('user-list', {
//         title: 'User List', userdata: data
//         })
//     })
// })