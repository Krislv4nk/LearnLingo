import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css';
import "@fontsource/roboto";
import "@fontsource/roboto/400.css"; 
import "@fontsource/roboto/400-italic.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/LearnLingo">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);