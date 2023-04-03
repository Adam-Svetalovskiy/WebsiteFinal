import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProductPage1() {
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
            <a href="Hiking/Product 1/- X Ultra 4 Mid GORE-TEX .jpg" target='blank'><img
              src="Hiking/Product 1/- X Ultra 4 Mid GORE-TEX .jpg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 2.jpg" target='blank'><img
              src="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 2.jpg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 4.jpg" target='blank'><img
              src="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 4.jpg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 5.jpg" target='blank'><img
              src="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 5.jpg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 6.jpg" target='blank'><img
              src="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 6.jpg"
              alt="Shoe"
            /></a>
          </div>
          <div>
            <a href="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 3.jpg" target='_blank'><img
              src="Hiking/Product 1/SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots 3.jpg"
              alt="Shoe"
            /></a>
          </div>
        </Slider>
      </div>
      <div className
="column is-5">
<section className="products-section bg-color-block">
<div id="product-details">
<h1>SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots</h1>
<p className="product-description">
<hr />
These boots are ideal for hiking and backpacking on rough
terrain. They feature Gore-Tex waterproofing technology, a
durable Contragrip outsole, and an EVA midsole for cushioning and
support.
<hr />
</p>
<br />
<ul className="product-features">
<li>- Mens</li>
<li>- Gore-Tex waterproofing technology</li>
<li>- Suitable for experienced hikers</li>
<li>- Available in sizes 5-15 </li>
</ul>
<div id="product-price">£150</div>
<button className="btn btn-primary mb-4" onClick={() => alert("Added to cart!")}>Add to Cart</button>
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

export default ProductPage1;