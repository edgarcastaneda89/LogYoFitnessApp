import React, { useState } from 'react'; // Importing React and useState
import './App.css'; // Importing CSS for styling
import designerImage from './assets/Designer.jpeg'; // Importing an image

function App() {
  // State variables to store form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle account creation
  const handleCreateAccount = async () => {
    try {
      // Prepare the data to be sent to the backend
      const requestData = {
        name,
        email,
        password,
      };

      // Send a POST request to the backend
      const response = await fetch('http://localhost:3000/api/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });


      const result = await response.json();

      // Check if the account was created successfully
      if (response.ok) {
        console.log('Account created successfully:', result);
        // Add any additional behavior here, like redirecting or clearing the form
      } else {
        console.error('Failed to create account:', result);
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <div className="container"> {/* Main container */}
      <div className="left-panel"> {/* Left side */}
        <h2 className="welcome-message">Welcome back!</h2> {/* Welcome message */}
        <img src={designerImage} alt="Designer" className="left-panel-image" /> {/* Designer image */}
      </div>
      <div className="right-panel"> {/* Right side for form */}
        <h1>Create an Account</h1> {/* Heading */}
        <div className="Create-an-Account-form"> {/* Form container */}
          <input
            type="text"
            placeholder="Your name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on change
          />
          <input
            type="email"
            placeholder="Your e-mail"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
          <input
            type="password"
            placeholder="Create password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
          <div className="password-strength"> {/* Password strength section */}
            <label>Password strength</label>
            <div className="strength-bars"> {/* Strength visualization */}
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
          <div className="button-container"> {/* Button container */}
            <button
              className="create-account-button"
              onClick={handleCreateAccount} // Call function on click
            >
              Create account
            </button>
            <button className="sign-in-button">Sign in</button> {/* Sign in button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; // Exporting the App component
