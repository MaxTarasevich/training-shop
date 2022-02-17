import React from 'react';

import TruckImage from '../assets/icons/main/truck.svg';
import Refreshimage from '../assets/icons/main/refresh.svg';
import SupportImage from '../assets/icons/main/support.svg';

import AdvantageItem from './AdvantageItem';


const Advantage = () => {
    
  return <div className='advantage pt-8'>
    <div className="container flex xl:justify-between items-center justify-center gap-4 flex-wrap">

        <AdvantageItem title='FREE SHIPPING' text='On all UA order or order above $100' icon={TruckImage} /> 

        <AdvantageItem title='30 DAYS RETURN' text='Simply return it within 30 days for an exchange' icon={Refreshimage} />

        <AdvantageItem title='SUPPORT 24/7' text='Contact us 24 hours a day, 7 days a week' icon={SupportImage} />

    </div>

  </div>;
};

export default Advantage;
