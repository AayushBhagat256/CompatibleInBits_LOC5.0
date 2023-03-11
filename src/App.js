import React from 'react'
import Login from './components/Login'
import './App.css'
import Register from './components/Register'
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes,
  //Link
} from "react-router-dom";
// import Landing from './components/Landing';
// import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes> */}
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App