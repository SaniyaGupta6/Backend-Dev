function updateMiddleware(req, res, next) {
  const { username, email } = req.body;
  if (!username || !email) return res.send("Missing update fields");
  next();
}
module.exports = updateMiddleware;