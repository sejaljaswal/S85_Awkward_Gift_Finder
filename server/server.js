const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load env from server/config/.env first, then fallback to server/.env
const primaryEnv = dotenv.config({ path: path.resolve(__dirname, "config/.env") });
if (primaryEnv.error) {
  dotenv.config();
}

const giftRoutes = require("./routes/giftRoutes");
const app = express();
app.use(express.json());
app.use(cors());

// Safe log of AI provider/key presence
const usingDeepseek = process.env.USE_DEEPSEEK === "true";
const aiKeyPresent = usingDeepseek
  ? Boolean(process.env.DEEPSEEK_API_KEY)
  : Boolean(process.env.OPENAI_API_KEY);
console.log(
  `🤖 AI provider: ${usingDeepseek ? "DeepSeek" : "OpenAI"} | API key present: ${aiKeyPresent ? "yes" : "no"}`
);
if (!aiKeyPresent) {
  console.error(
    "❌ AI API key is missing. Set OPENAI_API_KEY in server/config/.env (or DEEPSEEK_API_KEY with USE_DEEPSEEK=true)."
  );
}

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
