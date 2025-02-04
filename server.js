const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// /ping route with error handling
app.get('/', (req, res, next) => {
    try {
        res.json({ message: 'Welcome to AkwardGiftFinder' });
    } catch (error) {
        next(error);
    }
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start server with error handling
app.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});
