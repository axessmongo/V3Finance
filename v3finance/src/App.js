import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import Testimonal from './components/Testimonal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
   <Testimonal/>
    </div>
  );
}

export default App;
