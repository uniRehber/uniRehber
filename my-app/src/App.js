import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './header';
import ImageSlider from './ImageSlider'; 


const images = [
  '1.resim.jpeg',
  '2.resim.jpeg',
  '3.resim.jpeg',
  '4.resim.jpeg',
];

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
