import React from "react";
import "./chef.css";
import C01 from "../../assets/images/C1.png";
import C02 from "../../assets/images/C2.png";
import C03 from "../../assets/images/C3.png";
import C04 from "../../assets/images/C4.png";

import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Chef = () => {
  return (
    <section className="chef section" id="chef">
      <h2 className="section__title" data-title="Chefs">
        Meet Our Chefs
      </h2>

      <div className="chef__grid grid container">
        <div className="chef__item">
          <img src={C01} alt="" className="chef__img" />

          <div className="chef__data">
            <h3 className="chef__title">Silva</h3>
            <p className="chef__designation">Senior Chef</p>
          </div>

          <div className="chef__socials">
            <a href="/" className="chef__social-links">
              <FaFacebookF />
            </a>

            <a href="/" className="chef__social-links">
              <FaTwitter />
            </a>

            <a href="/" className="chef__social-links">
              <FaLinkedin />
            </a>

            <a href="/" className="chef__social-links">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="chef__item">
          <img src={C03} alt="" className="chef__img" />

          <div className="chef__data">
            <h3 className="chef__title">Jasmin</h3>
            <p className="chef__designation">Senior Chef</p>
          </div>

          <div className="chef__socials">
            <a href="/" className="chef__social-links">
              <FaFacebookF />
            </a>

            <a href="/" className="chef__social-links">
              <FaTwitter />
            </a>

            <a href="/" className="chef__social-links">
              <FaLinkedin />
            </a>

            <a href="/" className="chef__social-links">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="chef__item">
          <img src={C02} alt="" className="chef__img" />

          <div className="chef__data">
            <h3 className="chef__title">Tom</h3>
            <p className="chef__designation">Senior Chef</p>
          </div>

          <div className="chef__socials">
            <a href="/" className="chef__social-links">
              <FaFacebookF />
            </a>

            <a href="/" className="chef__social-links">
              <FaTwitter />
            </a>

            <a href="/" className="chef__social-links">
              <FaLinkedin />
            </a>

            <a href="/" className="chef__social-links">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="chef__item">
          <img src={C04} alt="" className="chef__img" />

          <div className="chef__data">
            <h3 className="chef__title">Lisa</h3>
            <p className="chef__designation">Senior Chef</p>
          </div>

          <div className="chef__socials">
            <a href="/" className="chef__social-links">
              <FaFacebookF />
            </a>

            <a href="/" className="chef__social-links">
              <FaTwitter />
            </a>

            <a href="/" className="chef__social-links">
              <FaLinkedin />
            </a>

            <a href="/" className="chef__social-links">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
