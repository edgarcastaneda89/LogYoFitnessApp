import React, { useState } from 'react';
import styles from './SignInPage.module.css';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use navigate for programmatic routing

    const handleSignIn = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Sign-in failed');
            }

            // Save the token and redirect to /dashboard
            localStorage.setItem('token', data.token);
            navigate('/dashboard'); // Redirect to the dashboard using react-router
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className={styles['sign-in-container']}>
            <div className={styles['sign-in-box']}>
                <h1 className={styles['sign-in-title']}>Sign in</h1>
                <p className={styles['sign-in-subtitle']}>
                    Let's make your fitness goals reality
                </p>
                {error && <p className={styles['error-message']}>{error}</p>}
                <form className={styles['sign-in-form']} onSubmit={handleSignIn}>
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles['input-field']}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={styles['input-field']}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles['sign-in-button-page']}>
                        Sign in
                    </button>
                </form>
                <div className={styles['sign-in-options']}>
                    <a href="#" className={styles['forgot-password']}>
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
