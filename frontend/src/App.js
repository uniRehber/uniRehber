
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Header.js';
import  Login  from './pages/Login/Login.jsx';
import Profile from './pages/Profile.js';
import  Register  from './pages/Register/Register.jsx';
import { HomePage } from './pages/HomePage.js';
import { CareerQuiz } from './pages/CareerQuiz/CareerQuiz.js';
import { Departments } from './pages/Departments/Departments.js';
import Universities, { UniversityDetails }  from './pages/Universities/Universities.js';
import { Results } from './pages/CareerQuiz/Results.js';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Programlar from './pages/Programlar/Programlar.js';

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
        <Route path="/careerquiz/results" element={<Results/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path='/register' element={<Register/>} />
        <Route path="/departments" element={<Departments/>} />
        <Route path="/universities" element={<Universities/>} />
        <Route path="/university/:name" element={<UniversityDetails />} />
        <Route path='/programlar' element={<Programlar/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
