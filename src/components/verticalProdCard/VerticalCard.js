import React from "react";
import "./VerticalCard.css";
import sampleImage from '../../assets/tanjuroFig.webp';

const VerticalCard = ({product}) => {
  return (
    <div class="card-inner-body">
      <div class="img-body">
        <img id="card-img" src={product.imageSource} alt="" />
        <span class="label-badge" id="label-badge">
          Trending
        </span>
        <button class="dismiss">
          <i class="fas fa-heart fa-lg"></i>
        </button>
      </div>

      <div class="card-info flex">
        <span class="card-title">{product.title}</span> <br />
        <small class="card-rating" id="card-rating">
          <i class="fas fa-star"></i> {product.rating}
        </small>
        <div class="price-wishlist flex">
          <span class="current-price">₹{product.price}</span>
          <small class="previous-price">₹2000</small>
          <small class="discount">{product.discount}% off</small>
        </div>
        <button class="btn info-btn btn-wishlist">
            Add to Cart
          </button>
      </div>
    </div>
  );
};

export default VerticalCard;
