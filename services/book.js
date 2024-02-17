const { ApiError } = require("../middlewares/errorHandler");
const { Book } = require("../models");

class BookService {
  async createBooks(book) {
    try {
      const newBook = new Book(book);

      await Book.create(newBook.dataValues);
      
      return { message: "Book created successfully" };
    } catch (err) {
      if (err?.name === "SequelizeValidationError") {
        throw ApiError.SequelizeValidationError(
          err.errors.map((e) => e.message)
        );
      }
      if (err?.name === "SequelizeDatabaseError") {
        throw ApiError.SequelizeDatabaseError(err.message);
      }

      throw err;
    }
  }

  async getBooks(limit, offset) {
    try {
      const result = await Book.findAndCountAll({
        order: [["id", "ASC"]],
        limit,
        offset,
      });

      if (!result) {
        throw ApiError.NotFound("Book not found");
      }

      return result;
    } catch (err) {
      if (err?.name === "SequelizeDatabaseError") {
        throw ApiError.SequelizeDatabaseError(err.message);
      }

      throw err;
    }
  }

  async getBooksById(id) {
    try {
      const result = await Book.findByPk(id);

      if (!result) {
        throw ApiError.NotFound("Book not found");
      }

      return result;
    } catch (err) {
      if (err?.name === "SequelizeDatabaseError") {
        throw ApiError.SequelizeDatabaseError(err.message);
      }

      throw err;
    }
  }

  async updateBooks(id, book) {
    try {
      // Check if book exists
      const oldBook = await Book.findOne({ where: { id } });

      if (!oldBook) {
        throw ApiError.NotFound("Book not found");
      }

      // Update book
      oldBook.set(book);

      await oldBook.save();

      return { message: "Book updated successfully" };
    } catch (err) {
      if (err?.name === "SequelizeValidationError") {
        throw ApiError.SequelizeValidationError(
          err.errors.map((e) => e.message)
        );
      }
      if (err?.name === "SequelizeDatabaseError") {
        throw ApiError.SequelizeDatabaseError(err.message);
      }

      throw err;
    }
  }

  async deleteBooks(id) {
    try {
      // Check if book exists
      const oldBook = await Book.findOne({ where: { id } });

      if (!oldBook) {
        throw ApiError.NotFound("Book not found");
      }

      // Delete book
      await oldBook.destroy();

      return { message: "Book deleted successfully" };
    } catch (err) {
      if (err?.name === "SequelizeValidationError") {
        throw ApiError.SequelizeValidationError(
          err.errors.map((e) => e.message)
        );
      }
      if (err?.name === "SequelizeDatabaseError") {
        throw ApiError.SequelizeDatabaseError(err.message);
      }

      throw err;
    }
  }
}

module.exports = new BookService();
