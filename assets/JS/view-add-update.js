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
    database: 'Acme',
    port: '3306',
})

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("connected");
//     con.query("Create Acme Database",
//     function (err, result) {
//         if (err) throw err;
//         console.log("database created")
//     })
// })

inquirer.prompt([
    {
        type: 'list',
        name: 'options',
        message: 'what would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add department', 'add role', 'add employee']
    }
]).then(answers => {
    console.info('Answer:', answers.options);
});

// router.get('/user-list',
// function(req,res,next) {
//     var sql="SELECT * FROM users";
//     db.query(sql, function (err, data, fields) {if (err) throw err;
//     res.render('user-list', {
//         title: 'User List', userdata: data
//         })
//     })
// })