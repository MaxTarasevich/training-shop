import React from 'react'
import Cards from '../components/Cards'
import Filter from '../components/Filter'
import Panel from '../components/Panel'

import products from "../data/products"

const MenPage = () => {
  return (
    <> 
     <Panel title='men' path='/training-shop/men'/>
     <Filter />
     <Cards cardData={products.men} />
    </>
   
  )
}

export default MenPage