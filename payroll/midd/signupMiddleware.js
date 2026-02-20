function signupMiddleware(req, res, next) {
  const { username, password, email } = req.body;
  if (!username || !password || !email) return res.send("Missing signup fields");
  next();
}
module.exports = signupMiddleware;