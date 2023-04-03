import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
  return (
    <section className="section">
        
        <h1 className="title">About Us</h1>
        <div/>
        <p className="subtitle">We are a company dedicated to providing high-quality footwear and customer service.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">

              <img src="ICON updated.png" class="img-fluid rounded" alt="logo"/>

              </div>
            </div>
          </div>
        </div>

      <hr />
      <hr />

        <div className="row">
          <div className="col-md-6">
            <h2 className="title is-4">Our History</h2>
            <p>Founded in 2005, our company has been serving customers for over 15 years. We started out as a small family-owned business and have since grown into a national brand.</p>
          
          
          
          </div>
          
          

          <div className="col-md-6">
            <h2 className="title is-4">Our Mission</h2>
            <p>At Equip Footwear, we believe that everyone deserves access to quality sports footwear that not only enhances performance but also makes a style statement. Our passion for sports and commitment to empowering athletes and enthusiasts of all levels is at the core of our brand.
              We offer a wide range of innovative and functional sports footwear designed to meet the specific demands of various sports, including running, hiking, climbing, tennis, and football. Whether you're a seasoned athlete or just starting, we have the perfect pair of shoes to help you conquer your goals.
              <br></br>
              <br></br>
              
              Our website is designed to provide you with a seamless and enjoyable shopping experience. Explore our extensive collection of sports footwear, read customer reviews, and find the perfect pair to suit your needs. Thank you for choosing Equip Footwear, and we look forward to elevating your sports performance and style.
              </p>
          </div>
         
          
        </div>
    </section>
  );
}

export default About;