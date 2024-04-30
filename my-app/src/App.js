import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './header';
import ImageSlider from './pages/ImageSlider.js'; 
import image1 from './image/1.resim.jpg';
import image2 from './image/2.resim.jpg';
import image3 from './image/3.resim.jpg';
import image4 from './image/4.resim.jpg';

const images = [image1, image2, image3, image4];

export const App = () => {
  return (
    <Router>
      <Header />
      <ImageSlider images={images} /> {/* ImageSlider komponentini burada render edin */}
      <Routes>
        {/* Yönlendirmelerinizi burada tanımlayın */}
        {/* Örnek: <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
