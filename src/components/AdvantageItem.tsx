import React from 'react';

interface AdvantageProps{
    title:string;
    text:string;
    icon:string;
}

const AdvantageItem:React.FC<AdvantageProps> = ({text, title, icon}) => {

  

  return  <div className="advantage__item flex items-center text-dark">

    <div className="advantage__item-icon w-[30px] mr-2">
      <img className='object-cover w-full' src={icon} alt="icon" />
    </div>
    <div className='text-subtitle'>
      <h3 className="advantage__item-title font-semibold">
      {title}
      </h3>
      <p className="advantage__item-text opacity-90">
      {text}
      </p>
    </div>
    

</div>;
};

export default AdvantageItem;
