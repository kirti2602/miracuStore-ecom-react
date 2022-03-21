import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../ProductListing.css';
import VerticalCard from '../../../components/verticalProdCard/VerticalCard';

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      (async () => {
        try {
          const {
            data: { products },
          } = await axios.get("/api/products");
          setProducts(products);
        } catch (error) {
          console.log("No products to show.");
        }
      })();
    }, []);
    <h2>Showing All Products</h2>

  return (
    <main className="main flex">
      {products.map((product) => (
        <div class="wishlist-container">
                <div class="card-outer-body">
                    <VerticalCard product = {product} />
                </div>
                </div>
      ))}
    </main>
  )
}

export default ProductsContainer;