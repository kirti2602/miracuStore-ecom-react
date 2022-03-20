import React from "react";
import "./NavBar.css";

/*watch router video and include Routes instead of anchor tags*/

const NavBar = () => {
  return (
    <nav className="navbar box-shadow">
      <h2 className="brand-name flex">
        <a href="index.html">
          <i class="fas fa-shopping-bag"></i>
          miracuStore
        </a>
      </h2>

      <div className="nav-links flex">
        <a href="wishlist/wishlist.html">
          <i class="fas fa-heart"></i>
        </a>
        <a href="cart/cart.html">
          <i class="fas fa-shopping-cart"></i>
        </a>
        <a href="login/login.html">
          <p>Login</p>
        </a>
        <a href="sign up/sign up.html">
          <p>Sign Up</p>
        </a>
        <a href="sign out/sign out.html">
          <p>Sign Out</p>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
