import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot, faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server using an HTTP request
    // Your server-side code should handle email sending
  }

  return (
    <section className="section">
        <h1 className="title">Contact Us</h1>
        <br> 
        
        </br>
        <form onSubmit={handleSubmit}>
          <div className="columns">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-link">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="columns">
  <div className="column is-one-third">
    <div className="contact-info">
      <h2 className="title is-4">Contact Information</h2>
      <p><FontAwesomeIcon icon={faLocationDot} />  123 Main Street SW1A 2AA London</p>
      <br></br>

      <p><FontAwesomeIcon icon={faPhone} /> (+44) 123-456-789</p>
      <br></br>

      <p><FontAwesomeIcon icon={faEnvelope} />  equip-footwear@outlook.com</p>
           </div>
          </div>
          </div>
        </section>

  );
}

export default Contact