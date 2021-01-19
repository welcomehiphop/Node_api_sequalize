const env = {
    database: 'testdb',
    username: 'sa',
    password: '1234',
    host: 'localhost',
    dialect: 'mssql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;
  