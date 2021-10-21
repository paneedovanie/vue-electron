const { Sequelize } = require("sequelize");

module.exports = () => {
  const DB_HOST = process.env.DB_HOST,
    DB_USER = process.env.DB_USER,
    DB_PASS = process.env.DB_PASS,
    DB_NAME = process.env.DB_NAME;

  return new Sequelize({
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    dialect: "mysql",
    dialectModule: require("mysql2"),
  });
};
