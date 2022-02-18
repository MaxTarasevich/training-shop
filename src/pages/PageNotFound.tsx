import React from 'react'
import { Link } from 'react-router-dom'

import desert from '../assets/images/desert.jpg'

const PageNotFound = () => {
  return (
    <section className={`relative lg:text-title text-title2 font-bold text-dark overflow-hidden`}>
      <div className="container absolute top-0 bottom-0 right-0 left-0 flex justify-start flex-col lg:gap-y-10 gap-y-2 items-center">
        <p className='mt-20'>Sorry!</p>
        <p>Page Not Found</p>
        <p>
          <Link className='text-error' to="/training-shop">Back to Home page!</Link>
        </p>
      </div>
      
      <img className='object-cover object-bottom' src={desert} alt="" />
      
    </section>
  )
}

export default PageNotFound