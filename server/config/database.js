// Import Sequelize, a tool to interact with SQL databases using JavaScript
const { Sequelize } = require('sequelize');

// Load environment variables (like database info) from the .env file
require('dotenv').config();

// Set up a new Sequelize instance to connect to the database
const sequelize = new Sequelize(
    process.env.DB_NAME,   // Database name
    process.env.DB_USER,   // Database username
    process.env.DB_PASS,   // Database password
    {
        host: process.env.DB_HOST, // Database host (e.g., RDS endpoint)
        dialect: process.env.DB_DIALECT, // Type of database (e.g., MySQL)
    }
);

// Export the Sequelize instance so it can be used elsewhere in the app
module.exports = sequelize;
