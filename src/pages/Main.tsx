import React  from 'react'

import Banner from "../components/Banner";
import Cataloge from "../components/Cataloge";


import Advertising from "../components/Advertising";
import Blog from "../components/Blog";

import products from "../data/products"



const Main = () => {
  
console.log(products.women)
 

  return (
    <>
     <Banner />
     <Cataloge title='WOMEN’S'cardData={products.women} test="women"/>
     <Cataloge title='MEN’S'cardData={products.men} test="men"/>
     <Advertising />
     <Blog />
    </>
  )
}

export default Main