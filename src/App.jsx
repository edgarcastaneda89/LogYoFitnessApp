import React from 'react';
import './App.css';
import designerImage from './assets/Designer.jpeg'; // Import the image

function App() {
  return (
    <div className="container">
      <div className="left-panel">
        <h2 className="welcome-message">Welcome back!</h2>
        <img src={designerImage} alt="Designer" className="left-panel-image" />
      </div>
      <div className="right-panel">
        <h1>Create an Account</h1>
        <div className="Create-an-Account-form">
          <input type="text" placeholder="Your name" className="input-field" />
          <input type="email" placeholder="Your e-mail" className="input-field" />
          <input type="password" placeholder="Create password" className="input-field" />
          <div className="password-strength">
            <label>Password strength</label>
            <div className="strength-bars">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
          <div className="button-container">
            <button className="create-account-button">Create account</button>
            <button className="sign-in-button">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
