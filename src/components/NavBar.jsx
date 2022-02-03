import React from 'react';
import { Link } from 'react-router-dom';
import NavCart from './NavCart';
import NavNavigation from './NavNavigation';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>GRINGS</Link>
      </div>
      <div className='navbar__navigation'>
        <NavNavigation />
      </div>
      <div className='navbar__icons'>
        <NavCart />
      </div>
    </nav>
  );
}

export default NavBar;
