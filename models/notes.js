const { sequelize, testDbConnection } = require("../db");
const { DataTypes } = require("sequelize");

const Notes = sequelize.define("notes", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  
  
    
  },
  title: {
    type: DataTypes.STRING,
  },
    
});

Notes.sync().then(() => {
  console.log("Notes Model synced");
});

module.exports = Notes;
