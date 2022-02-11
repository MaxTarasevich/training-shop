import React from 'react';

import Advantage from './Advantage';

import MainBanner from '../assets/images/main__banner.jpg';
import bannerWomen from '../assets/images/main__banner-women.jpg';
import bannerMen from '../assets/images/main__banner-men.jpg';
import bannerAccess from '../assets/images/main__banner-accessories.jpg';

import Arrow from '../SVGcomponent/Arrow';

const Banner = () => {
  return <section className="banner border-y-2 border-solid border-y-gr-white py-8">
      <div className="container flex justify-between">
        <div className="banner__main max-w-[540px] relative">
                <img src={MainBanner} alt="main banner" />

                <div className="banner__title min-w-[53%]">
                    <span className='mb-4 text-subtitle text-dark-shadow'>
                        Banner
                    </span>
                    <h3 className='text-title2'>
                        your Title text 
                    </h3>
                </div>

                <div className="banner__main-arrows rotate-90">
                     <Arrow />
                </div>

                <div className="banner__main-arrows left-6 -rotate-90">
                    <Arrow />
                </div>  
        </div>

        <div className="banner__aside max-w-[540px] flex flex-wrap justify-between">

            <div className='banner__aside-item w-[47%] relative'>
                <div className="banner__title min-w-[118px] py-3 px-6">
                    <h3 className='text-body'>
                        Women
                    </h3>
                </div>
                <img src={bannerWomen} alt="women" />
            </div>
            <div className='banner__aside-item w-[47%] relative'>
                <div className="banner__title min-w-[118px] py-3 px-6">
                    <h3 className='text-body'>
                        men
                    </h3>
                </div> 
                <img src={bannerMen} alt="men" />
            </div>
            <div className='banner__aside-item w-[100%] mt-8 relative'>
                <div className="banner__title py-3 px-6">
                    <h3 className='text-body'>
                        accessories
                    </h3>
                </div>
                <img src={bannerAccess} alt="accessories" />
            </div>
            
        </div>

      </div>

        <Advantage />
  </section>;
};

export default Banner;
