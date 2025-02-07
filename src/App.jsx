import './App.css'
import { Routes, Route, Link} from "react-router-dom";
import Red from './Red.jsx';
import Blue from './Blue.jsx';
import Home from './Home.jsx';

function App() {

  return (
    <>
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to='/blue'>BLUE</Link>
        <Link to='/red'>RED</Link>
        <Link to='/'>HOME</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blue' element={<Blue />}/>
          <Route path='/red' element={<Red />}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
