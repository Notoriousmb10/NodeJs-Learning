const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(404).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
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
