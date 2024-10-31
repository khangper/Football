const express = require("express");
const router = express.Router();
const Position = require("../models/Position");
const authenticateToken = require("../middleware/auth");

// Lấy tất cả positions
router.get("/", async (req, res) => {
  try {
    const positions = await Position.find();
    res.json(positions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tạo mới một position
router.post("/", authenticateToken, async (req, res) => {
  const position = new Position({ position: req.body.position });
  try {
    const newPosition = await position.save();
    res.status(201).json(newPosition);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Xóa position
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const position = await Position.findByIdAndDelete(req.params.id);
    if (!position) {
      return res.status(404).json({ message: "Position not found" });
    }
    res.json({ message: "Position deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
