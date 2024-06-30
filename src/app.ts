import express from "express";
import { scrape } from "./lib/scrape";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  await scrape();
  res.json({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
});

export default app;
