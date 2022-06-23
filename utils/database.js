const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "daroman9",
  database: "checkin",
  logging: false,
});

module.exports = { db };
