// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = process.env.EMPDB_URL
  ? new Sequelize(process.env.EMPDB_URL)
  : new Sequelize('sequelize_library', 'bwr2555@hotmail.com', 'Majora-2000', {
      host: 'localhost',
      port: 2999,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });

// Exports the connection for other files to use
module.exports = sequelize;
