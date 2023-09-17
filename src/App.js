import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Navbar from "./Components/Navbar"
import Example from './Pages/Example';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/examples' element={<Example/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;