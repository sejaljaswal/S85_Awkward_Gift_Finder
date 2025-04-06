const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const giftRoutes = require("./routes/giftRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("🎁 Welcome to the Awkward Gift Finder API! Use /api/gifts to interact.");
});

app.use("/api", giftRoutes);

if (!process.env.DB_URL) {
  console.error("❌ MongoDB Connection Error: DB_URL is missing in .env file");
  process.exit(1);
}

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
