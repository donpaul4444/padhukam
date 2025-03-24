import jwt from "jsonwebtoken";

const authmiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access denied.No token provided" });
  }
  try {
    const decoded = jwt.verify(token.replace("Bearer ", "").trim(), process.env.JWT_SECRET);

    req.user = decoded
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token", error: error.message });
  }
};

export default authmiddleware;
