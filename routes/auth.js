import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// ======================= SIGNUP =======================
router.post("/signup", async (req, res) => {
  try {
    console.log("➡️ Signup request body:", req.body);

    const { email, password, name } = req.body;

    // Check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      console.log("⚠️ User already exists:", email);
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);
    console.log("🔑 Hashed password generated");

    // Save new user
    const user = new User({ email, name, passwordHash: hash });
    await user.save();
    console.log("✅ New user saved:", user._id);

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("🎫 JWT generated:", token.substring(0, 20) + "...");

    res.json({
      msg: "Signup success",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("❌ Signup error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// ======================= LOGIN =======================
router.post("/login", async (req, res) => {
  try {
    console.log("➡️ Login request body:", req.body);

    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ No user found for email:", email);
      return res.status(400).json({ msg: "Invalid credentials,No user found!" });
    }

    // Compare password
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      console.log("❌ Invalid password for:", email);
      return res.status(400).json({ msg: "Invalid credentials,Check password and try again" });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("🎫 JWT generated:", token.substring(0, 20) + "...");

    res.json({
      msg: "Login success",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ msg: "Server error logging failed try again" });
  }
});

export default router;
