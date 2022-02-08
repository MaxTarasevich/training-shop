import React from 'react';

import Logo from '../assets/icons/main/Logo.svg'

import Seach from '../SVGcomponent/Seach';
import Globe from '../SVGcomponent/Globe';
import User from '../SVGcomponent/User';
import Bag from '../SVGcomponent/Bag';

const Navigation = () => {
  return <nav className='nav'>
    <div className="container pb-5 pt-4  flex justify-between">
      <a className='nav__logo' href="home">
        <img src={Logo} alt="Logo" />
      </a>

      <ul className='nav__menu flex space-x-4 text-title4 text-dark'>
        <li><a href="about">About Us</a></li>
        <li><a href="women">Women</a></li>
        <li><a href="men">Men</a></li>
        <li><a href="beauty">Beauty</a></li>
        <li><a href="accessories">Accessories</a></li>
        <li><a href="blog">Blog</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>

      <ul className="nav__icons flex space-x-5">
        <li>
          <Seach />
        </li>
        <li>
          <Globe />
        </li>
        <li>
          <User />
        </li>
        <li>
          <Bag />
        </li>
      </ul>
    </div>
  </nav>;
};

export default Navigation;
