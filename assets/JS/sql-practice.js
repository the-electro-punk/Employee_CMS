const express = require('express')
const mysql = require('mysql')
const app = express();
var connection = require('./database.js')

// const db = require('./database.js')

app.get('/', function(req, res){
    res.send('Hey there!');
})

app.listen(3305, function(){
    console.log("app is listening on port 3305");

});