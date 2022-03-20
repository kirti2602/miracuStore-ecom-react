import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer"

const Main = () => {
  return (
    <main class="main">
            <img src= {require('../../assets/hero.jpg')} alt="" className="hero-img" />
            <div class="text-on-hero">
                <h1>All sorts of cool and funky Anime Merch available</h1>
                <h2>Get merch of your favourite anime/character at most resonable price</h2>
                
                <button class="btn info-btn link-btn"><a class="link-btn" href="productListing/productListing.html">Shop Now</a></button>
              
            </div>
        </main>
  )
}


const HomePage = () => {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
};

export default HomePage;
