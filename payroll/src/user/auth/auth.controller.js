const jwt = require("jsonwebtoken");
const loginService = require("../../../service/login");
const { getUsers, saveUsers } = require("../../../model/userModel");

const SECRET_KEY = "mysecretkey";

async function signup(req, res) {
  const users = await getUsers();
  users.push(req.body);
  await saveUsers(users);
  res.send("Signup successful");
}

async function login(req, res) {
  const user = await loginService(req.body.username, req.body.password);
  if (!user) return res.send("Invalid credentials");

  // create JWT token
  const token = jwt.sign(
    { username: user.username, email: user.email },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token: token
  });
}

async function update(req, res) {
  let users = await getUsers();

  users = users.map(u =>
    u.username === req.user.username ? { ...u, ...req.body } : u
  );

  await saveUsers(users);
  res.send("User updated");
}

module.exports = { signup, login, update };