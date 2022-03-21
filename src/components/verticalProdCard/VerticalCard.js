import React from "react";
import "./VerticalCard.css";
import sampleImage from '../../assets/tanjuroFig.webp';

const VerticalCard = ({product}) => {
  return (
    <div class="card-inner-body">
      <div class="img-body">
        <img id="card-img" src={sampleImage} alt="" />
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
          <i class="fas fa-star"></i> 5
        </small>
        <div class="price-wishlist flex">
          <span class="current-price">₹1079</span>
          <small class="previous-price">₹2000</small>
          <small class="discount">46% off</small>
          <button class=" btn-wishlist">
            <i class="fas fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
