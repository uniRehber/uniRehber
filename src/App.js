import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './header';
import ImageSlider from './pages/Slider/ImageSlider.js'; 
import image1 from './image/1.resim.jpg';
import image2 from './image/2.resim.jpg';
import image3 from './image/3.resim.jpg';
import image4 from './image/4.resim.jpg';
import { LoginPage } from './pages/Login/LoginPage';
import { HomePage } from './pages/HomePage';


const images = [image1, image2, image3, image4];

export const App = () => {
  return (
    <>
    <Router>
      <Header />
      <ImageSlider images={images} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/loginpage" element={<LoginPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
