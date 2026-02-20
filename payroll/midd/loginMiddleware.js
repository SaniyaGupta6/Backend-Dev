function loginMiddleware(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) return res.send("Missing login fields");
  next();
}
module.exports = loginMiddleware;