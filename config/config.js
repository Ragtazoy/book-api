require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DEV_DB_DIALECT,
    port: process.env.DEV_DB_PORT,
  },
  test: {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
    database: process.env.TEST_NAME,
    host: process.env.TEST_HOST,
    dialect: process.env.TEST_DIALECT,
    port: process.env.TEST_PORT,
  },
  production: {
    username: process.env.PROD_USERNAME,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_NAME,
    host: process.env.PROD_HOST,
    dialect: process.env.PROD_DIALECT,
    port: process.env.PROD_PORT,
  },
};
