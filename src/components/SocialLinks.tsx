import React from 'react';


import Facebook from '../SVGcomponent/Facebook'
import Twitter from '../SVGcomponent/Twitter';
import Instagram from '../SVGcomponent/Instagram';
import Pinterest from '../SVGcomponent/Pinterest';

const SocialLinks = () => {
  return (
    <ul className="social flex space-x-2">
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
  )
}

export default SocialLinks