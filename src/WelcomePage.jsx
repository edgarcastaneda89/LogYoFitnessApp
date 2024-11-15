import React, { useState } from 'react'; // Import React and useState
import { Link } from 'react-router-dom';
import './App.css';
import designerImage from './assets/Designer.jpeg';

function WelcomePage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);

    const handleCreateAccount = async () => {
        try {
            const requestData = { name, email, password };
            const response = await fetch('http://localhost:3000/api/create-account', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData),
            });
            const result = await response.json();

            if (response.ok) {
                console.log('Account created successfully:', result);
                setAccountCreated(true);
                setName('');
                setEmail('');
                setPassword('');
            } else {
                console.error('Failed to create account:', result);
                setAccountCreated(false);
            }
        } catch (error) {
            console.error('Error creating account:', error);
            setAccountCreated(false);
        }
    };

    return (
        <div className="container">

            <div className="left-panel">
                <h2 className="welcome-message">Welcome back!</h2>
                <img src={designerImage} alt="Designer" className="left-panel-image" />
            </div>
            <div className="right-panel">
                <h1>Create an Account</h1>
                {accountCreated && (
                    <div className="success-message">
                        Account created successfully! Please sign in to continue.
                    </div>
                )}

                <div className="Create-an-Account-form">
                    <input
                        type="text"
                        placeholder="First name"
                        className="input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Your e-mail"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Create password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="password-strength">
                        <label>Password strength</label>
                        <div className="strength-bars">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>

                    <div className="button-container">
                        <button
                            className="create-account-button"
                            onClick={handleCreateAccount}
                        >
                            Create account
                        </button>
                        <Link to="/signin">
                            <button className="sign-in-button">Sign in</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
