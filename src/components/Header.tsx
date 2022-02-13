import React from 'react';

import Phone from '../SVGcomponent/Phone';
import Location from '../SVGcomponent/Location';
import Clock from '../SVGcomponent/Clock';
import SocialLinks from './SocialLinks';




const Header = () => {
  return <header className='header py-1 bg-dark'>
      <div className="container flex justify-between">
          <ul className="header__contacts flex text-white-800 tracking-wide text-small font-medium">
            <li className='mr-8'>
              <a className='flex' href='tel:+375291002030'>
                <Phone/>
                <span className='pl-[10px]'>+375 29 100 20 30</span>
              </a>
            </li>
            <li className='mr-12'>
              <a className='flex' href="location">
                <Location />
                <span className='pl-[10px]'>Belarus, Gomel, Lange 17</span>
              </a>
            </li>
            <li>
              <a className='flex' href="hours">
                <Clock />
                <span className='pl-[10px]'>All week 24/7</span>
              </a>
            </li>

          </ul>
         
         <SocialLinks />

      </div>
  </header>;
};

export default Header;
