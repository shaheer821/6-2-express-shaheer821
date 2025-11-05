import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: Enable CORS for all routes
app.use(cors());

// Middleware: Parse JSON bodies
app.use(express.json());

// Route: GET /api/quote - Returns a random quote
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json(quote);
});

// Route: GET / - Health check
app.get("/", (req, res) => {
  res.json({ message: "Quote API is running!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});