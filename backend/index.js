const express = require('express');
const cors = require('cors');

const app = express();
const books = require('./data');

app.use(cors());

app.get('/api/books', (req, res) => {
  res.json(books);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});