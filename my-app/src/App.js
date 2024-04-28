import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //yönlendirmeleri tanımlamızı sağlıyor
import { Header } from './header';
import { LoginPage } from './pages/Login/LoginPage';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';



export const App = () =>{
  return (
    <>
    <Header /> 
    <Router>
      <Route path="/" element={<HomePage/>} />
      <Route path="/aboutpage" element={<AboutPage/>} />
      <Route path="/loginpage" element={<LoginPage/>} />
    </Router>
      
    </>
    );
  }
  export default App;