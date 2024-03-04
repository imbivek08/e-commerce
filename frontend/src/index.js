import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import ShopContextProvider from './Context/ShopContext';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
