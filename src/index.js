import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/navbar';
import Bodycard from './components/bodycard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
   <Nav />
   <Bodycard />
   </div>
  </React.StrictMode>
);

reportWebVitals();
