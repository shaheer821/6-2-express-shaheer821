import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });               
});

app.get("/", (req, res) => {
  res.json({ message: "Quote API is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});