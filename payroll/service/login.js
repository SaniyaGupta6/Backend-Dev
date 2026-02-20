const { getUsers } = require("../model/userModel");

async function loginService(username, password) {
  const users = await getUsers();
  return users.find(u => u.username === username && u.password === password);
}

module.exports = loginService;