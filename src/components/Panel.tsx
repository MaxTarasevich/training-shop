import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Triangle from '../SVGcomponent/Triangle'
import Share from '../SVGcomponent/Share'

interface PanelProps{
    title:string;
    path:string;
}

const Panel :FC<PanelProps> = ({title, path}) => {
  return (
    <section className='panel bg-gr-white pt-2 pb-6 font-medium text-dark text-small'>
        <div className="container">
            <div className='flex justify-between items-center'>
                <div className='panel__links flex items-center gap-x-2'> 
                    <Link className='text-dark text-opacity-80' to="/training-shop">Home</Link>
                    <Triangle />
                    <Link className='capitalize' to={path}>{title}</Link>
                </div>

                <div className='panel__share'>
                    <a className='flex items-center gap-x-2 opacity-60' href="share">
                        <Share width='14px' height='14px' />
                        <span>Share</span>
                    </a>
                </div>
            </div>

            <h2 className="panel__title text-title1 font-semibold tracking-wider text-center uppercase">
                {title}
            </h2>
               
               

           
        </div>
    </section>
  )
}

export default Panel