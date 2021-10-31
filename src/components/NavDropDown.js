import React from 'react';
import { Link } from 'react-router-dom';

const NavDropDown = ({ open, toggle }) => {
  return (
    <div className={open ? 'showNavDeropDown' : 'hideNavDeropDown'} onClick={toggle}>
      <Link className='' to='/'>
        Home
      </Link>
      <Link className='' to='/menu'>
        Menu
      </Link>
      <Link className='' to='/about'>
        About
      </Link>
      <Link to='/faq'>Faq</Link>
      <Link className='' to='/contact'>
        Contact
      </Link>
    </div>
  );
};

export default NavDropDown;
