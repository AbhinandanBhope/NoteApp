const Sequelize = require("sequelize");
// Connection parameters

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'notesUser',
    password: 'pass@123',
    database: 'notesDb',
  });
  

// with URI
const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  module.exports = {  sequelize, testDbConnection };
