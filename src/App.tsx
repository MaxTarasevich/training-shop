import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <main className="App">
      <Header />
      <Navigation />
     
      <Routes>
        <Route path="/training-shop" element={ <Main />} />
        <Route path="/training-shop/men" element={<MenPage />} />
        <Route path="/training-shop/women" element={<WomenPage />} />
        <Route path="/training-shop/product" element={<ProductPage />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
