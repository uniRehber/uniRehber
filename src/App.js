import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Header.js';
import  Login  from './pages/Login/Login.jsx';
import  Register  from './pages/Register/Register.jsx';
import { HomePage } from './pages/HomePage.js';
import { CareerQuiz } from './pages/CareerQuiz.js';
import { Departments } from './pages/Departments/Departments.js';
import { Universities } from './pages/Universities/Universities.js';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

//backend iletişimi
axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true;

export const App = () => {
  return (
    <div >
    <Toaster position='bottom-right' toastOptions={{ duration: 3000 }} />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/careerquiz" element={<CareerQuiz/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path="/departments" element={<Departments/>} />
        <Route path="/universities" element={<Universities/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
