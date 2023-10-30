import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'></p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Lo heredamos, ahora sos parte del
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'></p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Legado.']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>¡Bienvenido a Reylux! Ofrecemos un producto de fabricacion propia que fusiona la tendencia mas actual con la calidad de "antes".</p>
        <button className='bg-[#f1c40f] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
