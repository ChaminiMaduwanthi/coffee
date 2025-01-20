import React from "react";
import { features } from "../../data"; // Import the features array from data.js
import shape from "../../assets/images/img3.png";
import "./features.css"

const Features = () => {
  return (
    <section className="features section" id="features">
      <h2 className="section__title" data-title="Features">
        Our Best Features
      </h2>

      <div className="features__grid container grid">
        {features.map(({ img, title, description }, index) => (
          <div className="features__item" key={index}>
            <img src={img} alt={title} className="feature__img" />
            <h3 className="feature__title">{title}</h3>
            <p className="feature__description">{description}</p>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default Features;

