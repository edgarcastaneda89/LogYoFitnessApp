import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-body">
            <div className="dashboard">
                {/* Sidebar */}
                <div className="sidebar">
                    <button className="menu-button active">Home</button>
                    <button className="menu-button">Progress</button>
                    <button className="menu-button">Log a Workout</button>
                    <button className="menu-button">Contact a Professional</button>
                    <button className="menu-button">Support</button>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <h1>Welcome to LogYoFitness</h1>
                    <p>
                        Achieve your fitness goals, track your progress, and stay on top
                        of your health journey with our easy-to-use platform.
                    </p>
                </div>

                {/* Log-out Button */}
                <div className="bottom-left">
                    <button className="log-out-button">Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
