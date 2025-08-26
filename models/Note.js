import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});


// ✅ Auto-update "updatedAt" before saving
noteSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// ✅ Auto-update "updatedAt" before update operations
noteSchema.pre("findOneAndUpdate", function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});




export default mongoose.model("Note", noteSchema);
