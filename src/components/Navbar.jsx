import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logoblanco.png'; // Ruta de la imagen del logo

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-18 h-14 mr-2" /> {/* Mostrar el logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'> </h1> {/* Dejar vacío para el logo */}
      </div>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <a href="#home">Home</a>
        </li>
        <li className='p-4'>
          <a href="#Hero">Company</a>
        </li>
        <li className='p-4'>
          <a href="#resources">Resources</a>
        </li>
        <li className='p-4'>
          <a href="#about">About</a>
        </li>
        <li className='p-4'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-10 h-10 mr-2" /> {/* Mostrar el logo */}
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> </h1> {/* Dejar vacío para el logo */}
        </div>
        <li className='p-4 border-b border-gray-600'>
          <a href="#home">Home</a>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <a href="#company">Company</a>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <a href="#resources">Resources</a>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <a href="#about">About</a>
        </li>
        <li className='p-4'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;