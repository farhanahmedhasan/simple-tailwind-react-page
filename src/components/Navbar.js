import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import NavDropDown from './NavDropDown';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const hideDropDown = () => {
    if (window.innerWidth > 768 && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', hideDropDown);
    return () => window.removeEventListener('resize', hideDropDown);
  });

  return (
    <>
      <nav className='px-4 flex justify-between bg-white shadow-sm h-16 items-center text-black relative'>
        <Link className='text-2xl' to='/'>
          Egg
        </Link>

        <div className='cursor-pointer md:hidden' onClick={toggle}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <div className='space-x-8 hidden md:block'>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/faq'>Faq</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
      <NavDropDown open={open} toggle={toggle} />
    </>
  );
};

export default Navbar;
