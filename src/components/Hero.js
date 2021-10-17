import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Hero = () => {
  // const HeroContainer = useRef();

  // useEffect(() => {
  //   const windowHeight = window.innerHeight;
  //   const viewportHeightWithoutNav = windowHeight - 64;
  //   console.log(viewportHeightWithoutNav);
  //   HeroContainer.current.clientHeight = `${viewportHeightWithoutNav}px`;
  //   // console.dir(HeroContainer.current);
  // }, []);

  return (
    <div className='flex flex-col items-center justify-center ' style={{ height: `calc(100vh - 64px)` }}>
      <h1 className='mb-14 font-black  text-4xl md:text-7xl lg:text-9xl'>EGGCELLENT</h1>
      <Link
        to='/'
        className='flex items-center bg-yellow-400 text-xl font-medium px-10 py-6 rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out animate-bounce'
      >
        Order Now
        <AiOutlineShoppingCart className='ml-4 text-2xl' />
      </Link>
    </div>
  );
};

export default Hero;
