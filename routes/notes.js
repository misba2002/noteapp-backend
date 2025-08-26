import express from "express";
import Note from "../models/Note.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const note = new Note({ ...req.body, userId: req.userId });
  await note.save();
  res.json(note);
});

router.get("/", auth, async (req, res) => {
  const notes = await Note.find({ userId: req.userId });
  res.json(notes);
});

router.get("/:id", auth, async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ msg: "Not found" });
  res.json(note);
});

router.put("/:id", auth, async (req, res) => {
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );
  res.json(note);
});

router.delete("/:id", auth, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

export default router;
