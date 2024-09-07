const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract the token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = decoded; // Save the decoded token payload (e.g., user ID) in the request object
    next(); // Move to the next middleware or route handler
  });
};
