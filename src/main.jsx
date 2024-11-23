import { StrictMode } from 'react'; // Import StrictMode to enable additional checks and warnings during development
import '@aws-amplify/ui-react/styles.css'; // Import the CSS styles for AWS Amplify UI components
import { createRoot } from 'react-dom/client'; // Import the function to create a root DOM node for rendering React components
import App from './App.jsx'; // Import the main App component where the application logic is defined
import './index.css'; // Import the CSS styles for the main app

import { Amplify } from 'aws-amplify'; // Import the Amplify library to interact with AWS services
import awsconfig from './aws-exports'; // Import the AWS configuration settings (like API endpoints, user pool settings) from a file
import { ThemeProvider, Authenticator } from '@aws-amplify/ui-react'; // Import components from AWS Amplify UI React to manage authentication and theming

Amplify.configure(awsconfig); // Configure Amplify with the settings from awsconfig

// Create the root DOM element and render the React app inside it with Amplify's authentication and theming
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ThemeProvider is used to apply custom or default styles to the app */}
    <ThemeProvider>
      {/* Authenticator.Provider handles authentication logic, such as login and sign-up */}
      <Authenticator.Provider>
        {/* The main App component where your app logic will be rendered */}
        <App />
      </Authenticator.Provider>
    </ThemeProvider>
  </StrictMode>,
);
