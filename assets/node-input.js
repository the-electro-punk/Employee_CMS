const fs = require('fs')
const inquirer = require('inquirer');

const express = require('express')
const mysql = require('mysql')

const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Gizmonic',
    port: '3306',
})

inquirer.prompt(
    [
        // {
        // // // asks for filename; didn't know how to use ONLY at start so must input for every employee entered
        // type: 'input', 
        // name:"input_name", 
        // message:'what is filename.html?',
        // validate: (answer) => {
        //     if(answer === '') {
        //         return 'please enter a valid name'
        //     }
        //         return true
        //     }
        // },
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
    
    console.log('answers are ', answers) 
    // const fileName = answers.input_name;
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
    connection.query(`INSERT INTO empList(ID, Employee, Position, Department) VALUES (${empID},'${nameEmp}','${position}','${department}')`, (err,rows) => {
        if(err) {
            throw err
        }
        else {
            console.log('data inserted')
            console.log(rows)
        }
    })
})