const env = require('./env');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: true,
 
  pool: {
    max: env.max,
    min: env.min,
    acquire: env.require,
    idle: env.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.customers = require('../models/customer.model')(sequelize, Sequelize);
 
 
module.exports = db;