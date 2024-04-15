import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';
// import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
      <Nav/>

    </div>
  );
}

export default App;
