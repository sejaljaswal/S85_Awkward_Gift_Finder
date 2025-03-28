const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const giftRoutes = require("./routes/giftRoutes"); // Correct route file

const app = express();

// Middleware
app.use(express.json()); // Allows JSON request bodies
app.use(cors()); // Handle CORS issues

// Debugging: Check if env variables are loading
console.log("🔍 DB_URL from .env:", process.env.DB_URL);

// Default Route
app.get("/", (req, res) => {
    res.send("🎁 Welcome to the Awkward Gift Finder API! Use /api/gifts to interact.");
});

// Use Routes
app.use("/api", giftRoutes);

// MongoDB Connection
if (!process.env.DB_URL) {
    console.error("❌ MongoDB Connection Error: DB_URL is missing in .env file");
    process.exit(1);
}

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch((error) => {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); // Exit if MongoDB fails
    });

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
