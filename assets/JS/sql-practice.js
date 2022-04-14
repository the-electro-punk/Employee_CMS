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