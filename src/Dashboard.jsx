import React from 'react'; // Import React to build the component
import './Dashboard.css'; // Import the CSS file for styling the Dashboard component

// Define the Dashboard component
const Dashboard = () => {
    return (
        <div className="dashboard-body"> {/* Main container for the dashboard layout */}
            <div className="dashboard">  {/* Dashboard container that holds the sidebar and main content */}
                {/* Sidebar */}
                <div className="sidebar"> {/* Sidebar that contains navigation buttons */}
                    <button className="menu-button active">Home</button> {/* "Home" button with active class to highlight the current section */}
                    <button className="menu-button">Progress</button> {/* "Progress" button for navigating to progress section */}
                    <button className="menu-button">Log a Workout</button> {/* "Log a Workout" button to log a new workout */}
                    <button className="menu-button">Contact a Professional</button> {/* "Contact a Professional" button for reaching out to professionals */}
                    <button className="menu-button">Support</button> {/* "Support" button to access help or customer support */}
                </div>

                {/* Main Content */}
                <div className="main-content"> {/* Main area where content is displayed */}
                    <h1>Welcome to LogYoFitness</h1> {/* Main heading of the dashboard */}
                    <p>
                        Achieve your fitness goals, track your progress, and stay on top
                        of your health journey with our easy-to-use platform.
                    </p> {/* A brief description of the platform's features */}
                </div>

                {/* Log-out Button */}
                <div className="bottom-left"> {/* Container for the log-out button positioned at the bottom left */}
                    <button className="log-out-button">Log Out</button> {/* Log-out button for users to sign out of the dashboard */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard; // Export the Dashboard component so it can be used in other parts of the application
