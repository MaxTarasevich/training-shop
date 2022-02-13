
import React, { FC } from 'react';

import Location from '../SVGcomponent/Location';
import Phone from '../SVGcomponent/Phone';
import Clock from '../SVGcomponent/Clock';
import Mail from '../SVGcomponent/Mail';

interface FooterCardProps {
    title:string;
    links:string[];
    contacts?:boolean;

}

const FooterCard: FC<FooterCardProps> = ({title,links, contacts}) => {
  return (
    <div className="footer__card min-w-[250px]">
        <h3 className="footer__subtitle font-semibold uppercase py-2">
            {title}
        </h3>

        {
            contacts ? <ul>
                <li className='py-2 text-dark text-opacity-80'>
                    <a className='flex items-center' href={links[0]}> 
                        <Location /> 
                        <span className='pl-2'>{links[0]}</span>
                    </a>
                </li>
                <li className='py-2 text-dark text-opacity-80'>
                    <a className='flex items-center' href={links[1]}> 
                        <Phone /> 
                        <span className='pl-2'>{links[1]}</span>
                    </a>
                </li>
                <li className='py-2 text-dark text-opacity-80'>
                    <a className='flex items-center' href={links[2]}> 
                        <Clock /> 
                        <span className='pl-2'>{links[2]}</span>
                    </a>
                </li>
                <li className='py-2 text-dark text-opacity-80'>
                    <a className='flex items-center' href={links[3]}> 
                        <Mail width='13px' height='13px' /> 
                        <span className='pl-2'>{links[3]}</span>
                    </a>
                </li>
               
              
            </ul>
            :<ul className="footer__list">
            {
                links.map((link, index) => {
                    return <li className='py-2 text-dark text-opacity-80' key={index}><a href={link}>{link}</a></li>
                })
            }
        </ul>
        }
        
    </div>
  )
}

export default FooterCard