import './App.css'
import { Routes, Route} from "react-router-dom";
import Red from './Red.jsx';
import Blue from './Blue.jsx';
import Green from './Green.jsx';
import Yellow from './Yellow.jsx';
import Home from './Home.jsx';
import NavBar from './NavBar.jsx';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('white');

  return (
    <>
    <div id="container">
      <NavBar />
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home setColor={setColor} color={color}/>}/>
          <Route path='/blue' element={<Blue />}/>
          <Route path='/red' element={<Red />}/>
          <Route path='/green' element={<Green />}/>
          <Route path='/yellow' element={<Yellow/>}/>
          <Route path='/red' element={<Red />}/>
        </Routes>
      </div>
      <NavBar />
    </div>
    </>
  )
}

export default App
