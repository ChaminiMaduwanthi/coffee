import React from "react";
import "./contact.css";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="custom-contact__grid">
      <div className="custom-contact__section">
        <div className="custom-contact__logo">
          <h1>Caffero</h1>
          <p>
            We are many variations of passages available but the majority have
            suffered alteration in some form by injected humour words which
            don't look even slightly believable.
          </p>
          <ul className="custom-contact__info">
            <li>📞 +2 123 654 7898</li>
            <li>📍 25/8 Milford Road, New York</li>
            <li>✉️ info@example.com</li>
          </ul>
        </div>
      </div>
      <div className="custom-contact__section custom-contact__links">
        <h3>Quick Links</h3>
        <ul>
          <li>-About Us</li>
          <li>-Menu</li>
          <li>-Features</li>
          <li>-Gallery</li>
          <li>-Team</li>
          <li>-Reservation</li>
        </ul>
      </div>
      <div className="custom-contact__section custom-contact__hours">
        <h3>Opening Hours</h3>
        <ul className="custom-hours">
          <li><span>🗓️ Saturday:</span> 09AM - 06PM</li>
          <li><span>🗓️ Monday:</span> 09AM - 06PM</li>
          <li><span>🗓️ Tuesday:</span> 09AM - 06PM</li>
          <li><span>🗓️ Wednesday:</span> 09AM - 06PM</li>
          <li><span>🗓️ Thursday:</span> 09AM - 06PM</li>
          <li><span>🗓️ Friday:</span> 09AM - 06PM</li>
          <li><span>🛑 Sunday:</span> Closed</li>
        </ul>
      </div>
      <div className="custom-contact__section custom-contact__newsletter">
        <h3>Newsletter</h3>
        <p>Subscribe to Our Newsletter To Get Latest Updates And News</p>
        <form>
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Subscribe Now</button>
        </form>
        <div className="custom-contact__socials">
          <a href="/"><FaFacebookF /></a>
          <a href="/"><FaTwitter /></a>
          <a href="/"><FaLinkedin /></a>
          <a href="/"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
