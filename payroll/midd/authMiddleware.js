const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey";

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.send("Token missing");

  const token = authHeader.split(" ")[1]; // Bearer token

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // attach decoded user
    next();
  } catch (err) {
    return res.send("Invalid or expired token");
  }
}

module.exports = authMiddleware;