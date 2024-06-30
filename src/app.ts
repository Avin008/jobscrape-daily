import express from "express";
import { scrape } from "./lib/scrape";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const data = await scrape();
  res.json({ message: data });
});

app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
});

export default app;
