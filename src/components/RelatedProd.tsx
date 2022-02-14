import React from 'react'
import Card from './Card'

import img1 from '../assets/images/related/1.jpg'
import img2 from '../assets/images/related/2.jpg'
import img3 from '../assets/images/related/3.jpg'
import img4 from '../assets/images/related/4.jpg'

import Arrow from '../SVGcomponent/Arrow'

const RelatedProd = () => {
  return (
    <section className='related pb-24 pt-[104px]'>
        <div className="container">
            <div className="related__header flex justify-between">
                <h2 className="related__title text-dark font-semibold text-title2">
                    RELATED PRODUCTS
                </h2>
                <div className="related__control flex gap-x-4">
                    <div className='-rotate-90'> <Arrow /></div>
                    <div className='rotate-90'> <Arrow /></div>
                </div>
            </div>

            <div className="related__cards flex gap-x-8 justify-between pt-12">
                <Card image={img1} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                <Card image={img2} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                <Card image={img3} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                <Card image={img4} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
            </div>
        </div>

    </section>
  )
}

export default RelatedProd