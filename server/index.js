// Import necessary modules
const express = require('express');
const bcrypt = require('bcrypt'); // For password hashing
const cors = require('cors'); // For handling CORS
require('dotenv').config(); // Load environment variables

// Create an instance of Express
const app = express();

// Import Sequelize instance and User model
const sequelize = require('./config/database'); // Adjust path if needed
const User = require('./models/User'); // Adjust path if needed

// Import the auth routes for handling authentication
const authRoutes = require('./auth'); // Ensure this path points to your `auth.js` file

// Enable CORS to allow requests from frontend (e.g., Vite running on localhost:5173)
app.use(cors());

// Enable JSON parsing for incoming requests
app.use(express.json());

// Attach the auth routes under the `/api/auth` prefix
app.use('/api/auth', authRoutes);

// Account creation endpoint
app.post('/api/create-account', async (req, res) => {
    try {
        console.log("Received a request to create an account:", req.body);

        const { name, email, password } = req.body; // Extract data from request

        // Check if the email is already in use
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the user in the database
        const newUser = await User.create({
            username: name, // Assuming database uses `username` field
            email,
            password_hash: hashedPassword, // Store the hashed password
        });

        // Respond with success message
        res.status(201).json({
            message: 'User created successfully',
            user: { id: newUser.id, username: newUser.username, email: newUser.email }, // Omit sensitive fields
        });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Test route for debugging
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});

// Ensure models are synchronized with the database
sequelize
    .sync()
    .then(() => {
        console.log('Database synchronized successfully.');
        // Start the server on the specified port
        const PORT = process.env.PORT || 3000; // Use 3000 to match the frontend setup
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error synchronizing the database:', error);
    });
