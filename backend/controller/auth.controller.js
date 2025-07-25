const authController = {};
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

authController.authenticateToken = async (req, res, next) => {
    const tokenString = req.headers.authorization;
    if (!tokenString) {
        return res.status(401).json({status: "error", message: "No token provided"});
    }
    const token = tokenString.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({status: "error", message: "Invalid token"});
        }
        req.userId = payload.id;
        next();
    });
}


module.exports = authController;