import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
name: { type: String },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
