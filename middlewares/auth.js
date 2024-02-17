const jwt = require("jsonwebtoken");
const { ApiError } = require("./errorHandler");

const requireAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw ApiError.Unauthorized("Authentication token is required");
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Check if the user is authorized
    if (decoded.userId !== 1) {
      throw ApiError.Unauthorized("Invalid user");
    }

    next();
  } catch (err) {
    next(err);
    return;
  }
};

module.exports = { requireAuth };
