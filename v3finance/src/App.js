import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home'
import Services from './components/Services';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Goal from './components/Goal'
import Blog from './components/Blogs/Blog';




function App() {
  useEffect(() => {
    AOS.init({

    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Blog' element={<Blog/>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
