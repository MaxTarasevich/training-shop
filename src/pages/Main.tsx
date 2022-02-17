import React from 'react'

import Banner from "../components/Banner";
import Cataloge from "../components/Cataloge";

import womanArr from "../data/women_card";
import manArr from "../data/men_card";
import Advertising from "../components/Advertising";
import Blog from "../components/Blog";

const Main = () => {
  return (
    <>
     <Banner />
     <Cataloge title='WOMEN’S'cardData={womanArr} test="women"/>
     <Cataloge title='MEN’S'cardData={manArr} test="men"/>
     <Advertising />
     <Blog />
    </>
  )
}

export default Main