import React, { FC } from 'react'
import Arrow from '../SVGcomponent/Arrow'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


interface MainSliderProps{
    slides:string[];
}

const MainSlider: FC<MainSliderProps> = ({slides}) => {
  return (
    <div className="banner__main md:max-w-[540px] max-w-[90%] min-h-[490px] relative">
             
                <Swiper
                    className='relative '
                    modules={[Navigation,]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={
                        {
                            nextEl:'.banner__main-arrows-next',
                            prevEl:'.banner__main-arrows-prev'
                        }
                    }
                    
                    >
                        {slides.map((el,index) => {
                            return  <SwiperSlide className='cursor-pointer'
                                        key={index}>
                                        <img className='w-full min-h-[490px] object-cover' src={el} alt="slider" />
                                        <div className="banner__title md:min-w-[53%]  min-w-[90%]">
                                            <span className='mb-4 text-subtitle text-dark-shadow'>
                                                Banner
                                            </span>
                                            <h3 className='text-title2'>
                                                your Title text 
                                            </h3>
                                        </div>

                                    </SwiperSlide>
                        })}

                                    <div className="banner__main-arrows banner__main-arrows-next rotate-90">
                                        <Arrow />
                                    </div>

                                    <div className="banner__main-arrows banner__main-arrows-prev left-6 -rotate-90">
                                        <Arrow />
                                    </div>  
                   
                    
                </Swiper>
        </div>
  )
}

export default MainSlider