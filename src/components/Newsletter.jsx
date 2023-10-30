import React from 'react';
import { FaTruck, FaCreditCard, FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-4 items-center'>
        <div className='my-4 flex flex-col items-center'>
          <FaTruck size={50} />
          <p>Envío Gratis a todo el pais</p>
        </div>
        <div className='my-4 flex flex-col items-center'>
          <FaCreditCard size={50} />
          <p>3 cuotas sin interes</p>
        </div>
        <div className='my-4 flex flex-col items-center'>
          <FaEnvelope size={50} />
          <p>Atencion online 24 horas</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
