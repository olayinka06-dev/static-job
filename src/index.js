import React from 'react';
import ReactDOM from 'react-dom/client';
import  './App.css';
import { AppWrapper } from './components/provider/AppWrapper'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper>
      <App/>
    </AppWrapper>
  </React.StrictMode>
);


