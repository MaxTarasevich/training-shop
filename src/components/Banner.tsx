import React from 'react';

import Advantage from './Advantage';

import MainBanner from '../assets/images/main__banner.jpg';
import bannerWomen from '../assets/images/main__banner-women.jpg';
import bannerMen from '../assets/images/main__banner-men.jpg';
import bannerAccess from '../assets/images/main__banner-accessories.jpg';


import MainSlider from './MainSlider';

const Banner = () => {
  return <section className="banner border-y-2 border-solid border-y-gr-white py-8">
      <div className="container flex xl:justify-between justify-center gap-y-3 gap-x-3 flex-wrap">
        
        <MainSlider slides={[MainBanner, bannerMen,bannerWomen,bannerAccess]} />

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
