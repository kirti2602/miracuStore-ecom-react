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
    <div className="card-inner-body">
      <div className="img-body">
        <img id="card-img" src={imageSource} alt="" />
        <span className="label-badge" id="label-badge">
          Trending
        </span>
        <button className="dismiss">
          <i className="fas fa-heart fa-lg"></i>
        </button>
      </div>

      <div className="card-info flex">
        <span className="card-title">{title}</span> <br />
        <small className="card-rating" id="card-rating">
          <i className="fas fa-star"></i> {rating}
        </small>
        <div className="price-wishlist flex">
          <span className="current-price">₹{price}</span>
          <small className="previous-price">₹2000</small>
          <small className="discount">{discount}% off</small>
        </div>
        <button className="btn btn-wishlist info-btn ">
            Add to Cart
          </button>
      </div>
    </div>
  );
};

export default VerticalCard;
