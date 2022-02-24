import React from 'react'
import Card from './Card'

import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../assets/images/related/1.jpg'
import img2 from '../assets/images/related/2.jpg'
import img3 from '../assets/images/related/3.jpg'
import img4 from '../assets/images/related/4.jpg'

import Arrow from '../SVGcomponent/Arrow'
import { Navigation } from 'swiper';


const RelatedProd = () => {




  return (
    <section className='related pb-24 pt-[104px]'>
        <div  className="container" >

          

            <div className="related__header flex justify-between flex-wrap gap-y-4 mb-12">
                <h2 className="related__title text-dark font-semibold text-title2">
                    RELATED PRODUCTS
                </h2>
                <div className="related__control flex gap-x-4">
                    <div className='related-prev -rotate-90 cursor-pointer'> <Arrow /></div>
                    <div className='related-next rotate-90 cursor-pointer'> <Arrow /></div>
                </div>
            </div>
           
            <Swiper  className='relative' data-test-id='related-slider'
                    modules={[Navigation,]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={
                        {
                            nextEl:'.related-prev',
                            prevEl:'.related-next'
                        }
                    }
                    slidesPerGroup={2} 
                    breakpoints={
                        {
                        320:{
                            slidesPerView:1,
                            slidesPerGroup:1,
                            spaceBetween:0
                        },
                        560:{
                            slidesPerView:2,
                            slidesPerGroup:2,
                            spaceBetween:0
                        },
                        750:{
                            slidesPerView:3,
                            slidesPerGroup:3,
                            spaceBetween:0
                        },
                        1000:{
                            slidesPerView:4,
                            slidesPerGroup:4,
                            spaceBetween:0
                        }
                    }
                    }
            >

                <SwiperSlide >
                    <Card image={img1} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img2} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img3} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img4} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img3} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img4} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img2} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img1} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img4} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img3} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img2} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
                <SwiperSlide>
                    <Card image={img1} title="Women's tracksuit Q109" price='$ 30.00' rate={5} />
                </SwiperSlide>
           
            </Swiper>
            
        </div>

    </section>
  )
}

export default RelatedProd