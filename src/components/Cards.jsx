import React, { useState } from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  const [currentImage, setCurrentImage] = useState(Single);
  const images = [Single, Double, Triple];

  const handleNext = () => {
    const currentIndex = images.indexOf(currentImage);
    setCurrentImage(images[(currentIndex + 1) % images.length]);
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(currentImage);
    setCurrentImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  return (
    <div className='w-full py-10 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <div className='flex justify-center'>
            <button className='mx-2' onClick={handlePrev}>{'<'}</button>
            <img
              className='w-full h-64 object-cover mx-auto mt-[-3rem] bg-white'
              src={currentImage}
              alt='/'
            />
            <button className='mx-2' onClick={handleNext}>{'>'}</button>
          </div>
          <h2 className='text-2xl font-bold text-center py-8'>CHARLIE</h2>
          <p className='text-center text-4xl font-bold'>$49.900</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Envio Gratis</p>
            <p className='py-2 border-b mx-8'>3 Cuotas sin interes</p>
            <p className='py-2 border-b mx-8'></p>
          </div>
          <button className='bg-[#f1c40f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Now</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <div className='flex justify-center'>
            <button className='mx-2' onClick={handlePrev}>{'<'}</button>
            <img
              className='w-full h-64 object-cover mx-auto mt-[-3rem] bg-transparent'
              src={Double}
              alt='/'
            />
            <button className='mx-2' onClick={handleNext}>{'>'}</button>
          </div>
          <h2 className='text-2xl font-bold text-center py-8'>Edgard</h2>
          <p className='text-center text-4xl font-bold'>$49.900</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Envio Gratis</p>
            <p className='py-2 border-b mx-8'>3 Cuotas sin interes</p>
            <p className='py-2 border-b mx-8'></p>
          </div>
          <button className='bg-black text-[#f1c40f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Now</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <div className='flex justify-center'>
            <button className='mx-2' onClick={handlePrev}>{'<'}</button>
            <img
              className='w-full h-64 object-cover mx-auto mt-[-3rem] bg-white'
              src={Triple}
              alt='/'
            />
            <button className='mx-2' onClick={handleNext}>{'>'}</button>
          </div>
          <h2 className='text-2xl font-bold text-center py-8'>ALBERT</h2>
          <p className='text-center text-4xl font-bold'>$49.900</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Envio Gratis</p>
            <p className='py-2 border-b mx-8'>3 Cuotas sin interes</p>
            <p className='py-2 border-b mx-8'></p>
          </div>
          <button className='bg-[#f1c40f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

