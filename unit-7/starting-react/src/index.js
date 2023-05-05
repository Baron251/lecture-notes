// To reference other files/items/packages we use the key word: import
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import/bring in styling to apply from a CSS file
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Add component to the React DOM, "Mounting" the main App component */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
