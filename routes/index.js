const express = require("express");
const AuthController = require("../controllers/auth");
const BookController = require("../controllers/book");

const router = express();

router.post("/login", AuthController.login);
router.post("/books", BookController.createBooks);
router.get("/books", BookController.getBooks);
router.get("/books/:id", BookController.getBooksById);
router.put("/books/:id", BookController.updateBooks);
router.delete("/books/:id", BookController.deleteBooks);

module.exports = router;
