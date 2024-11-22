import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Here, you can optionally validate the token with the backend
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false); // Loading is done after token check
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Show a loading message while checking
    }

    // If authenticated, render the children; otherwise, redirect to /signin
    return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
