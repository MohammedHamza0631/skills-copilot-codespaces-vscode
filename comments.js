// Create Web Server

// 1. Import the express library
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Define some routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/comments', (req, res) => {
    res.send([1, 2, 3]);
});

// 4. Start the server
app.listen(3000, () => console.log('Listening on port 3000...'));