import React from 'react';
import styles from './SignInPage.module.css';

function SignInPage() {
    return (
        <div className={styles['sign-in-container']}>
            <div className={styles['sign-in-box']}>
                <h1 className={styles['sign-in-title']}>Sign in</h1>
                <p className={styles['sign-in-subtitle']}>Let's make your fitness goals reality</p>
                <form className={styles['sign-in-form']}>
                    <input type="email" placeholder="Email" className={styles['input-field']} />
                    <input type="password" placeholder="Password" className={styles['input-field']} />
                    <button type="submit" className={styles['sign-in-button-page']}>Sign in</button>
                </form>
                <div className={styles['sign-in-options']}>
                    <a href="#" className={styles['forgot-password']}>Forgot password?</a>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
