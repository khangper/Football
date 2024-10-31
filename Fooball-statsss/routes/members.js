const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Member = require("../models/Member");

// Đăng ký member mới
router.post("/register", async (req, res) => {
  const { key, code } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedCode = await bcrypt.hash(code, salt);

    const newMember = new Member({ key, code: hashedCode });
    await newMember.save();
    res.status(201).json({ message: "Member registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Đăng nhập member
router.post("/login", async (req, res) => {
  const { key, code } = req.body;
  try {
    const member = await Member.findOne({ key });
    if (!member)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(code, member.code);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: member._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
