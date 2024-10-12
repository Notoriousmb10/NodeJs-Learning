const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtAuthMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // Ensure next() is called to pass control to the next middleware
  } catch (err) {
    return res.status(403).json({ error: "Forbidden" });
  }
};

const generateJWTToken = (userCredentials) => {
  return jwt.sign(userCredentials, process.env.JWT_SECRET, {
    expiresIn: "5h",
  });
};

module.exports = {
  jwtAuthMiddleware,
  generateJWTToken,
};