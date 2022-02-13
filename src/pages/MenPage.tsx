import React from 'react'
import Cards from '../components/Cards'
import Filter from '../components/Filter'
import Panel from '../components/Panel'

import data from '../data/men_card'

const MenPage = () => {
  return (
    <> 
     <Panel title='men' path='/training-shop/men'/>
     <Filter />
     <Cards cardData={data} />
    </>
   
  )
}

export default MenPage