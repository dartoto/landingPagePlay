import React from 'react';
import Personaje from '../../assets/Personaje.png';
import Logo from '../../assets/Logo.png';
import {motion} from "framer-motion";
import {slipeUp,slipeLeft} from '../../utility/animation'

function Hero() {
  return (
    <section className='mt-36'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
        {/*Texto descriptivo*/}

    <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
        <motion.img 
        src={Logo} alt='Logo del Juego'
        variants={slipeUp(0.8)}
            initial='initial'
            animate='animate'
        />
        <motion.p className='py-12 text-white items-center '
        variants={slipeUp(1)}
        initial='initial'
        animate='animate'
        >
            Magic Quest es un emocionante juego que te sumerge en
            un mundo de fantasía lleno de desafíos que deberás
            superar. Un reino lleno de animales legendarios, con 
            hechizos que debes conocer y personajes con habilidades 
            especiales, harán de tu camino una diversión constante 
            y que culminirá cuando te conviertas en un super héroe.
        </motion.p>
        <motion.div className='flex justify-center gap-4 ' 
        variants={slipeUp(1.3)}
        initial='initial'
        animate='animate'
        >
            <a className='bg-purple-600 px-12 py-2 rounded-3xl items-center text-white hover:bg-purple-700 transition-all duration-300 cursor-pointer'>Jugar ahora <i className='bi bi-controller text-xl ml-2'></i></a>            
            <a className='text-white flex items-center cursor-pointer'>ver GamePlay <i className='bi bi-youtube text-xl ml-2'></i></a>
        </motion.div>
    
    </div>
        {/*Imagen Personaje*/}

    <motion.div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
    variants={slipeLeft("right", 1.3)}
    initial='initial'
    animate='animate'
    >
        <img src={Personaje} alt='Personaje del juego'/>
    </motion.div>
    
    
    
    </div>
    </section>

  )
}

export default Hero