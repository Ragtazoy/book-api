class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static SequelizeValidationError(message) {
    return new ApiError(400, message);
  }

  static BadRequest(message) {
    return new ApiError(400, message);
  }

  static Unauthorized(message) {
    return new ApiError(401, message);
  }

  static NotFound(message) {
    return new ApiError(404, message);
  }

  static SequelizeDatabaseError(message) {
    return new ApiError(500, message);
  }

  static Internal(message) {
    return new ApiError(500, message);
  }
}

function ErrorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status);
    res.send({
      error: true,
      message: err.message || "Internal Server Error",
    });
  }

  res.status(500).send({
    error: true,
    message: err.message || "Something went wrong",
  });
}

module.exports = { ApiError, ErrorHandler };
