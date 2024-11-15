// Import necessary modules
const express = require('express');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const cors = require('cors'); // Import CORS
const app = express();
require('dotenv').config(); // Load environment variables

// Import Sequelize instance
const sequelize = require('./config/database'); // Adjust path if needed

// Enable CORS for all routes and allow requests from all origins
app.use(cors());

// Enable JSON parsing for incoming requests
app.use(express.json());

// Import the User model to interact with the 'users' table
const User = require('./models/User'); // Adjust path if needed

// Create Account endpoint to add a new user
app.post('/api/create-account', async (req, res) => {  // Updated endpoint to match frontend
    try {
        console.log("Received a request to create an account with data:", req.body);

        const { name, email, password } = req.body; // Get data from request

        // Check if user already exists based on email
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Give success message if account created successfully 



        // Hash the password before saving it to the database
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user in the database with the hashed password
        const newUser = await User.create({
            username: name, // Use `name` for `username` in the database
            email,
            password_hash: hashedPassword // Store hashed password
        });

        // Respond with success message
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error); // Log errors to the console
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Ensure models are synchronized with the database
sequelize.sync()
    .then(() => {
        console.log('Database synchronized successfully.');
        // Start the server on a specific port
        const PORT = process.env.PORT || 5000; // Match frontend port if needed
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error synchronizing the database:', error);
    });
