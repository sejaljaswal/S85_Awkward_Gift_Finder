const express = require('express');
const app = express();
const PORT = 5005;

// Middleware to parse JSON
app.use(express.json());

// Basic /ping route
app.get('/', (req, res) => {
    res.send('Hello,I am Sejal.This is my project AkwardGift Finder');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});