// Import necessary modules from React and other dependencies
import React, { useState } from 'react'; // Import React and the useState hook for managing state
import { Link } from 'react-router-dom'; // Import Link for navigation between pages (React Router)
import './App.css'; // Import the CSS file for styling
import designerImage from './assets/Designer.jpeg'; // Import an image to display in the component

// Function component for the welcome page
function WelcomePage() {
    // Declare state variables to store form data and account creation status
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountCreated, setAccountCreated] = useState(false); // State to track if account was successfully created
    const [passwordStrength, setPasswordStrength] = useState(0); // State for password strength (0 = weak, 3 = strong)

    // Function to check the password strength
    const checkPasswordStrength = (password) => {
        let strength = 0;

        // Check password length
        if (password.length >= 6) strength++; // Weak strength
        if (password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password)) strength++; // Medium strength
        if (
            password.length >= 10 &&
            /[A-Z]/.test(password) && // Contains uppercase letter
            /[a-z]/.test(password) && // Contains lowercase letter
            /\d/.test(password) && // Contains number
            /[!@#$%^&*(),.?":{}|<>]/.test(password) // Contains special character
        ) {
            strength++; // Strong strength
        }

        setPasswordStrength(strength); // Update the state with the strength value
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword); // Update the password state
        checkPasswordStrength(newPassword); // Evaluate the new password strength
    };

    // Function to handle the account creation process when the button is clicked
    const handleCreateAccount = async () => {
        try {
            const requestData = { name, email, password }; // Create an object with the input data to send to the server
            // Send a POST request to the server to create an account
            const response = await fetch('http://localhost:3000/api/create-account', {
                method: 'POST', // The request method is POST to send data to the server
                headers: { 'Content-Type': 'application/json' }, // Set content type to JSON
                body: JSON.stringify(requestData), // Convert the request data to JSON format
            });
            const result = await response.json(); // Wait for the response from the server and convert it to a JSON object

            // Check if the server response indicates success
            if (response.ok) {
                console.log('Account created successfully:', result); // Log success message
                setAccountCreated(true); // Set the accountCreated state to true
                setName(''); // Clear the name input field
                setEmail(''); // Clear the email input field
                setPassword(''); // Clear the password input field
            } else {
                console.error('Failed to create account:', result); // Log an error if account creation fails
                setAccountCreated(false); // Set the accountCreated state to false
            }
        } catch (error) {
            console.error('Error creating account:', error); // Log any errors that occur during the account creation process
            setAccountCreated(false); // Set the accountCreated state to false if an error occurs
        }
    };

    // JSX to render the WelcomePage component
    return (
        <div className="container"> {/* Main container for the page layout */}

            <div className="left-panel"> {/* Left panel containing a welcome message and an image */}
                <h2 className="welcome-message">Welcome back!</h2> {/* Heading for the welcome message */}
                <img src={designerImage} alt="Designer" className="left-panel-image" /> {/* Display the designer image */}
            </div>
            <div className="right-panel"> {/* Right panel containing the account creation form */}
                <h1>Create an Account</h1> {/* Heading for the account creation section */}

                {/* Display a success message if the account was created */}
                {accountCreated && (
                    <div className="success-message">
                        Account created successfully! Please sign in to continue.
                    </div>
                )}

                {/* Form for creating an account */}
                <div className="Create-an-Account-form">
                    <input
                        type="text"
                        placeholder="First name"
                        className="input-field"
                        value={name} // Bind the name input field to the name state variable
                        onChange={(e) => setName(e.target.value)} // Update name state when user types
                    />
                    <input
                        type="email"
                        placeholder="Your e-mail"
                        className="input-field"
                        value={email} // Bind the email input field to the email state variable
                        onChange={(e) => setEmail(e.target.value)} // Update email state when user types
                    />
                    <input
                        type="password"
                        placeholder="Create password"
                        className="input-field"
                        value={password} // Bind the password input field to the password state variable
                        onChange={handlePasswordChange} // Handle password change
                    />
                    {/* Password strength section */}
                    <div className="password-strength">
                        <label>Password strength</label>
                        <div className="strength-bars">
                            <span
                                className={`bar ${passwordStrength >= 1 ? 'weak' : ''}`}
                            ></span> {/* Weak bar */}
                            <span
                                className={`bar ${passwordStrength >= 2 ? 'medium' : ''}`}
                            ></span> {/* Medium bar */}
                            <span
                                className={`bar ${passwordStrength === 3 ? 'strong' : ''}`}
                            ></span> {/* Strong bar */}
                        </div>
                    </div>

                    {/* Buttons to create the account or navigate to sign-in page */}
                    <div className="button-container">
                        <button
                            className="create-account-button"
                            onClick={handleCreateAccount} // Call handleCreateAccount when clicked
                        >
                            Create account
                        </button>
                        <Link to="/signin"> {/* Link to the sign-in page */}
                            <button className="sign-in-button">Sign in</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage; // Export the WelcomePage component so it can be used in other parts of the app
