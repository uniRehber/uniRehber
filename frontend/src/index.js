import React from 'react';
import { createRoot } from 'react-dom/client'; // 'react-dom/client' modülünden 'createRoot'u içe aktarın
import App from './App';

const container = document.getElementById('root'); // Kök div'i seçin
const root = createRoot(container); // 'createRoot' ile yeni bir kök oluşturun

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
