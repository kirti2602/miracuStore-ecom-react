import React from 'react';
import './ProductListing.css';
import NavBar from '../../components/navbar/NavBar';
import FilterBy from '../../components/filter/FilterBy';

const ProductListing = () => {
  return (
    <>
      <NavBar />
      <FilterBy />
    </>
  )
}

export default ProductListing