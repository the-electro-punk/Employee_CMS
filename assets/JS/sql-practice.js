const fs = require('fs')
const inquirer = require('inquirer');

const express = require('express')
const mysql = require('mysql')

const app = express();

// this connects the JS code to the database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'acme_company_database',
    port: '3306',
})

connection.connect(function(err){
    if (err) {
        return console.error('err: ' +err.message);
        }
        console.log('connected to Acme Database')
})

// connection.query('SELECT * FROM employees_data', (err, res)=>{
//     return console.log(res)
// })
// const viewDept = connection.query('SELECT DISTINCT department FROM employees_data', (err, res)=>{
//     return console.log(res)
// })

inquirer.prompt([
    {
        type: 'list',
        name: 'options',
        message: 'what would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add department', 'add role', 'add employee', 'update employee role']
    },
    {
        type: 'input',
        name: 'addDept',
        message: 'name of department?',
        when (answers) {
            return answers.options === 'add department'
        }
    },
    {
        type: 'input',
        name: 'addRole',
        message: 'name of position?',
        when (answers) {
            return answers.options === 'add role'
        }
    },
    {
        type:'input',
        name: 'ID_question',
        message: 'employee ID?',
        when (answers) {
            return answers.options === 'add employee'
        }
    },
    {
        type:'input',
        name: 'employee_question',
        message: 'employee name?',
        when (answers) {
            return answers.options === 'add employee'
        }
        },
    {
        type:'input',
        name: 'role_question',
        message: "what is employee's position?",
        when (answers) {
            return answers.options === 'add employee'
        }
    },
    {
    type:'input',
    name: 'department_question',
    message: 'which department?',
    when (answers) {
        return answers.options === 'add employee'
    }
    }

]).then(answers => {
    console.info('Answer:', answers.options);
    if (answers.options === 'view all departments') {
        return connection.query('SELECT DISTINCT department FROM departments', (err, res)=>{
            return console.log(res)
        })
    }
    else if (answers.options === 'view all roles') {
            return connection.query('SELECT DISTINCT position FROM roles', (err, res)=>{
                return console.log(res)
            })
    }
    else if (answers.options === 'view all employees') {
            return connection.query('SELECT * FROM employees_data', (err, res)=>{
                return console.log(res)
            })
    }
    else if (answers.options === 'add department') {
        return connection.query(`INSERT INTO departments (department) VALUES ('${answers.addDept}')`, (err, res)=>{
            return console.log(res)
        })
    }
    else if (answers.options === 'add role') {
        return connection.query(`INSERT INTO roles (Position) VALUES ('${answers.addRole}')`, (err, res)=>{
            return console.log(res)
        })
    }
    else if (answers.options === 'add role') {
        return connection.query(`INSERT INTO employees_data (id, emp_name, position, department) VALUES (${answers.ID_question}, '${answers.employee_question}', '${answers.role_question}', '${answers.department_question}')`, (err, res)=>{
            return console.log(res)
        })
    }
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