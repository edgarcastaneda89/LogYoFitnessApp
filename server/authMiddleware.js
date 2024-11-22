const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); // Validate the token
        req.user = decoded; // Add user data to the request object
        next(); // Pass control to the next middleware/route
    } catch (err) {
        res.status(401).json({ error: 'Invalid token.' });
    }
};

module.exports = authenticate;
