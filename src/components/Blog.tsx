import React from 'react'

import BlogCard from './BlogCard'

import img1 from '../assets/images/Blog/1.jpg'
import img2 from '../assets/images/Blog/2.jpg'
import img3 from '../assets/images/Blog/3.jpg'

const Blog = () => {
  return (
    <section className='blog pb-24'>
        <div className="container">
            <div className="blog__menu flex items-center justify-between pb-12 uppercase">
                <h3 className="blog__title text-title2 font-semibold">
                    LATEST from BLOG
                </h3>
                <a href="blog" className="blog__button font-medium text-subtitle text-dark text-opacity-60">SEE ALL</a>
            </div>
            <div className="blog__cards flex lg:justify-between justify-center gap-x-8 flex-wrap">
                <BlogCard image={img1} title={'The Easiest Way to Break'} text={'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor'} />
                <BlogCard image={img2} title={'Wedding Season '} text={'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor'} />
                <BlogCard image={img3} title={'Recent Favorites On Repeat'} text={'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor'} />
            </div>
        </div>

    </section>
  )
}

export default Blog