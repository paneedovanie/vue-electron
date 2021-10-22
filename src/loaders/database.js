const { Sequelize } = require("sequelize");

module.exports = () => {
  const DB_HOST = process.env.DB_HOST || "localhost",
    DB_USER = process.env.DB_USER || "root",
    DB_PASS = process.env.DB_PASS || "root",
    DB_NAME = process.env.DB_NAME || "vue_electron";

  return new Sequelize({
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    dialect: "mysql",
    dialectModule: require("mysql2"),
  });
};
