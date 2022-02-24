import React, { useEffect, useState } from 'react';

import Logo from '../assets/icons/main/Logo.svg'

import Seach from '../SVGcomponent/Seach';
import Globe from '../SVGcomponent/Globe';
import User from '../SVGcomponent/User';
import Bag from '../SVGcomponent/Bag';

import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  const [burger, setBurger] = useState<boolean>(false)

  useEffect(() => {

    if(burger){
      document.body.style.overflowY = 'hidden'
    }else{
      document.body.style.overflowY = ''
    }
    
  }, )
  


  return <nav className='nav' data-test-id="menu">
    <div className="container pb-5 pt-4  flex sm:justify-between justify-evenly flex-wrap gap-4">
      <Link className='nav__logo' to="/training-shop" data-test-id="header-logo-link">
        <img src={Logo} alt="Logo" />
      </Link>

      <ul className={`nav__menu lg:flex  gap-x-4 text-title4 text-dark
                      ${burger ? 'burger-open sm:text-title text-title1 font-semibold' : 'hidden'}`}
                      onClick={()=>{
                        if(burger){
                          setBurger(!burger)
                        }
                      }}
                      data-test-id='burger-menu'>
        <li className='hover:text-error transition-colors duration-500'><a href="about">About Us</a></li>
        <li className='hover:text-error transition-colors duration-500'><NavLink to="/training-shop/women" data-test-id="menu-link-women">Women</NavLink></li>
        <li className='hover:text-error transition-colors duration-500'><NavLink to="/training-shop/men" data-test-id="menu-link-men">Men</NavLink></li>
        <li className='hover:text-error transition-colors duration-500'><a href="beauty">Beauty</a></li>
        <li className='hover:text-error transition-colors duration-500'><a href="accessories">Accessories</a></li>
        <li className='hover:text-error transition-colors duration-500'><a href="blog">Blog</a></li>
        <li className='hover:text-error transition-colors duration-500'><a href="contact">Contact</a></li>
      </ul>

      <ul className='burger relative z-50 lg:hidden w-10 flex flex-col gap-2 cursor-pointer px-1 hover:animate-pulse' 
        onClick={()=>{
          setBurger(!burger)
        }}
        data-test-id='burger-menu-btn'>
        <li className={`h-0.5 bg-dark ${burger ? '-rotate-45 translate-y-[10px]' : ''}`}></li>
        <li className={`h-0.5 ${burger ? 'bg-white' : 'bg-dark'}`}></li>
        <li className={`h-0.5 bg-dark  ${burger ? 'rotate-45 -translate-y-[10px]' : ''} `}></li>
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
