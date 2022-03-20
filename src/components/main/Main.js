import React from "react";
import { categories } from "../../backend/db/categories";

const Main = () => {
  return (
    <main className="main">
      <div className="image-text-container">
        <img
          src={require("../../assets/hero.jpg")}
          alt=""
          className="hero-img"
        />
        <div className="text-on-hero">
          <h1>All sorts of cool and funky Anime Merch available</h1>
          <h2>
            Get merch of your favourite anime/character at most resonable price
          </h2>

          <button className="btn info-btn link-btn">
            <a className="link-btn" href="productListing/productListing.html">
              Shop Now
            </a>
          </button>
        </div>
      </div>

      {/*categories card */}
      <h1 className="category-heading">Categories Available</h1>

      <div className="category-cards-container flex">
        {categories.map((category) => {
          return (
            <div className="category-card">
              <img
                className="category-img"
                src={category.imgSource}
                alt={category.imgSource}
              />
              <h1 className="category-text">{category.categoryName}</h1>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
