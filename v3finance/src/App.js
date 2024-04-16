import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home'
import Services from './components/Services';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 




function App() {
  useEffect(() => {
    AOS.init({
   
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Nav/> */}g
    </div>
  );
}

export default App;
