import React from 'react';

import Card from './Card';

interface CatalogeProps {
    title:string;
    cardData:string[];
    test?:string;
}

const Cataloge:React.FC<CatalogeProps> = ({title, cardData, test}) => {
  return <section className='catalog md:pt-24 pt-10' data-test-id={`clothes-${test}`}>
      <div className="container">

          <div className="catalog__nav pb-12 flex sm:justify-between items-center flex-wrap justify-center gap-y-2">
            <h3 className='font-semibold text-title2 tracking-wider'>
                {title}
            </h3>

            <ul className="cataloge__list flex sm:justify-between sm:gap-x-8 flex-wrap justify-center gap-3 text-subtitle tracking-wider text-opacity-60">
                <li className='text-opacity-100 font-medium'><a href="NEW ARRIVALS">NEW ARRIVALS</a></li>
                <li><a href="BESTSELLERS">SPECIALS</a></li>
                <li><a href="BESTSELLERS">BESTSELLERS</a></li>
                <li><a href="MOST VIEWED">MOST VIEWED</a></li>
                <li><a href="FEATURED PRODUCTS">FEATURED PRODUCTS</a></li>
            </ul>
          </div>

          <div className="catalog__cards flex flex-wrap xl:justify-between justify-center gap-7">
           
           {cardData.map((i,index) => {
               return <Card image={i} key={index} title="Women's tracksuit Q109" price='$ 30.00' rate={5}/>
           })}
          </div>

          <div className="catalog__all mt-12">
              <button className='bg-gr-white w-full py-4 text-button font-medium text-dark text-opacity-80 uppercase'>
              See All
              </button>
          </div>

      </div>
  </section>;
};

export default Cataloge;
