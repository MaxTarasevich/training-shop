import React from 'react'

import FooterCard from './FooterCard'
import SocialLinks from './SocialLinks'

import aes from '../assets/images/footer/AES.png'
import amerExpr from '../assets/images/footer/american-express.png'
import visa from '../assets/images/footer/visa.png'
import stripe from '../assets/images/footer/Stripe.png'
import mastercard from '../assets/images/footer/mastercard.png'
import discover from '../assets/images/footer/discover.png'
import paypal from '../assets/images/footer/paypal.png'


const Footer = () => {
        
    const Categories = ['Men','Women','Accessories','Beauty'] 
    const Information = ['About Us','Contact Us' ,'Blog' ,'FAQs']
    const UsefulLinks = ['Terms & Conditions','Returns & Exchanges' ,'Shipping & Delivery' ,'Privacy Policy']
    const Contacts = ['Belarus, Gomel, Lange 17','+375 29 100 20 30' ,'All week 24/7' ,'info@clevertec.ru' ]

    const handlerSubmit = (e:React.SyntheticEvent) =>{
        e.preventDefault()
    }

  return (
    <footer className='footer' data-test-id="footer">
        
            <div className="footer__subscribe py-3 text-white bg-dark">
                <div className="container flex justify-between items-center text-subtitle">
                
                    <h4 className="footer__subtitle font-semibold uppercase">
                        BE IN TOUCH WITH US:
                    </h4>

                    <form className="footer__form w-[46%] flex justify-between" onSubmit={(e)=>{handlerSubmit(e)}}>
                        <input className='w-[75%] py-2 px-4 bg-[rgba(255,255,255,0.2)]' type="email" name="email" id="email" placeholder='Enter your email' />
                        <button className='py-2 px-6 border-[1px] border-solid border-white font-semibold uppercase' type="submit">Join Us</button>
                    </form>

                    <SocialLinks />

                </div>
            </div>

            <div className="footer__links py-10 text-subtitle text-dark">
                <div className="container flex justify-between">
                  <FooterCard title='Categories' links={Categories}/>
                  <FooterCard title='Information' links={Information} />
                  <FooterCard title='Useful links' links={UsefulLinks}/>
                  <FooterCard title='CONTACT US' links={Contacts} contacts={true} />
                </div>

            </div>

            <div className="footer__info py-3 bg-[#F8F8F8] text-small font-medium text-dark text-opacity-80">
                <div className="container flex justify-between items-center">
                    <div className="footer__copyright ">
                        Copyright © 2032 all rights reserved
                    </div>

                    <ul className="footer__pay flex gap-x-3">
                        <li><a href="1"><img src={stripe} alt="stripe" /></a></li>
                        <li><a href="2"><img src={aes} alt="aes" /></a></li>
                        <li><a href="3"><img src={paypal} alt="paypal" /></a></li>
                        <li><a href="4"><img src={visa} alt="visa" /></a></li>
                        <li><a href="5"><img src={mastercard} alt="matercard" /></a></li>
                        <li><a href="6"><img src={discover} alt="discover" /></a></li>
                        <li><a href="7"><img src={amerExpr} alt="american express" /></a></li>
                    </ul>

                    <div className="footer__company underline">
                        <a href="company">Clevertec.ru/training</a>
                    </div>

                </div>

            </div>

    </footer>
  )
}

export default Footer