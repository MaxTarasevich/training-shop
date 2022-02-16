import React from 'react'
import Arrow from '../SVGcomponent/Arrow'

import preview1 from '../assets/images/productCard/preview1.jpg'
import main from '../assets/images/productCard/main.jpg'

import color1 from '../assets/images/productCard/color1.jpg'
import color2 from '../assets/images/productCard/color2.jpg'
import color3 from '../assets/images/productCard/color3.jpg'
import color4 from '../assets/images/productCard/color4.jpg'
import Hanger from '../SVGcomponent/Hanger'
import Scales from '../SVGcomponent/Scales'
import Heart from '../SVGcomponent/Heart'
import Mail from '../SVGcomponent/Mail'
import Truck from '../SVGcomponent/Truck'
import Refresh from '../SVGcomponent/Refresh'

import pay1 from '../assets/images/productCard/pay1.png'
import pay2 from '../assets/images/productCard/pay2.png'
import pay3 from '../assets/images/productCard/pay3.png'
import pay4 from '../assets/images/productCard/pay4.png'
import pay5 from '../assets/images/productCard/pay5.png'
import pay6 from '../assets/images/productCard/pay6.png'
import pay7 from '../assets/images/productCard/pay7.png'
import Star from '../SVGcomponent/Star'

const ProductCard = () => {
  return (
    <section className='productCard pt-8'>
        <div className="container flex justify-between gap-x-8">
            <div className="productCard__slider flex gap-x-4">
                <div className="productCard__preview flex flex-col gap-y-4">
                    <div className="preview__control flex justify-between items-center">
                        <div className='cursor-pointer'> <Arrow /></div>
                        <div className='rotate-180 cursor-pointer'> <Arrow /></div>
                       
                    </div>      
                
                    <img src={preview1} alt="preview" />
                    <img src={preview1} alt="preview" />
                    <img src={preview1} alt="preview" />
                    <img src={preview1} alt="preview" />
                   

                </div>
                <div className="productCard__image w-[448px] relative">
                    <div className="productCard__control-main left-4 -rotate-90">
                        <Arrow />
                    </div>
                    <div className="productCard__control-main right-4 rotate-90 ">
                        <Arrow />
                    </div>   
                    <img className='w-full' src={main} alt="preview" />
                </div>

            </div>

            <div className="productCard__info min-w-[46%] text-dark">
                <div className="properties">

                    <div className="properties__color">
                        <h3 className="properties__color-title font-semibold text-subtitle text-dark text-opacity-60 uppercase">
                        Color:  <span className='text-dark text-opacity-100 capitalize'>Blue</span>
                        </h3>
                        <div className="properties__color-items py-4 flex gap-x-4">
                            <img src={color1} alt="color variant" />
                            <img src={color2} alt="color variant" />
                            <img src={color3} alt="color variant" />
                            <img src={color4} alt="color variant" />
                        </div>
                    </div>

                    <div className="properties__size py-4">
                        <h3 className="properties__size-title font-semibold text-subtitle text-dark text-opacity-60 uppercase">
                            Size: <span className='text-dark text-opacity-100 capitalize'>S</span>
                        </h3>
                        <div className="size__items flex gap-x-4 font-semibold text-subtitle text-dark text-opacity-70">
                            <div className="size__item">XS</div>
                            <div className="size__item text-dark text-opacity-100">S</div>
                            <div className="size__item">M</div>
                            <div className="size__item">L</div>
                        </div>
                        <div className="size__subtitle flex gap-x-2 text-dark opacity-60 font-medium text-subtitle">
                           <Hanger /> <span>Size guide</span> 
                        </div>
                    </div>

                </div>

                <div className="payment mt-8 py-8 flex items-center gap-x-4 border-solid border-t-2 border-b-2 border-[#E5E5E5]">
                    <div className="payment__price mr-2 text-title2 font-bold text-dark">
                        $ 379.99
                    </div>
                        
                    <button className='payment__button py-4 px-6 bg-dark text-button text-white text-opacity-90 uppercase'>
                            Add to card
                    </button>

                    <div className="payment__icon cursor-pointer">
                        <Heart />
                    </div>
                    <div className="payment__icon cursor-pointer">
                        <Scales />
                    </div>

                </div>

                <div className="advantages flex items-center gap-x-7 pt-9 pb-8">
                    <div className="advantage opacity-60 text-subtitle font-medium flex items-center gap-x-2 cursor-pointer">
                        <div className="advantage__icon">
                            <Truck />
                        </div>
                        <div className="advantage__text">
                            Shipping &amp; Delivery
                        </div>
                    </div>

                    <div className="advantage opacity-60 text-subtitle font-medium flex items-center gap-x-2 cursor-pointer">
                        <div className="advantage__icon">
                            <Refresh />
                        </div>
                        <div className="advantage__text">
                            Returns &amp; Exchanges
                        </div>
                    </div>

                    <div className="advantage opacity-60 text-subtitle font-medium flex items-center gap-x-2 cursor-pointer">
                        <div className="advantage__icon">
                            <Mail />
                        </div>
                        <div className="advantage__text">
                            Ask a question
                        </div>
                    </div>

                </div>

                <div className="paycards">
                    <div className="paycards__title flex justify-between items-center gap-x-6 font-semibold text-dark text-subtitle uppercase tracking-wider">
                        guaranteed safe checkout
                        <span className="w-[50%] h-0.5 bg-[#E5E5E5]"></span>
                    </div>
                    <div className="paycards__items pt-6 pb-8 flex gap-x-4 justify-between items-center">
                        <img src={pay1} alt="card" />
                        <img src={pay2} alt="card" />
                        <img src={pay3} alt="card" />
                        <img src={pay4} alt="card" />
                        <img src={pay5} alt="card" />
                        <img src={pay6} alt="card" />
                        <img src={pay7} alt="card" />
                    </div>


                </div>
                <div className="descriptions">
                    <div className="descriptions__title py-8 text-subtitle text-dark text-opacity-60 font-semibold border-solid border-t-2 border-b-2 border-[#E5E5E5] uppercase">
                        DESCRIPTION
                    </div>
                    <div className="descriptions__info pb-5">
                        <div className="descriptions__subbtitle py-8 text-subtitle font-semibold text-dark uppercase">
                            ADDITIONAL INFORMATION
                        </div>
                        <div className="description__item mb-3 text-title4 text-dark text-opacity-60">
                            <span className='text-dark text-opacity-100 font-medium'>Color:</span> Blue, White, Black, Grey
                        </div>  

                        <div className="description__item mb-3 text-title4 text-dark text-opacity-60">
                            <span className='text-dark text-opacity-100 font-medium'>Size:</span> XS, S, M, L
                        </div>  

                        <div className="description__item mb-3 text-title4 text-dark text-opacity-60">
                            <span className='text-dark text-opacity-100 font-medium'>Material:</span> 	100% Polyester
                        </div>  
                       
                    </div>


                </div>
                <div className="reviews  py-8 text-subtitle text-dark font-semibold border-solid border-t-2 border-b-2 border-[#E5E5E5]">
                    <div className="reviews__title mb-8 uppercase">
                        REVIEWS
                    </div>

                    <div className="reviews__info pb-6 flex justify-between text-dark text-opacity-60 text-small">
                        <div className="reviews__stars flex items-start gap-x-1 ">
                            <Star width={16}/>
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <span>2 Reviews</span>
                        </div>
                        <div className="reviews__wright">
                            Write a review
                        </div>
                    </div>

                    <div className="reviews__items">

                        <div className="reviews__item mb-9">
                            <div className="reviews__item-header flex justify-between items-center">
                                <div className="reviews__item-user text-title4 text-dark font-medium ">
                                    Oleh Chabanov
                                </div>
                                <div className="reviews__item-rate flex gap-x-1">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className="reviews__item-body py-3 font-normal text-body text-dark text-opacity-80">
                                On the other hand, we denounce with righteous indignation and like men who are so beguiled and 
                                demoralized by the charms of pleasure of the moment
                            </div>
                        </div>

                        <div className="reviews__item">
                            <div className="reviews__item-header flex justify-between items-center">
                                <div className="reviews__item-user text-title4 text-dark font-medium ">
                                    ShAmAn design
                                </div>
                                <div className="reviews__item-rate flex gap-x-1">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>

                            <div className="reviews__item-body py-3 font-normal text-body text-dark text-opacity-80">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>

    </section>
  )
}

export default ProductCard