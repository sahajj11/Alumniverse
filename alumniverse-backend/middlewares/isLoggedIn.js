import jwt from "jsonwebtoken"
import Alumni from "../models/Alumni.js"

const SECRET = process.env.JWT_SECRET || "your_jwt_secret"

const isLoggedIn = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, SECRET); // Make sure your .env contains JWT_SECRET

    const user = await Alumni.findById(decoded.userId).populate('college', 'name'); // fetch user with college name

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: User not found' });
    }

    req.user = user; // attach user to the request
    next();

  } catch (error) {
    console.error('JWT auth error:', error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default isLoggedIn;