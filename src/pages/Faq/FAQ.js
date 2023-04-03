import React, { useState } from 'react';
import "./faq.css";

function FAQ ({faq, index, toggleFAQ}) {
  return (
    <div
      className={"faq " + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </div>
  );
}

function App () {
  const [faqs, setfaqs] = useState([
    {
      question: '1. When will my order be delivered?',
      answer: 'Most orders are delivered within 7 days. Delivery time depends on your location.',
      open: false
    },
    {
      question: ' 2. How can I make the payment?',
      answer: 'You can make the payment using various online methods such as credit card, debit card, and netbanking.',
      open: false
    },
    {
      question: '3. What are the terms and conditions for return?',
      answer: 'Products can be returned within 30 days of purchase, provided that the item is in its orginal condition and product packaging is not damaged.',
      open: false
    },

    {
      question: '4. What is your return policy?',
      answer: 'We accept returns within 30 days of purchase, provided that the item is in its original condition and packaging.',
      open: false
    },

    {
      question: '5. How can I cancel my order?',
      answer: 'You can cancel your order within 12 hours of placing your order or before the product is shipped.',
      open: false
    },

    {
      question: '6. What if my payment is failed ?',
      answer: 'If your payment is failed, please check your payment account before trying again.',
      open: false
    },

    {
      question: '7. How can I check the size?',
      answer: 'The manufacturer generally includes a size chart within the product description. You can exchange the product within 30 days if the size does not match.',
      open: false
    },

    {
      question: '8. Are the images of the actual product?',
      answer: 'The images are of the actual product. The color may appear different due to lightning effect and display settings.',
      open: false
    },
    {
      question: '9. What is the product warranty?',
      answer: 'The product warranty is mentioned in the product information supplied by the manufacturer. Please contact the manufacturer directly for warranty issues.',
      open: false
    },
    {
      question: '10. How can I contact customer support?',
      answer: 'You can email us at customer_support@equip.com for any further assistance.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  return (
    <div className="App">
      
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
