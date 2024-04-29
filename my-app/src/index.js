import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Burada App bileşenini doğru şekilde içe aktardığınızdan emin olun
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
