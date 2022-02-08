import React from 'react';

import Logo from '../assets/icons/main/Logo.svg'

const Navigation = () => {
  return <nav className='nav pb-5 pt-4  flex'>
      <a className='nav__logo' href="home">
        <img src={Logo} alt="Logo" />
      </a>

      <ul className='nav__menu flex'>
        <li><a href="about">About Us</a></li>
        <li><a href="women">Women</a></li>
        <li><a href="men">Men</a></li>
        <li><a href="beauty">Beauty</a></li>
        <li><a href="accessories">Accessories</a></li>
        <li><a href="blog">Blog</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>

      <ul className="nav__icons flex">
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
        <li>
          
        </li>
      </ul>
      
  </nav>;
};

export default Navigation;
