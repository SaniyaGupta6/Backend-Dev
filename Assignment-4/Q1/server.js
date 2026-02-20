const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Saniya" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" }
];

// Example: /users?name=rah
app.get("/users", (req, res) => {
  const name = req.query.name;

  if (name) {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(users);
});