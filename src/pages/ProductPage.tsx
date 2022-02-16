import React from 'react'
import Panel from '../components/Panel'
import ProductCard from '../components/ProductCard'
import RelatedProd from '../components/RelatedProd'

const cardInfo = {
  star:5,
  reviews:2,
  sku:777,
  availability:'In Stock'
}

const ProductPage = () => {
  return (
      <> 
      <Panel title="Women's tracksuit Q109" path='/training-shop/women' cardInfo={cardInfo} />
      <ProductCard />
      <RelatedProd />
      </>
   
  )
}

export default ProductPage