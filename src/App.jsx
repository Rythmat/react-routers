import './App.css'
import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
     <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<h2>Welcome!</h2>}/>
          <Route path='/blue' element={<h2>Blue!</h2>}/>
          <Route path='/red' element={<h2>Red!</h2>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
