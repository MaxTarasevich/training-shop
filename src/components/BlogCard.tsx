import React, { FC } from 'react'

interface BlogCardProps {
    image:string;
    title:string;
    text:string;
}

const BlogCard: FC<BlogCardProps> = ({image, title, text}) => {
  return (
    <div className='blog__card lg:max-w-[350px] max-w-[300px]'>

        <img className='w-full' src={image} alt={title} />

        <div className="blog__content max-w-[86%] relative left-[7%] bottom-[12%] bg-white text-dark px-4 ">
            <h4 className="blog__subtitle pt-6 font-semibold text-title4 uppercase">
                {title}
            </h4>
            <p className="blog__text py-3 text-title4 font-normal text-dark text-opacity-80">
                {text}
            </p>
        </div>

    </div>
  )
}

export default BlogCard