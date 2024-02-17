const AuthService = require("../services/auth");
const { ApiError } = require("../middlewares/errorHandler");

class AuthController {
  async login(req, res, next) {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(ApiError.BadRequest("Username and password are required"));
    }

    if (username !== "admin" || password !== "admin") {
      return next(ApiError.Unauthorized("Invalid username or password"));
    }

    try {
      const userId = 1;
      const token = AuthService.generateAuthToken(userId);
      res.status(200).send({ token });
    } catch (err) {
      next(err);
      return;
    }
  }
}

module.exports = new AuthController();
