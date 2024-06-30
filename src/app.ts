import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log("server running on PORT", PORT);
});

export default app;
