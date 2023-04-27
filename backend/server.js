const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`chat app is running on port ${port}`);
});
