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
    database: '',
    port: '3306',
})

inquirer.prompt(
    [
        {
        // asks for the name of the table for which the data will be submitted
        type: 'input', 
        name:"input_name", 
        message:'what is table name?',
        validate: (answer) => {
            if(answer === '') {
                return 'please enter a valid name'
            }
                return true
            }
        },
        {
            type:'input',
            name: 'ID_question',
            message: 'employee ID?',
            validate: (answer) => {
                if(answer === '') {
                    return 'please enter a valid name'
                }
                return true
                }
        },
        {
            type:'input',
                name: 'employee_question',
                message: 'employee name?',
                validate: (answer) => {
                    if(answer === '') {
                        return 'please enter a valid name'
                    }
                    return true
                    }
            },
        {
            type:'input',
            name: 'role_question',
            message: 'what is employee\'s position?',
            validate: (answer) => {
                if(answer === '') {
                    return 'please enter a valid name'
                }
                    return true
                }
        },
        {
        type:'input',
        name: 'department_question',
        message: 'which department?',
        validate: (answer) => {
            if(answer === '') {
                return 'please enter a valid name'
            }
            return true
            }
        },
        
    ]
).then(answers => { 
    // this converts the answers submitted into variables
    console.log('answers are ', answers) 
    const tableName = answers.input_name;
    const empID = answers.ID_question;
    const department = answers.department_question
    const nameEmp = answers.employee_question;
    const position = answers.role_question;

    // let fullstring = empID + department + nameEmp + position
    // console.log('fullstring are ', fullstring) 
    // fs.appendFile(fileName, fullstring, function (err) {
    //     if (err) throw err;
    //     console.log('saved')
    // })

    // this inputs the values submitted into the specific table entered
    connection.query(`INSERT INTO ${tableName}(ID, Employee, Position, Department) VALUES (${empID},'${nameEmp}','${position}','${department}')`, (err,rows) => {
        if(err) {
            throw err
        }
        else {
            console.log('data inserted')
            console.log(rows)
        }
    })
})

// https://www.youtube.com/watch?v=SyaJSKklH0U&ab_channel=Arslan