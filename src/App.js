import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Header.js';
import { LoginPage } from './pages/Login/LoginPage.jsx';
import { HomePage } from './pages/HomePage.js';
import { CareerQuiz } from './pages/CareerQuiz/CareerQuiz.js';
import { Departments } from './pages/Departments/Departments.js';
import { Universities } from './pages/Universities/Universities.js';
import { Results } from './pages/CareerQuiz/Results.js';

export const App = () => {
  return (
    <div >
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/careerquiz" element={<CareerQuiz/>} />
        <Route path="/careerquiz/results" element={<Results/>} />
        <Route path="/loginpage" element={<LoginPage/>} />
        <Route path="/departmens" element={<Departments/>} />
        <Route path="/universities" element={<Universities/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
