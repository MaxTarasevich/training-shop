import React, { useState } from 'react';

import Card from './Card';

interface CatalogeProps {
    title:string;
    cardData:any;
    test?:string;
}

const Cataloge:React.FC<CatalogeProps> = ({title, cardData, test}) => {

    const [filter,setFilter] = useState([])

   console.log(cardData.filter((i:any)=> i.particulars.isNewArrivals))
  return <section className='catalog md:pt-24 pt-10'>
      <div className="container">

          <div className="catalog__nav pb-12 flex sm:justify-between items-center flex-wrap justify-center gap-y-2">
            <h3 className='font-semibold text-title2 tracking-wider'>
                {title}
            </h3>

            <ul onClick={(e: React.MouseEvent)=>{
                const target = e.target as Element

                if(target.parentNode?.children.length){
                    for(let i = 0 ; i < target.parentNode?.children.length; i++){
                        target.parentNode?.children[i].classList.remove('clicked')
                      }
                }
             
                target.classList.add('clicked')
               
            }}
             className="cataloge__list flex sm:justify-between sm:gap-x-8 flex-wrap justify-center gap-3 text-subtitle tracking-wider text-opacity-60">
                <li className='cursor-pointer' onClick={(e:React.MouseEvent<HTMLElement>)=>{
                    setFilter(cardData.filter((i:any)=> i.particulars.isNewArrivals))
                }} 
                >NEW ARRIVALS</li>
                <li className='cursor-pointer' onClick={()=>{
                    setFilter(cardData.filter((i:any)=> i.particulars.isSpecial))
                }}>SPECIALS</li>
                <li className='cursor-pointer' onClick={()=>{
                    setFilter(cardData.filter((i:any)=> i.particulars.isBestseller))
                }}>BESTSELLERS</li>
                <li className='cursor-pointer' onClick={()=>{
                    setFilter(cardData.filter((i:any)=> i.particulars.isMostViewed))
                }}>MOST VIEWED</li>
                <li className='cursor-pointer' onClick={()=>{
                    setFilter(cardData.filter((i:any)=> i.particulars.isFeatured))
                }}>FEATURED PRODUCTS</li>
            </ul>
          </div>

          <div className="catalog__cards flex flex-wrap xl:justify-between justify-center gap-7">

              
          
           {filter.length > 0 ? filter.map((i:any ,index: React.Key | null | undefined) => {
               return <Card image={`https://training.cleverland.by/shop${i.images[0].url}`} key={index} title={i.name} price={i.price} rate={i.rating} dataTest={test}/>
           })
           :cardData.map((i:any ,index: React.Key | null | undefined) => {
               return <Card image={`https://training.cleverland.by/shop${i.images[0].url}`} key={index} title={i.name} price={i.price} rate={i.rating} dataTest={test}/>
           })
           }
           
          </div>

          <div className="catalog__all mt-12">
              <button onClick={()=>{setFilter([])}} className='bg-gr-white w-full py-4 text-button font-medium text-dark text-opacity-80 uppercase'>
              See All
              </button>
          </div>

      </div>
  </section>;
};

export default Cataloge;
