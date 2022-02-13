import React, { FC } from 'react'

interface BannerCardProps {
    img:string;
    subtitle?:string;
    title:string;
    warning?:string;

}

const BannerCard: FC<BannerCardProps> = ({img, subtitle, title, warning}) => {
  return (
    <div className="banner__main max-w-[540px] relative">
                <img src={img} alt="main banner" />

                <div className="banner__title min-w-[55%] px-6">
                { subtitle ? <span className='mb-4 text-subtitle text-dark-shadow'>
                                    Banner
                            </span> : null}
                    
                    <h3 className='text-title3 tracking-wider'>
                        {title}
                        {warning ? <span className='text-error'>{warning}</span> : null}
                    </h3>
                </div>

        </div>
  )
}

export default BannerCard