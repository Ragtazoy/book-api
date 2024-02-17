const BookService = require("../services/book");
const { ApiError } = require("../middlewares/errorHandler");

class BookController {
  async createBooks(req, res, next) {
    try {
      const response = await BookService.createBooks(req.body);
      return res.status(201).send(response);
    } catch (err) {
      next(err);
      return;
    }
  }
  async getBooks(req, res, next) {
    const limit = Number(req.query.limit);
    const offset = Number(req.query.offset);

    if (isNaN(limit) || isNaN(offset)) {
      return next(ApiError.BadRequest("limit and offset must be Integer"));
    }

    try {
      const response = await BookService.getBooks(limit, offset);
      return res.status(200).send(response);
    } catch (err) {
      next(err);
      return;
    }
  }

  async getBooksById(req, res, next) {
    const bookId = Number(req.params.id);

    if (isNaN(bookId)) {
      return next(ApiError.BadRequest("id must be Integer"));
    }

    try {
      const response = await BookService.getBooksById(bookId);
      return res.status(200).send(response);
    } catch (err) {
      next(err);
      return;
    }
  }

  async updateBooks(req, res, next) {
    const bookId = Number(req.params.id);

    if (isNaN(bookId)) {
      return next(ApiError.BadRequest("id must be Integer"));
    }

    try {
      const response = await BookService.updateBooks(bookId, req.body);
      return res.status(200).send(response);
    } catch (err) {
      next(err);
      return;
    }
  }

  async deleteBooks(req, res, next) {
    const bookId = Number(req.params.id);

    if (isNaN(bookId)) {
      return next(ApiError.BadRequest("id must be Integer"));
    }

    try {
      const response = await BookService.deleteBooks(bookId);
      return res.status(200).send(response);
    } catch (err) {
      next(err);
      return;
    }
  }
}

module.exports = new BookController();
