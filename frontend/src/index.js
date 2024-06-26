import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root'); // Kök div'i seç
const root = createRoot(container); // 'createRoot' ile yeni bir kök oluştur

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
