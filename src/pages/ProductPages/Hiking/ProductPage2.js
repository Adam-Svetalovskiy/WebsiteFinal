import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProductPage2() {
  const [selectedSize, setSelectedSize] = useState("5");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  
  return (
    <div id="product-page" className="columns">
      <div className="column is-7">
        <Slider {...settings}>
          <div>
            <a href="Hiking/Product 2/The North Face Hedgehog Fastpack Hiking Shoes.jpeg" target='blank'><img
              src="Hiking/Product 2/The North Face Hedgehog Fastpack Hiking Shoes.jpeg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Hiking/Product 2/Hedgehog Futurelight Women Hiking Boots 2.jpeg" target='blank'><img
              src="Hiking/Product 2/Hedgehog Futurelight Women Hiking Boots 2.jpeg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Hiking/Product 2/Hedgehog Futurelight Women Hiking Boots 3.jpeg" target='blank'><img
              src="Hiking/Product 2/Hedgehog Futurelight Women Hiking Boots 3.jpeg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Hiking/Product 2/Hedgehog Futurelight Women Hiking Boots 4.jpeg" target='blank'><img
              src="Hiking/Product 2/Hedgehog Futurelight Women Hiking Boots 4.jpeg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Hiking/Product 2/Hedgehog Futurelight Women Hiking Boots 6.jpeg" target='blank'><img
              src="Hiking/Product 2/Hedgehog Futurelight Women Hiking Boots 6.jpeg"
              alt="Shoe"
            /></a>
          </div>
          <div>
          </div>
        </Slider>
      </div>
      <div className
="column is-5">
<section className="products-section bg-color-block">
<div id="product-details">
<h1>The North Face Hedgehog Futurelight Women Hiking Boots</h1>
<p className="product-description">
<hr />
Our Hedgehog Fastpack Hiking Shoes are abrasion-resistant and feature a DryVent™ membrane to keep water out.
The OrthoLite® footbed cushions your feet while the CRADLE™ GUIDE midsole and CRADLE™ heel stability technology provide support on uneven ground. 
The Vibram® XS Trek outsole keeps your footing firm on any terrain.
<hr />
</p>
<br />
<ul className="product-features">
<li>- Womens</li>
<li>- Abrasion-resistant</li>
<li>- The Vibram® XS Trek outsole </li>
<li>- Suitable for all hikers</li>
<li>- Available in sizes 5-15</li>
</ul>
<div id="product-price">£115</div>
<button id="add-to-cart" onClick={() => alert("Added to cart!")}>Add to Cart</button>
<label htmlFor="size-dropdown">Size:</label>
<select name="size-dropdown" id="size-dropdown">
<option value="5">5</option>
<option value="5.5">5.5</option>
<option value="6">6</option>
<option value="6.5">6.5</option>
<option value="7">7</option>
<option value="7.5">7.5</option>
<option value="8">8</option>
<option value="8.5">8.5</option>
<option value="9">9</option>
<option value="9.5">9.5</option>
<option value="10">10</option>
<option value="10.5">10.5</option>
<option value="11">11</option>
<option value="11.5">11.5</option>
<option value="12">12</option>
<option value="12.5">12.5</option>
<option value="13">13</option>
<option value="13.5">13.5</option>
<option value="14">14</option>
<option value="14.5">14.5</option>
</select>
</div>
</section>
</div>
</div>
);
}

export default ProductPage2;