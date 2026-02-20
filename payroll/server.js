const express = require("express");

const loginMiddleware = require("./midd/loginMiddleware");
const signupMiddleware = require("./midd/signupMiddleware");
const updateMiddleware = require("./midd/updateMiddleware");
const authMiddleware = require("./midd/authMiddleware");

const authController = require("./src/user/auth/auth.controller");

const app = express();

app.use(express.json()); // RAW JSON only

app.post("/signup", signupMiddleware, authController.signup);
app.post("/login", loginMiddleware, authController.login);
app.post("/update", authMiddleware, updateMiddleware, authController.update);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});