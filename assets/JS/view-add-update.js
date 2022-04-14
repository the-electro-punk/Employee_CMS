const fs = require('fs')
const inquirer = require('inquirer');

const express = require('express')
const router = express.Router()
const db = require('../database')

const mysql = require('mysql')

const app = express();

// this connects the JS code to the database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Acme',
    port: '3456',
})

con.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    con.query("Create Acme Database",
    function (err, result) {
        if (err) throw err;
        console.log("database created")
    })
})