import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/">
            <Route path='' element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;