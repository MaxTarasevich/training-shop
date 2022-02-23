import React, { FC, useState } from 'react'
import Arrow from '../SVGcomponent/Arrow'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs} from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'



interface ProductCardSliderProps{
    images:string;
    mainImage:string;
}

const ProductCardSlider: FC<ProductCardSliderProps> = ({images, mainImage}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="productCard__slider flex gap-x-4 lg:flex-nowrap lg:items-start items-center flex-wrap gap-y-6 justify-center" 
    data-test-id='product-slider'>
    <div className="productCard__preview flex md:flex-col flex-wrap justify-center gap-x-4 gap-y-4">
        <div className="preview__control md:flex hidden justify-between items-center">
            <div className='preview__next cursor-pointer'> <Arrow /></div>
            <div className='preview__prev rotate-180 cursor-pointer'> <Arrow /></div>
           
        </div>      
        <Swiper
         modules={[Navigation,Thumbs]}
         spaceBetween={0}
         slidesPerView={4}
         slidesPerGroup={4}
         navigation={
             {
                 nextEl:'.preview__next',
                 prevEl:'.preview__prev'
             }
         } 
         direction={'vertical'}
         watchSlidesProgress 
         onSwiper={setThumbsSwiper} 
         breakpoints={
             { 
                768:{
                direction:'vertical',
                slidesPerView:4,
                slidesPerGroup:4,
                spaceBetween:0
                },
               551:{
                direction:'horizontal',
                slidesPerView:4,
                slidesPerGroup:4,
                spaceBetween:5
               },
               320:{
                direction:'horizontal',
                slidesPerView:3,
                slidesPerGroup:3,
                spaceBetween:5
                },
               
             }
         }
         >
             <SwiperSlide className='cursor-pointer opacity-50'> <img className='preview__image' src={images} alt="preview" /></SwiperSlide>
             <SwiperSlide className='cursor-pointer opacity-50'> <img className='preview__image' src={images} alt="preview" /></SwiperSlide>
             <SwiperSlide className='cursor-pointer opacity-50'> <img className='preview__image' src={images} alt="preview" /></SwiperSlide>
             <SwiperSlide className='cursor-pointer opacity-50'> <img className='preview__image' src={images} alt="preview" /></SwiperSlide>
             <SwiperSlide className='cursor-pointer opacity-50'> <img className='preview__image' src={images} alt="preview" /></SwiperSlide>
             <SwiperSlide className='cursor-pointer opacity-50'> <img className='preview__image' src={images} alt="preview" /></SwiperSlide>
             <SwiperSlide className='cursor-pointer opacity-50'> <img className='preview__image' src={images} alt="preview" /></SwiperSlide>
             <SwiperSlide className='cursor-pointer opacity-50'> <img className='preview__image' src={images} alt="preview" /></SwiperSlide>
         </Swiper>
    

    </div>
    <div className="productCard__image md:w-[448px] w-[300px] relative">
        <div className="productCard__control product-prev left-4 -rotate-90">
            <Arrow />
        </div>
        <div className="productCard__control product-next right-4 rotate-90 ">
            <Arrow />
        </div>   
        
        <Swiper
         modules={[Navigation,Thumbs]}
         spaceBetween={10}
         slidesPerView={1}
         navigation={
             {
                 nextEl:'.product-prev',
                 prevEl:'.product-next'
             }
         }  
         thumbs={{ swiper: thumbsSwiper }}
         >

            <SwiperSlide>
                <img src={mainImage} alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mainImage} alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mainImage} alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mainImage} alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mainImage} alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mainImage} alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mainImage} alt="slider" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mainImage} alt="slider" />
            </SwiperSlide>

        </Swiper>
    </div>

</div>
  )
}

export default ProductCardSlider