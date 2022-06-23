const { db } = require("../utils/database");
const { DataTypes } = require("sequelize");

const User = db.define("user", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  entranceTime: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  exitTime: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  status: {
    defaultValue: "active",
    type: DataTypes.STRING,
  },
});

module.exports = { User };
