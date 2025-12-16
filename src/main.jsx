import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css"

// Ensure we import the core CSS variables for light/dark mode setup
// import './styles/variables.css'; 

// 1. Get the root element from the HTML (usually defined in index.html)
const rootElement = document.getElementById('root');

// 2. Check if the root element exists before creating the app
if (rootElement) {
  // Use ReactDOM.createRoot for concurrent mode features (modern React)
  ReactDOM.createRoot(rootElement).render(
    // StrictMode helps highlight potential problems in an application, 
    // running checks only in development mode.
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("The root element with ID 'root' was not found in the document.");
}