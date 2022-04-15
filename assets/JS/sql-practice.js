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
        name: 'addDeptID',
        message: 'department id?',
        when (answers) {
            return answers.options === 'add department'
        }
    },
    {
        type: 'input',
        name: 'addRoleName',
        message: 'name of position?',
        when (answers) {
            return answers.options === 'add role'
        }
    },
    {
        type: 'input',
        name: 'addRoleID',
        message: 'position ID?',
        when (answers) {
            return answers.options === 'add role'
        }
    },
    {
        type: 'input',
        name: 'addRoleDept',
        message: 'position department?',
        when (answers) {
            return answers.options === 'add role'
        }
    },
    {
        type: 'input',
        name: 'addRoleSalary',
        message: 'position salary?',
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
    },
    {
        type:'input',
        name: 'new_id',
        message: 'New ID?',
        when (answers) {
            return answers.options === 'update employee role'
        }
    },
    {
        type:'input',
        name: 'employee_name',
        message: 'which employee?',
        when (answers) {
            return answers.options === 'update employee role'
        }
    },
    {
        type:'input',
        name: 'new_position',
        message: 'New Position?',
        when (answers) {
            return answers.options === 'update employee role'
        }
    },
    {
        type:'input',
        name: 'new_department',
        message: 'New Department?',
        when (answers) {
            return answers.options === 'update employee role'
        }
    }

]).then(answers => {
    console.info('Answer:', answers.options);
    if (answers.options === 'view all departments') {
        return connection.query('SELECT DISTINCT department, id FROM departments ORDER BY id', (err, res)=>{
            return console.log(res)
        })
    }
    else if (answers.options === 'view all roles') {
            return connection.query('SELECT DISTINCT position, role_id, department, salary FROM roles ORDER BY role_id', (err, res)=>{
                return console.log(res)
            })
    }
    else if (answers.options === 'view all employees') {
            return connection.query('SELECT * FROM employees_data', (err, res)=>{
                return console.log(res)
            })
    }
    else if (answers.options === 'add department') {
        return connection.query(`INSERT INTO departments (department, id) VALUES ('${answers.addDept}', "'${answers.addDeptID}'")`, (err, res)=>{
            return console.log(res)
        })
    }
    else if (answers.options === 'add role') {
        return connection.query(`INSERT INTO roles (Position, role_id, department, salary) VALUES ('${answers.addRoleName}','${answers.addRoleID}','${answers.addRoleDept}','${answers.addRoleSalary}')`, (err, res)=>{
            return console.log(res)
        })
    }
    else if (answers.options === 'add employee') {
        return connection.query(`INSERT INTO employees_data (id, emp_name, position, department) VALUES ('${answers.ID_question}', '${answers.employee_question}', '${answers.role_question}', '${answers.department_question}')`, (err, res)=>{
            return console.log(res)
        })
    }
    else if (answers.options === 'update employee role') {
        return connection.query(`UPDATE employees_data SET id = '${answers.new_id}', position = '${answers.new_position}', department = '${answers.new_department}' WHERE emp_name = '${answers.employee_name}'`, (err, res)=>{
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