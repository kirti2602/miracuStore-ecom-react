import React from "react";

const FilterBy = () => {
  return (
    <aside className="aside">
      <div className="filter">
        <strong>Filters</strong>
        <a href="">Clear</a>
      </div>

      <div className="slider-price">
        <strong>Price</strong>

        <div className="slidecontainer">
          <span>100</span>
          <input
            type="range"
            min="100"
            max="1000"
            defaultValue="50"
            className="slider"
            id="myRange"
          />
          <span>1000</span>
        </div>
      </div>

      <div className="category">
        <strong>Category</strong>
        <div className="">
          <input type="checkbox" />
          Mugs
        </div>

        <div className="">
          <input type="checkbox" />
          Action Figures
        </div>
      </div>

      <div className="rating">
        <strong>Ratings</strong>

        <span>
          <input type="radio" name="4star" /> 4 Star & above
        </span>

        <span>
          <input type="radio" name="4star" /> 3 Star & above
        </span>

        <span>
          <input type="radio" name="4star" /> 2 Star & above
        </span>

        <span>
          <input type="radio" name="4star" /> 1 Star & above
        </span>
      </div>

      <div className="sort-by">
        <strong>Sort by</strong>
        <span>
          <input type="radio" name="sort" /> Price-Low to high
        </span>

        <span>
          <input type="radio" name="sort" /> Price-High to low
        </span>

        <span>
          <input type="radio" name="sort" /> Discount
        </span>

        <span>
          <input type="radio" name="sort" /> Popularity
        </span>
      </div>
    </aside>
  );
};

export default FilterBy;
