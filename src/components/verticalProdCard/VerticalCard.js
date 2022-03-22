import React from "react";
import "./VerticalCard.css";

const VerticalCard = ({product}) => {

  const {
    _id,
    imageSource,
    title,
    price,
    rating,
    discount
  } = product;

  return (
    <div class="card-inner-body">
      <div class="img-body">
        <img id="card-img" src={imageSource} alt="" />
        <span class="label-badge" id="label-badge">
          Trending
        </span>
        <button class="dismiss">
          <i class="fas fa-heart fa-lg"></i>
        </button>
      </div>

      <div class="card-info flex">
        <span class="card-title">{title}</span> <br />
        <small class="card-rating" id="card-rating">
          <i class="fas fa-star"></i> {rating}
        </small>
        <div class="price-wishlist flex">
          <span class="current-price">₹{price}</span>
          <small class="previous-price">₹2000</small>
          <small class="discount">{discount}% off</small>
        </div>
        <button class="btn btn-wishlist info-btn ">
            Add to Cart
          </button>
      </div>
    </div>
  );
};

export default VerticalCard;
