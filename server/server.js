const express = require('express');
const app = express();

// Import your new book route
const bookRoute = require('./routes/book');

app.use(express.json());

// Use the book route for any requests to /book
app.use('/book', bookRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
