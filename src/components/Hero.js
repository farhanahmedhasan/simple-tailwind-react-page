import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Button from './Button';

const Hero = () => {
  return (
    <div className='flex-center flex-col' style={{ height: `calc(100vh - 64px)` }}>
      <h1 className='antialiased md:tracking-wide mb-14 font-black text-4xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent opacity-80 selection:bg-pink-400 selection:text-yellow-200 md:text-7xl lg:text-9xl'>
        EGGCELLENT
      </h1>
      <Link to='/' component={Button} className='btn--rounded flex-center animate-bounce bg-opacity-90'>
        Order Now
        <AiOutlineShoppingCart className='ml-4 text-2xl text-yellow-100' />
      </Link>
    </div>
  );
};

export default Hero;
