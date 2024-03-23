import './App.css';
import React from 'react';
import { Header } from './header';
import { AppProvider } from './providers/AppProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage'; // named export
import { Universiteler } from './pages/Universiteler'; // named export
import { Bolumler } from './pages/Bolumler'; // named export

export const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/Universiteler" element={<Universiteler />} />
          <Route path="/Bolumler" element={<Bolumler />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};
