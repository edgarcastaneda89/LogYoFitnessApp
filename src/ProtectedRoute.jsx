// Import necessary modules from React and React Router
import React, { useEffect, useState } from 'react'; // React for building the component, useEffect and useState for handling side effects and state
import { Navigate } from 'react-router-dom'; // Navigate is used for redirecting the user to another page

// ProtectedRoute component that wraps around the children components
const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track if the user is authenticated
    const [loading, setLoading] = useState(true); // State to track the loading state, which is used while checking for authentication

    // useEffect hook to check if the user has a valid token on component mount
    useEffect(() => {
        const token = localStorage.getItem('token'); // Get the 'token' from localStorage (this is where the token might be stored after login)
        if (token) {
            setIsAuthenticated(true); // If there is a token, the user is authenticated 
        } else {
            setIsAuthenticated(false); // If no token is found, the user is not authenticated
        }
        setLoading(false); // Once the token check is complete, set loading to false
    }, []); // Empty dependency array means this will only run once, when the component is first mounted

    // While the authentication check is still loading, show a loading message
    if (loading) {
        return <p>Loading...</p>; // Display loading text until authentication status is determined
    }

    // If authenticated, render the children; otherwise, redirect to /signin
    return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute; // Export the ProtectedRoute component so it can be used in other parts of the app
