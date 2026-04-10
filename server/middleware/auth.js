const jwt = require("jsonwebtoken");

// VERIFY TOKEN
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json("No token");

  jwt.verify(token, "secretkey", (err, user) => {
    if (err) return res.status(403).json("Invalid token");

    req.user = user;
    next();
  });
};

// ADMIN CHECK
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json("Access denied");
  }
  next();
};

module.exports = { verifyToken, isAdmin };