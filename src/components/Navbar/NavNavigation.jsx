import React from 'react';
import { useCategories } from '../../hooks/useCategories';
import NavLink from './NavLink';

function NavNavigation() {
  const { categories, error, loading } = useCategories();

  if (error) return null;

  return (
    <div className='navbar__navigation'>
      {loading || !categories?.length > 0 ? (
        <p className='navbar__link'>Cargando...</p>
      ) : (
        categories.map(ctg => (
          <NavLink key={ctg} to={`/productos/categoria/${ctg}`} keystr={ctg} />
        ))
      )}
    </div>
  );
}

export default NavNavigation;
