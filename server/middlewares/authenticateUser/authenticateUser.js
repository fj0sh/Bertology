const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Authorization token missing or invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded; // Add user details to request object
    next(); // Proceed to the next middleware or route
  } catch (err) {
    return res.status(403).send("Invalid or expired token");
  }
};

module.exports = protect;
