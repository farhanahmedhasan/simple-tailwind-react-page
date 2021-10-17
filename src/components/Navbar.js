import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='px-4 flex justify-between bg-white shadow-sm h-16 items-center text-black relative'>
      <Link className=' text-2xl' to='/'>
        Egg
      </Link>

      <div className='cursor-pointer md:hidden'>
        <FaBars />
      </div>

      <div className='space-x-8 hidden md:block'>
        <Link className='' to='/'>
          Home
        </Link>
        <Link className='' to='/menu'>
          Menu
        </Link>
        <Link className='' to='/about'>
          About
        </Link>
        <Link className='' to='/contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
