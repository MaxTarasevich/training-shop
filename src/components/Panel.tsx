import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Triangle from '../SVGcomponent/Triangle'
import Share from '../SVGcomponent/Share'
import Star from '../SVGcomponent/Star'

interface Info{
    star:number;
    reviews:number;
    sku:number;
    availability:string;
  }

interface PanelProps{
    title:string;
    path:string;
    cardInfo?:Info;
}



const Panel :FC<PanelProps> = ({title, path, cardInfo}) => {

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

            {cardInfo ? <ul className="panel__info flex items-center">
                            <li className='flex items-start gap-x-1'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </li>
                            <li className='ml-2'>{cardInfo.reviews} Reviews</li>
                            <li className='ml-auto'>SKU: <span className='font-semibold'>{cardInfo.sku}</span></li>
                            <li className='ml-6'>Availability: <span className='font-semibold'>{cardInfo.availability}</span></li>
                        </ul> :
                         null}
               
               

           
        </div>
    </section>
  )
}

export default Panel