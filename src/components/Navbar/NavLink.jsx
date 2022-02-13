import React from 'react';
import { NavLink as ActiveLink } from 'react-router-dom';

function NavLink({ to, keystr }) {
  return (
    <ActiveLink
      to={to}
      key={keystr}
      className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
      {keystr}
    </ActiveLink>
  );
}

export default NavLink;
