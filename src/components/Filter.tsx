import React from 'react'

import FilterIcon from '../SVGcomponent/FilterIcon'
import ViewGrid from '../SVGcomponent/ViewGrid'
import ViewList from '../SVGcomponent/ViewList'

const Filter = () => {
  return (
    <section className='filter py-9'>
        <div className="container flex justify-between items-center text-dark">
            <div className="filter__button flex items-center gap-x-4 opacity-60">
                <FilterIcon />
                <span className='text-button  uppercase'>Filter</span>
            </div>
            <div className="filter__views flex gap-x-8">
                <ViewList />
                <ViewGrid />
            </div>
        </div>

    </section>
  )
}

export default Filter