import React from 'react';

import Star from '../SVGcomponent/Star'

interface CardProps {
    image:string;
    title:string;
    price:string;
    rate:number;
}

const Card:React.FC<CardProps> = ({image, title, price, rate}) => {

let stars:number[] = []
while (rate) {
    stars.push(rate)
    rate--
}

  return <a className='card block text-body' href='card'>
        <div className="card__image">
            <img src={image} alt="" />
        </div>
        <h4 className="card__title pt-4 font-normal opacity-60">
            {title}
        </h4>
        <div className="card__content flex justify-between pt-3">
            <div className="card__price font-bold">
                {price}
            </div>
            <div className="card__rate flex">
               {stars.map((i:number) => {
                   return <Star key={i} />
               })}
            </div>
        </div>

  </a>;
};

export default Card;
