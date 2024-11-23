import React from 'react'; // Imports React library to allow us to create React components.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Imports components from 'react-router-dom' for handling routing. 
// 'Router' is the container for all routes, 'Routes' wraps the route definitions, and 'Route' defines individual routes.

import WelcomePage from './WelcomePage'; // Imports the WelcomePage component to be displayed at the root path.
import SignInPage from './SignInPage'; // Imports the SignInPage component to be displayed when users visit the '/signin' path.
import Dashboard from './Dashboard'; // Imports the Dashboard component, which is the protected page that requires authentication.
import ProtectedRoute from './ProtectedRoute'; // Imports the ProtectedRoute component, which ensures that only authenticated users can access the Dashboard.

// Defines the App component, which contains the routing logic for the application.
function App() {
  // The component returns the JSX to render.
  return ( 
    <Router> {/* The Router component is the wrapper that keeps track of the browser history. It allows routing across the application. */}
      <Routes>  {/* The Routes component wraps all the Route definitions and renders the matching route based on the URL. */}
        {/* Public Routes */}
        <Route path="/" element={<WelcomePage />} /> {/* Defines the route for the root URL ('/'). Renders the WelcomePage component when visited. */}
        <Route path="/signin" element={<SignInPage />} /> {/* Defines the route for the '/signin' path. Renders the SignInPage component when visited. */}

        {/* Protected Route */}
        <Route 
          path="/dashboard"
          element={
            <ProtectedRoute> {/* ProtectedRoute ensures the user is authenticated before showing the Dashboard. */}
              <Dashboard /> {/* The Dashboard component is rendered inside the ProtectedRoute component only if the user is authenticated. */}
            </ProtectedRoute>
          }
        />
         {/* Defines the route for the '/dashboard' path. If the user is authenticated, the Dashboard component is displayed; otherwise, the user is redirected. */}

      </Routes>
    </Router>
  );
}

export default App; // Exports the App component so it can be used in other parts of the application.
