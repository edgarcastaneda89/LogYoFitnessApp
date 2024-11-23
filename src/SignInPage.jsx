import React, { useState } from 'react'; // Import React and the useState hook to manage component state
import styles from './SignInPage.module.css'; // Import the CSS module for styling the components
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom to programmatically navigate

// Define the SignInPage component
function SignInPage() {
    // Create state variables to store the email, password, and error messages
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Set up a function to redirect to other pages

    // This function runs when the user submits the form
    const handleSignIn = async (event) => {
        event.preventDefault(); // Prevent the default form submission (which would reload the page)

        try {
            // Make a request to the backend to sign the user in
            const response = await fetch('http://localhost:3000/api/auth/signin', {
                method: 'POST', // Send data using POST
                headers: { 'Content-Type': 'application/json' }, // Let the server know we're sending JSON data
                body: JSON.stringify({ email, password }), // Convert email and password to a JSON string
            });

            const data = await response.json(); // Get the response data
            if (!response.ok) { // If the response is not successful (error)
                throw new Error(data.error || 'Sign-in failed'); // Show an error message
            }

            localStorage.setItem('token', data.token); // If sign-in is successful, store the token in local storage
            navigate('/dashboard'); // Redirect the user to the dashboard page
        } catch (err) {
            setError(err.message); // If there's an error, show the error message on the page
        }
    };

    return (
        <div className={styles['sign-in-container']}> {/* Container for the whole sign-in form */}
            <div className={styles['sign-in-box']}> {/* Box around the form */}
                <h1 className={styles['sign-in-title']}>Sign in</h1> {/* Heading for the form */}
                <p className={styles['sign-in-subtitle']}> {/* Subtitle */}
                    Let's make your fitness goals reality
                </p>
                {error && <p className={styles['error-message']}>{error}</p>} {/* Display error if it exists */}
                <form className={styles['sign-in-form']} onSubmit={handleSignIn}> {/* Sign-in form */}
                    <input
                        type="email" // Input for email address
                        placeholder="Email" // Text to show inside the email field
                        className={styles['input-field']} // Style for the input field
                        value={email} // Bind the input field to the email state
                        onChange={(e) => setEmail(e.target.value)} // Update email state as the user types
                        required // Make this field required to submit the form
                    />
                    <input
                        type="password" // Input for password (hidden text)
                        placeholder="Password" // Text to show inside the password field
                        className={styles['input-field']} // Style for the input field
                        value={password} // Bind the input field to the password state
                        onChange={(e) => setPassword(e.target.value)} // Update password state as the user types
                        required // Make this field required to submit the form
                    />
                    <button type="submit" className={styles['sign-in-button-page']}> {/* Submit button */}
                        Sign in
                    </button>
                </form>
                <div className={styles['sign-in-options']}> {/* Options under the form */}
                    <a href="#" className={styles['forgot-password']}> {/* Link for forgot password */}
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SignInPage; // Export the SignInPage component so it can be used in other parts of the app
