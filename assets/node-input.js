const fs = require('fs')
const inquirer = require('inquirer');

inquirer.prompt({
    questions: [
        {
        // asks for filename; didn't know how to use ONLY at start so must input for every employee entered
        type: 'input', 
        name:"input_name", 
        message:'what is filename.html?',
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
    ]
}).then(answers => { 
    const fileName = answers.items[i].input_name;
    const department = answers.items[i].department_question
    const nameEmp = answers.items[i].employee_question;
    const position = answers.items[i].role_question;

    let fullstring = fileName + department + nameEmp + position
    fs.appendFile(fileName, fullstring, function (err) {
        if (err) throw err;
        console.log('saved')
    })
})