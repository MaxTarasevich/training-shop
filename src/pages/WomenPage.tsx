import React from 'react'
import Cards from '../components/Cards'
import Filter from '../components/Filter'
import Panel from '../components/Panel'

import data from '../data/women_card'


const WomenPage = () => {
  return (
    <> 
    <Panel title='Women' path='/training-shop/women'/>
    <Filter />
    <Cards cardData={data} />
    </>
   
  )
}

export default WomenPage