import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Burada App bileşenini doğru şekilde içe aktardığınızdan emin olun

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);