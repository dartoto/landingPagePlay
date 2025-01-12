

import React, {useState} from 'react';
import Logo from '../../assets/Logo.png';

const navbarlink = [
    {id:1,
    title:"Inicio",
    link:"/"
    },
    {id:2,
    title:"Quienes Somos",
    link:"/"
    },
    {id:3,
    title:"Precios",
    link:"/"
    },
    {id:4,
    title:"Contacto",
    link:"/"
    },

]
const navbarRedes = [
    {
        id:1,
        title:'Instagram',
        link:'www.instagram.com',
        icon:'bi bi-instagram'
    },
    {
        id:2,
        title:'TikTok',
        link:'www.tiktok.com',
        icon:'bi bi-tiktok'
    },
]

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false)

    const toggleMenu = () => {

        setisOpen (!isOpen)
    }

  return (
    <nav className='bg-purple-900 w-full max-w-7xl mx-auto p-x4  bg-opacity-30 backdrop-blur-md z-50'>
        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

            {/*imagen*/}
    <div>
        <img src={Logo} alt="Logo del sitio" className='w-[100px]'/>
    </div>
    {/*boton de hamburguesa*/}
    <button onClick={toggleMenu}   className=' md:hidden text-white'>
        <svg
           className='w-6 h-6'
           fill='none'
           stroke='currentcolor'
           viewBox='0 0 24 24'
           >
            {isOpen ? ( <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'

           />) : (<path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'

           />)}
          
           
        

        </svg>


    </button>

    {/*menu de navegacion*/}
    <div className='hidden md:block'>
    <ul className='flex sm:space-x-8 space-x-4'>
        {navbarlink.map((link) => (
            <li key={link.id}>
               <a className='text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300'   href={link.link}>{link.title}</a>
            </li>

        ))}
    </ul>
    </div>
    <div className='hidden md:block'>
    <ul className='flex sm:space-x-4 space-x-2'>
        {navbarRedes.map((link) => (
            <li key={link.id}>
             <a 
             target='blank'
             rel='noreferrer noopener'
             className='inline-block transition: transform duration-300 transition-transform hover:scale-125'
             href={link.link}>

             <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}
              >  
            
            </i>
            </a>
            </li>
        ))}
    </ul>
    </div>
    </div>
     {/*menu de movil*/}
    <div className={`md:hidden absolute w-full bg-purple-950 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible' }`}>
    <ul className='flex flex-col py-2 text-center'>
    {navbarlink.map((link) => (
            
            <li key={link.id} className='py-2 text-center'>
               <a className='text-white hover:text-sky-200'   href={link.link}>{link.title}</a>
            </li>

        ))}
    </ul>
    <ul className='flex space-x-4 px-4 py-2 border-t border-purple-500 justify-center'>
        {navbarRedes.map((link) => (
            <li key={link.id}>
             <a 
             target='blank'
             rel='noreferrer noopener'
             className='inline-block'
             href={link.link}>

             <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}
              >  
            
            </i>
            </a>
            </li>
        ))}
    </ul>
    </div>
    
    
    
 </nav>
  )
}

export default Navbar
