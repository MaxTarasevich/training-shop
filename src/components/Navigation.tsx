import React from 'react';

import Logo from '../assets/icons/main/Logo.svg'

import Seach from '../SVGcomponent/Seach';
import Globe from '../SVGcomponent/Globe';
import User from '../SVGcomponent/User';
import Bag from '../SVGcomponent/Bag';

import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return <nav className='nav'>
    <div className="container pb-5 pt-4  flex justify-between">
      <Link className='nav__logo' to="/training-shop">
        <img src={Logo} alt="Logo" />
      </Link>

      <ul className='nav__menu flex space-x-4 text-title4 text-dark'>
        <li><a href="about">About Us</a></li>
        <li><NavLink to="/training-shop/women">Women</NavLink></li>
        <li><NavLink to="/training-shop/men">Men</NavLink></li>
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
