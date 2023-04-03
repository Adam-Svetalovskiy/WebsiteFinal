import React from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
      <div className="footer__column">
  <ul>
    <li><NavLink className="footer-link" to="/faq">FAQ</NavLink></li>
    <li><a className="footer-link" href="#">Sitemap</a></li>
    <li><a className="footer-link" href="#">Shipping</a></li>
    <li><a className="footer-link" href="#">Returns</a></li>
  </ul>
</div>
<div className="footer__column">
  <ul>
    <li><NavLink className="footer-link" to="/contact">Contact Us</NavLink></li>
    <li><NavLink className="footer-link" to="/about">About Us</NavLink></li>
    
    <li><a className="footer-link" href="#">Privacy Policy</a></li>
    <li><a className="footer-link" href="#">Terms &amp; Conditions</a></li>
  </ul>
</div>

        <div className="footer__social-media">
          <a href="https://www.facebook.com/people/Equip-Footwear/100091188697555/" target="_blank"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/EquipFootwear" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="http://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
        <form className="footer__form">
          <span className="title">Subscribe to our newsletter</span>
          <p className="description"> "Equipping you for every adventure”</p>
          <div className="footer__form-input">
            <input type="email" id="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
      <p className="footer__copy">&copy; 2023 Equip Footwear. All rights reserved.</p>
    </footer>
  );
}

export default Footer;