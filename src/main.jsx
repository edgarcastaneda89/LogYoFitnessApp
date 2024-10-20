import { StrictMode } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Import Amplify and aws-exports configuration
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { ThemeProvider, Authenticator } from '@aws-amplify/ui-react'; // Import Authenticator

// Configure Amplify
Amplify.configure(awsconfig);

// Wrap your app in ThemeProvider and Authenticator.Provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Authenticator.Provider>  {/* Authenticator wraps the app */}
        <App />
      </Authenticator.Provider>
    </ThemeProvider>
  </StrictMode>,
);
