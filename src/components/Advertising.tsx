import React from 'react';

import BannerCard from './BannerCard';

import girl from '../assets/images/banner/banner__girl.jpg';
import girls from '../assets/images/banner/banner__girls.jpg';
import women from '../assets/images/women.png';
import man from '../assets/images/men.png'

const Advertising = () => {
const handlerSubmit = (e:React.SyntheticEvent) =>{
    e.preventDefault()
}

  return (
    <section className='advertising py-24'>
        <div className="advertising__banners">
            <div className="container flex xl:justify-between justify-center flex-wrap gap-y-4 gap-x-4 pb-24">
                <BannerCard img={girl} title='lookbook collection' subtitle='New Season'/>
                <BannerCard img={girls} title='Get UP to ' subtitle='Sale' warning='50% off'/>
            </div>
        </div>

        <div className="advertising__offer bg-gradient-to-b from-grad-top to-grad-bottom py-[60px] relative overflow-hidden">

                <div className="offer__card sm:w-[528px] w-full bg-white pt-20 pb-24 md:px-24 px-4 mx-auto text-center">
                    <div className="offer__card-subtitle text-subtitle opacity-40 uppercase font-semibold">
                         Special Offer
                    </div>
                    <h3 className="offer__card-title text-title1 font-semibold max-w-[285px] mx-auto pt-4 pb-14 uppercase">
                        Subscribe 
                        And&nbsp;<span className='text-error'>Get&nbsp;10% Off </span>
                    </h3>

                    <form className="offer__card-form flex flex-col justify-center max-w-[340px] mx-auto" onSubmit={(e)=>{handlerSubmit(e)}}>
                        <input className='py-6 bg-gr-white text-title3 text-center mb-6 placeholder-shown:text-title3  placeholder-shown:text-dark placeholder-shown:opacity-40 placeholder-shown:text-center' type="text" name="offer" id="offer"  placeholder='Enter your email'/>
                        <button className='py-6 bg-dark text-title3 font-medium text-white text-opacity-90 uppercase' type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="offer__image-women absolute -bottom-10 xl:left-[10%] left-2 hidden md:block">
                        <img src={women} alt="women" />
                    </div>

                <div className="offer__image-men absolute bottom-0 xl:right-[10%] right-2 hidden md:block">
                        <img src={man} alt="man" />
                </div>

        </div>

    </section>
  )
}

export default Advertising