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

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Photoprofile from './components/Photoprofile';
import Market from './components/Market';
import CustomerPanel from './components/CustomerPanel';
import FilteredList from './components/CustomerPanel';

// import Landing from './components/Landing';
// import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path='/cp' element={<FilteredList/>}/>
      </Routes>
      <Routes>
        <Route path='/market' element={<Market/>}/>
      </Routes>
      <Routes>
        <Route path='/homepage' element={<LandingPage/>} />
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Routes>
        <Route path='/navbar' element={<Navbar></Navbar>}/>
      </Routes>
      <Routes>
        <Route path='/photoprofile' element={<Photoprofile></Photoprofile>}/>
      </Routes>
    </Router>
  )
}

export default App
