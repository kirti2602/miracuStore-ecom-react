import React from 'react';
// import './ProductListing.css';
import NavBar from '../../components/navbar/NavBar';
import FilterBy from '../../components/filter/FilterBy';
import ProductsContainer from './productsContainer/ProductsContainer.js'
import Footer from '../../components/footer/Footer'

const ProductListing = () => {
  return (
    <section className='homepage'>
      <NavBar />
      <FilterBy />
      <ProductsContainer  />
      <Footer />
    </section>
  )
}

export default ProductListing