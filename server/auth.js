// Import required modules
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Ensure the correct path to your User model

// Create a new router instance
const router = express.Router();

// POST /signin route for user authentication
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the email exists in the database
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Compare provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Generate a JWT for the authenticated user
        const token = jwt.sign(
            { userId: user.id, email: user.email }, // Payload
            process.env.JWT_SECRET || 'your_jwt_secret', // Secret key
            { expiresIn: '1h' } // Expiration time
        );

        // Send the token and a success message to the client
        res.status(200).json({
            token,
            message: 'Login successful!',
        });
    } catch (err) {
        console.error('Error during sign-in:', err);
        // Handle server errors
        res.status(500).json({
            error: 'Internal Server Error',
            details: err.message,
        });
    }
});

// Export the router
module.exports = router;
