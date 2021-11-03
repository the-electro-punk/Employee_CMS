// sets up the database basics
const {Model, Datatypes} = require('sequelize')
const sequelize = require('../folder/filename.js')

// this is the database
class Employees extends Model {}

// this creates the content of the database
Employees.init(
    {
        department: Datatypes.STRING,
        employee: Datatypes.STRING,
        position: Datatypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Employees;