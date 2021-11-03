const Employees = require('..employees')
const sequelize = require('../mySQL-connect.js')

const employeeData = [
    {
        department: 'Sales',
        employee: 'John Doe',
        position: 'Office Clerk'
    },
    {
        department: 'Sales',
        employee: 'Jane Smith',
        position: 'Secretary'
    },
    {
        department: 'Sales',
        employee: 'Benson Dunwoody',
        position: 'Manager'
    },
    {
        department: 'Sales',
        employee: 'Dwight Shrute',
        position: 'Assistant Manager'
    },
    {
        department: 'IT',
        employee: 'Clayton Forrester',
        position: 'Systems Anylist'
    },
    {
        department: 'IT',
        employee: 'Tony Stark',
        position: 'IT Technician'
    },
    {
        department: 'IT',
        employee: 'Maurice Moss',
        position: 'Support Specialist'
    },
    {
        department: 'Human Resources',
        employee: 'Donovan Specter',
        position: 'Human Resources Manager'
    },
    {
        department: 'Human Resources',
        employee: 'Pearl Forrester',
        position: 'Human Resources Information Specialist'
    },
    {
        department: 'Security',
        employee: 'William Afton',
        position: 'Chief of Security'
    },
    {
        department: 'Security',
        employee: 'Toni Zarindist',
        position: 'Security Guard'
    },
    {
        department: 'Security',
        employee: 'Jeffrey McCreedy',
        position: 'Security Guard'
    },
]