const jwt = require("jsonwebtoken");

class AuthService {
  generateAuthToken(userId) {
    try {
      const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "3days",
      });
      return token;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new AuthService();
