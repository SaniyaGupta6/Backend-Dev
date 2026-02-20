const fs = require("fs").promises;
const file = "users.json";

async function getUsers() {
  try {
    return JSON.parse(await fs.readFile(file, "utf-8"));
  } catch {
    return [];
  }
}

async function saveUsers(users) {
  await fs.writeFile(file, JSON.stringify(users, null, 2));
}

module.exports = { getUsers, saveUsers };