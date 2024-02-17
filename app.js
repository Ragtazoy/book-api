require("dotenv").config();
const express = require("express");
const multer = require("multer");

const router = require("./routes");
const { sequelize } = require("./models");
const { requireAuth } = require("./middlewares/auth");
const { ErrorHandler } = require("./middlewares/errorHandler");

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multer().array());

app.use("/books", requireAuth);

app.use("/", router);

app.use(ErrorHandler);

app.listen(process.env.SERVER_PORT, async () => {
  console.log("Server is running!");
  try {
    await sequelize.authenticate();
    console.log("Connected to the database!");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
});
