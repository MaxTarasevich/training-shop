import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className='flex justify-center flex-col gap-y-10 items-center h-screen bg-grey-dark text-title font-bold text-dark'>
      <p>Sorry!</p>
      <p>Page Not Found</p>
      <p>
        <Link className='text-error' to="/training-shop">Back to Home page!</Link>
      </p>
      
    </section>
  )
}

export default PageNotFound