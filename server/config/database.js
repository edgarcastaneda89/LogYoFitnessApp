// Import Sequelize, a tool to interact with SQL databases using JavaScript
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

// Set up a new Sequelize instance to connect to the database
const sequelize = new Sequelize(
    process.env.DB_NAME,   // Database name
    process.env.DB_USER,   // Database username
    process.env.DB_PASS,   // Database password
    {
        host: process.env.DB_HOST,      // Database host (e.g., RDS endpoint)
        dialect: process.env.DB_DIALECT // Type of database (e.g., MySQL)
    }
);

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

// Sync the models to the database, creating the table if it doesn’t exist
sequelize.sync({ alter: true })
    .then(() => {
        console.log("All models were synchronized.");
    })
    .catch((error) => {
        console.error("Error synchronizing models:", error);
    });

// Export the Sequelize instance so it can be used elsewhere in the app
module.exports = sequelize;
