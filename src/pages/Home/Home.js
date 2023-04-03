import React, { Fragment } from 'react';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Index() {
  return (
    <Fragment>

      <div className="homepage">
      <div className="banner">
        <h1>Welcome to Our Store</h1>
        <p>Find the Best Deals on High-Quality Products.</p>
      </div>
      <div className="img">
      <a href='/product'>
        <img src="HOMEBANNER.png" alt="img" className="img-thumbnail rounded" />
        </a>
      </div>
        </div>



        <div className="categories">
        <h1>Shop by Category</h1>
        <div className="slider">
          
      <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}>
    <div>
      <a href='/product'>
        <img src="sale banner.png" alt="Slider" />
      </a>
    </div>
    <div>
      <a href='/tennis'>
        <img src="tennis banner.png" alt="Slider" />
      </a>
    </div>
    <div>
      <a href='/football'>
        <img src="football banner.png" alt="Slider" />
      </a>
    </div>
    <div>
      <a href='/climbing'>
        <img src="climbing banner.png" alt="Slider" />
      </a>
    </div>
    <div>
      <a href='/running'>
        <img src="runner banner.png" alt="Slider" />
      </a>
    </div>
    <div>
      <a href='/hiking'>
        <img src="hiking banner.png" alt="Slider" />
      </a>
    </div>
  </Slider>
</div>
</div>

      <section className="product">
        <h1 className="product-category">Featured Products</h1>
        <div className="product-container">

          <div className="product-card">
            <div className="product-image">
              <img src="https://www.dropbox.com/s/3kzp8i7ucuxz7ec/SALOMON%20X%20Ultra%204%20Mid%20GORE-TEX%20Men%20Hiking%20Boots%201.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Hiking Shoe</h2>
              <p className="product-short-des">SALOMON X Ultra 4 Mid GORE-TEX Men Hiking Boots</p>
              <span className="price">£150</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://www.dropbox.com/s/kit6oqc5s8htzrh/Nike%20Court%20Air%20Zoom%20GP%20Turbo%20HC%20%27Coconut%20Milk%20Team%20Orange%20Black%27%20DZ3362-100%201.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h1 className="product-brand">Tennis shoe</h1>
              <p className="product-short-des">Nike Court Air Zoom GP Turbo HC 'Coconut Milk Team Orange Black'</p>
              <span className="price">£150</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://www.dropbox.com/s/6usf57b1hzed2bw/Nike%20Air%20Zoom%20Pegasus%2039%20Running%20Shoes%20%202.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Running shoe</h2>
              <p className="product-short-des">Nike Air Zoom Pegasus 39 Running Shoes</p>
              <span className="price">£120</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://www.dropbox.com/s/y3w2kzdswi1dm77/La%20Sportiva%20%20Product%20Name-%20Tarantulace%20Climbing%20Shoes%201.jpeg?dl=0&raw=1"className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Climbing Shoe</h2>
              <p className="product-short-des">La Sportiva Tarantulace Climbing Shoes </p>
              <span className="price">£75</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://www.dropbox.com/s/qy1higlma9buuse/X%20Speedportal.3%20Firm%20Ground%20Boots%201.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Football Shoe</h2>
              <p className="product-short-des">X Speedportal.3 Firm Ground Boots</p>
              <span className="price">£100</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://www.dropbox.com/s/cgsceqmvzqevt5d/%20Arc%27teryx%20Aerios%20FL%20GTX%20Hiking%20Shoes%20%201.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Hikinh Shoe</h2>
              <p className="product-short-des">Arc'teryx Aerios FL GTX Hiking Shoes </p>
              <span className="price">£170</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product">
        <h2 className="product-category">Sales</h2>
        <div className="product-container">

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">35% off</span>
              <img src="https://www.dropbox.com/s/o76aw00deiwdkcj/Vasque%20Breeze%20III%20GTX%20Hiking%20Boots%203.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Hiking Shoe</h2>
              <p className="product-short-des">Vasque Breeze III GTX Hiking Boots </p>
              <span className="price">£110.50</span><span className="actual-price">£170</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">30% off</span>
              <img src="https://www.dropbox.com/s/guxw96kf0ct9xw3/New%20Balance%20Fresh%20Foam%20Lav%20Tennis%20Shoes%202.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Tennis shoe</h2>
              <p className="product-short-des">New Balance Fresh Foam Lav Tennis Shoes </p>
              <span className="price">£70</span><span className="actual-price">£100</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">15% off</span>
              <img src="https://www.dropbox.com/s/0f3ncmu48vntut2/Brooks%20Product%20Name-%20Ghost%2014%20Running%20Shoes%201.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Running shoe</h2>
              <p className="product-short-des">Brooks Ghost 14 Running Shoes</p>
              <span className="price">£110.50</span><span className="actual-price">£130</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">10% off</span>
              <img src="https://www.dropbox.com/s/fqkzmq2dh7g00pc/Mizuno%20Wave%20Exceed%20Tour%205%20All%20Court%20Tennis%20Shoes%20-%20AW22%20%203.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Tennis Shoe</h2>
              <p className="product-short-des">Mizuno Wave Exceed Tour AW22 All Court Tennis Shoes </p>
              <span className="price">£72</span><span className="actual-price">£80</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">15% off</span>
              <img src="https://www.dropbox.com/s/x9kfdwjrnwffkx9/Tenaya%20Iati%20Climbing%20Shoes%201.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Climbing Shoe</h2>
              <p className="product-short-des">Tenaya Iati Climbing Shoes</p>
              <span className="price">£153</span><span className="actual-price">£180</span>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">10% off</span>
              <img src="https://www.dropbox.com/s/at6ls0noiafounv/%20Under%20Armour%20CoreSpeed%20Frce%20Sn99%202.jpeg?dl=0&raw=1" className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">Football Shoe</h2>
              <p className="product-short-des">A short line about the shoe...</p>
              <span className="price">£103.50</span><span className="actual-price">£115</span>
            </div>
          </div>
        </div>
      </section>

      <div className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review-list">
          <div className="review-item">
            <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
            <p>"I love this website! They have the best selection and the prices are unbeatable."</p>
          </div>
          <div className="review-item">
        <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
        <p>"I'm always impressed with their quality and customer service."</p>
      </div>
      <div className="review-item">
        <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
        <p>"This is my go-to website for all my fashion needs. The variety of styles and sizes is amazing!"</p>
      </div>
     < div className="review-item">
        <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
        <p>"This website is fantastic! They have such a wide range of products that I always find what I'm looking for."</p>
      </div>
      < div className="review-item">
        <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
        <p>"The prices are unbeatable and the products are of high-quality. I highly recommend this website."</p>
      </div>
  </div>
  </div>

  <div className="reviews">
        <div className="review-list">
          <div className="review-item">
            <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
            <p>"The selection is unbeatable and the prices are amazing. I can always find what I want and need at affordable prices."</p>
          </div>
          <div className="review-item">
        <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
        <p>"I am very happy with the quality of the products and the excellent customer service provided by this website. They make shopping online a breeze!"</p>
      </div>
      <div className="review-item">
        <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
        <p>"This website is my absolute favorite for fashion. They have an incredible range of styles and sizes to choose from, and I always find something that fits my taste and budget."</p>
      </div>
     < div className="review-item">
        <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
        <p>"I am consistently impressed by the variety of products available on this website. They have everything I need, and the prices are hard to beat. I would definitely recommend this site to anyone looking for quality and affordability."</p>
      </div>
      < div className="review-item">
        <img src="ICON.jpg" alt="Customer" className="img-thumbnail rounded" />
        <p>"I cannot recommend this website enough! Their products are of the highest quality, and the prices are unbeatable. If you're looking for a reliable and affordable shopping experience, this is the site for you!"</p>
      </div>
  </div>
  </div>


    </Fragment>
  );
}

export default Index;