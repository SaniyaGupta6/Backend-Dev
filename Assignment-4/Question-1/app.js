//
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]; 

  const name = req.query.name;
  const result = users.filter(u => u.name === name);

  res.send(result);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


//http://localhost:3000/users?name=Alice
// to run the code we use node app.js
