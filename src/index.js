import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles (optional, can include responsive styles here)
import App from './App'; // Main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This matches the `id` of the root <div> in your HTML file
);
