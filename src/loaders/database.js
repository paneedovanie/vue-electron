import { Sequelize } from "sequelize";

export default () => {
  return new Sequelize({
    host: "localhost",
    username: "root",
    password: "root",
    database: "vue_electron_mysql",
    dialect: "mysql",
    dialectModule: require("mysql2"),
  });
};
