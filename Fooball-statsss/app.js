const express = require("express");
const connectDB = require("./config/db");
const positionsRouter = require("./routes/positions");
const membersRouter = require("./routes/members");
const playersRouter = require("./routes/players");

require("dotenv").config();
const app = express();

// Kết nối MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/positions", positionsRouter);
app.use("/api/members", membersRouter); // Route cho member
app.use("/api/players", playersRouter); // Route cho player

// Chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
