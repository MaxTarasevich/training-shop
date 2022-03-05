import React, { FC } from 'react'

import Card from './Card';
import Loading from '../assets/images/Square-Loading.png'

interface  CardsProps {
    cardData:any;
}

const Cards: FC<CardsProps> = ({cardData}) => {
  return (
    <section className='cards'>
        <div className="container flex flex-wrap lg:justify-between justify-center gap-7 pb-12">
            {
                cardData.map((i:any, index: React.Key | null | undefined) => {
                    return <Card image={`https://training.cleverland.by/shop${i.images[0].url}`} key={index} title={i.name} price={i.price} rate={i.rating} />
                })
            }
        </div>
        <div className="cards__loader pb-20">
            <img className='mx-auto' src={Loading} alt="loading" />
        </div>
    </section>
  )
}

export default Cards