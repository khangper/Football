const express = require("express");
const router = express.Router();
const Player = require("../models/Player");
const authenticateToken = require("../middleware/auth");

// Lấy danh sách tất cả các cầu thủ
router.get("/", authenticateToken, async (req, res) => {
  try {
    const players = await Player.find().populate("position");
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Thêm một cầu thủ mới
router.post("/", authenticateToken, async (req, res) => {
  const {
    playerName,
    team,
    minutesPlayed,
    image,
    PassingAccuracy,
    isCaptain,
    position,
  } = req.body;

  const newPlayer = new Player({
    playerName,
    team,
    minutesPlayed,
    image,
    PassingAccuracy,
    isCaptain,
    position,
  });

  try {
    const savedPlayer = await newPlayer.save();
    res.status(201).json(savedPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Cập nhật thông tin của một cầu thủ
router.put("/:id", authenticateToken, async (req, res) => {
  const {
    playerName,
    team,
    minutesPlayed,
    image,
    PassingAccuracy,
    isCaptain,
    position,
  } = req.body;

  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      {
        playerName,
        team,
        minutesPlayed,
        image,
        PassingAccuracy,
        isCaptain,
        position,
      },
      { new: true }
    );
    if (!updatedPlayer)
      return res.status(404).json({ message: "Player not found" });
    res.json(updatedPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Xóa một cầu thủ
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json({ message: "Player deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
