import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ProductListing.css";
import VerticalCard from "../../../components/verticalProdCard/VerticalCard";

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

  return (
    <div>
      {/* alert container for add to cart */}
      <div className="alert-container success-alert flex">
        <i className="fas fa-check-circle"></i>
        Successfully added to cart!
        <i className="fas fa-times"></i>
      </div>

      <h2 className="wishlist-heading">Showing All Products</h2>

      <main className="main flex">
        {products.map((product) => (
          <div className="wishlist-container">
            <div className="card-outer-body">

              <VerticalCard product={product} />
              
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProductsContainer;
