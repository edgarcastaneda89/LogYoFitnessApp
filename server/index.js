// Import Express to create a web server
const express = require('express');
const app = express();

// Import the User model to interact with the 'users' table
const User = require('./models/User'); // Adjust path if needed

// Enable JSON parsing for incoming requests
app.use(express.json());

// Registration endpoint to add a new user
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body; // Get data from request

        // Create a new user in the database
        const newUser = await User.create({
            username,
            email,
            password_hash: password // This assumes password is already hashed
        });

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error); // Log errors to the console
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Start the server on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
