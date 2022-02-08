import React from 'react';

import Facebook from '../SVGcomponent/Facebook'
import Twitter from '../SVGcomponent/Twitter';
import Instagram from '../SVGcomponent/Instagram';
import Pinterest from '../SVGcomponent/Pinterest';

import Phone from '../SVGcomponent/Phone';
import Location from '../SVGcomponent/Location';
import Clock from '../SVGcomponent/Clock';




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
          <ul className="header__social flex space-x-2">
            <li>
              <a href="facebook">
                 <Facebook color='white' width='14px' height='14px'/>
              </a>
            </li>
            <li>
              <a href="twitter">
                <Twitter color='white' width='14px' height='14px'/>
              </a>
            </li>
            <li>
              <a href="insta">
                <Instagram color='white' width='14px' height='14px'/>
              </a>
            </li>
            <li>
              <a href="pinterest">
                <Pinterest color='white' width='14px' height='14px'/>
              </a>
              </li>
          </ul>

      </div>
  </header>;
};

export default Header;
