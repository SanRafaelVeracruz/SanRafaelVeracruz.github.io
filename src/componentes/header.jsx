import React from 'react';
import '../hojas de estilo/header.css'

function Header() {
  return (
    <div className='navbar'>
      <div className='opciones-menu'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Discord</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;