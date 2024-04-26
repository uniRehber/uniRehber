import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //yönlendirmeleri tanımlamızı sağlıyor
import { Header } from './header';



export const App = () =>{
  return (
    <>
      <Header />
    </>
    );
  }
  export default App;