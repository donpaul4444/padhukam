import jwt from "jsonwebtoken";

const authmiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access denied.No token provided" });
  }
  try {
    const decoded = jwt.verify(
      token.replace("Bearer", ""),
      process.env.JWT_SECRET
    );
    req.user = decodednext();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default authmiddleware;
