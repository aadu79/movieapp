import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewmovie from './components/Viewmovie'
import Navbar from './components/Navbar'
import Addmovie from './components/Addmovie'
import { Route,Routes } from 'react-router-dom'

function App(){
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Viewmovie/>}></Route>
      <Route path='/addmovie' element={<Addmovie/>}></Route>
      <Route path='/' element={<Viewmovie/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
