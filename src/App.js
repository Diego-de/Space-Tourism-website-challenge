import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Components/Navbar';
import Home from './Pages/Home';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';


function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/tech" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
