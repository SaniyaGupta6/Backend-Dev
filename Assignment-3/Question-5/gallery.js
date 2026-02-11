const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started');
});


//http://localhost:3000/images/download.png
