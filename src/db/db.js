require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

sequelize
  .sync()
  .then(() => console.log("Database & tables created!"))
  .catch((error) => console.log(error));

module.exports = sequelize;
