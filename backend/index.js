const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
const books = require('./data');

app.use(cors());

app.get('/api/books', (req, res) => {
  if (!books) {
    res.status(404).json({ message: 'No books found' });
  }
  res.json(books);
});

app.get('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});