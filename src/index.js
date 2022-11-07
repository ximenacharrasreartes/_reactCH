import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from './components/ThemeProvider'
import { CartProvider } from 'react-use-cart';



render(
  <React.StrictMode>
  <ThemeProvider>
  <CartProvider>
  <App />
  </CartProvider>
  </ThemeProvider>
 
</React.StrictMode>

, document.getElementById('root'));

reportWebVitals();
