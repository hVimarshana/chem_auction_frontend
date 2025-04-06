import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import './ContactUsPage.css'; // Importing the CSS file

const ContactUsPage = () => {
  return (
    <>
    <NavBar />
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Feel free to reach out using the form below or contact us directly via phone or email.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Phone:</strong> 011 456 7890</p>
          <p><strong>Email:</strong> support@chemauction.com</p>
          <p><strong>Address:</strong> 1234 Auction St., Chemical City, Colombo 11</p>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUsPage;
