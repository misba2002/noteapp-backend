import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Allow your frontend domain
app.use(cors({
  origin: "https://your-frontend.vercel.app", // ✅ allow only Vercel frontend
  credentials: true
}));

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
import authRoutes from "./routes/auth.js";
import noteRoutes from "./routes/notes.js";

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);



const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
