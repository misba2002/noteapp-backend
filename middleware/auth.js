import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ msg: "No token" });

  const token = authHeader.split(" ")[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("verified user data:",decoded) 
    req.userId = decoded.id; // ✅ match the token payload
    next();
  } catch (err) {
    console.error("JWT verification error:", err.message);
    res.status(401).json({ msg: "Invalid token" });
  }
}
