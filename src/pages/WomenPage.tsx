import React from 'react'
import Cards from '../components/Cards'
import Filter from '../components/Filter'
import Panel from '../components/Panel'

import products from "../data/products"


const WomenPage = () => {
  return (
    <> 
    <Panel title='Women' path='/training-shop/women'/>
    <Filter />
    <Cards cardData={products.women} />
    </>
   
  )
}

export default WomenPage