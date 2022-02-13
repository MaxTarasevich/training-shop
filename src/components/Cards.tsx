import React, { FC } from 'react'

import Card from './Card';
import Loading from '../assets/images/Square-Loading.png'

interface  CardsProps {
    cardData:string[];
}

const Cards: FC<CardsProps> = ({cardData}) => {
  return (
    <section className='cards'>
        <div className="container flex flex-wrap justify-between gap-7 pb-12">
            {
                cardData.map((card, index) => {
                    return <Card key={index} image={card} title="Women's tracksuit Q109" price='30' rate={5} />
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