import React from 'react'

import Header from "../components/Header";
import Navigation from "../components/Navigation"
import Banner from "../components/Banner";
import Cataloge from "../components/Cataloge";

import womanArr from "../data/women_card";
import manArr from "../data/men_card";
import Advertising from "../components/Advertising";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
     <Header />
     <Navigation />
     <Banner />
     <Cataloge title='WOMEN’S'cardData={womanArr}/>
     <Cataloge title='MEN’S'cardData={manArr}/>
     <Advertising />
     <Blog />
     <Footer />
    </>
  )
}

export default Main