import React from 'react';
import aboutImg from "../../assets/images/img-2.jpg";
import { FiCheck } from 'react-icons/fi';
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__grid container grid">
        {/* Image Section */}
        <div className="about__img-wrapper">
          <img src={aboutImg} alt="About Us" className="about__img" />
        </div>

        {/* Content Section */}
        <div className="about__content">
          <h2 className="section__title title-left" data-title="About Us">
            Nestled in the heart of Maharagama, our coffee shop is more than just a place to grab a quick coffee.
          </h2>

          {/* Details Section */}
          <div className="about__details grid">
            <p className="about__details-description">
              <FiCheck />
              Pair your coffee with our freshly baked pastries, sandwiches, and desserts.
            </p>

            <p className="about__details-description">
              <FiCheck />
              Our cozy, welcoming vibe is perfect for unwinding, working, or catching up with friends.
            </p>

            <p className="about__details-description">
              <FiCheck />
              We support local farmers and artisans to bring you the best our community has to offer.
            </p>
          </div>

          {/* Button */}
          <a href="#team" className="btn">
            Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;