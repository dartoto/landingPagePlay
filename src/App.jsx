import React from 'react'
import './App.css'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Fondo from './assets/Fondo.png'

function App() {
  const bgImage = {
     backgroundImage : `url(${Fondo})`,
     backgroundRepeat: "no-repeat",
     backgroundPosition: "bottom",
     backgroundSize : "cover",
     position : 'relative'
  }

  return (
   
    <div style ={bgImage} className='overflow:hidden min-h-screen'>
    <Navbar/>
    <Hero/>
    </div>
    
  );
}

export default App
