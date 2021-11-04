// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('blogger', 'bwr2555@hotmail.com', 'Majora-2000', {
      host: 'localhost',
      port: 3456,
      dialect: 'mysql'
    });

// Exports the connection for other files to use
module.exports = sequelize;
