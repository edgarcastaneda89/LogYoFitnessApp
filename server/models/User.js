// Import DataTypes to set the data types for each field in our model
const { DataTypes } = require('sequelize');

// Import our database connection
const sequelize = require('../config/database');

// Define the User model with fields: username, email, and password_hash
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING, // Text type
        allowNull: false,       // Field cannot be empty
        unique: true,           // Value must be unique
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',     // Name of the table in the database
    timestamps: true,       // Adds 'createdAt' and 'updatedAt' automatically
});

// Export the User model to use in other parts of the app
module.exports = User;
