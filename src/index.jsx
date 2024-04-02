// IMPORT DES LIBRAIRIES REACT ET REACTDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// BOOTSTRAP EN NPM IMPORTATION DU STYLE
import 'bootstrap/dist/css/bootstrap.min.css';
// BOOTSTRAP EN NPM IMPORTATION DU SCRIPT
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// IMPORTATION DU MODULE DE ROUTAGE
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
