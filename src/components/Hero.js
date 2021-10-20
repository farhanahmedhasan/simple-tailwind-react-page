import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Button from './Button';

const Hero = () => {
  return (
    <div className='flex-center flex-col' style={{ height: `calc(100vh - 64px)` }}>
      <h1 className='mb-14 font-black  text-4xl md:text-7xl lg:text-9xl'>EGGCELLENT</h1>
      <Link to='/' component={Button} className='btn--rounded flex-center animate-bounce'>
        Order Now
        <AiOutlineShoppingCart className='ml-4 text-2xl' />
      </Link>
    </div>
  );
};

export default Hero;
