import React from 'react'; // Importing React
import './App.css'; // Importing CSS for styling
import designerImage from './assets/Designer.jpeg'; // Importing an image

function App() {
  return (
    <div className="container"> {/* Main container */}
      <div className="left-panel"> {/* Left side */}
        <h2 className="welcome-message">Welcome back!</h2> {/* Welcome message */}
        <img src={designerImage} alt="Designer" className="left-panel-image" /> {/* Designer image */}
      </div>
      <div className="right-panel"> {/* Right side for form */}
        <h1>Create an Account</h1> {/* Heading */}
        <div className="Create-an-Account-form"> {/* Form container */}
          <input type="text" placeholder="Your name" className="input-field" /> {/* Name input */}
          <input type="email" placeholder="Your e-mail" className="input-field" /> {/* Email input */}
          <input type="password" placeholder="Create password" className="input-field" /> {/* Password input */}
          <div className="password-strength"> {/* Password strength section */}
            <label>Password strength</label>
            <div className="strength-bars"> {/* Strength visualization */}
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
          <div className="button-container"> {/* Button container */}
            <button className="create-account-button">Create account</button> {/* Create account button */}
            <button className="sign-in-button">Sign in</button> {/* Sign in button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; // Exporting the App component
