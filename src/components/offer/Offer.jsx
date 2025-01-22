import React from "react";
import { offer } from "../../data";
import "./offer.css";

const Offer = () => {
  return (
    <section className="offer section" id="offer">
      <h2 className="section__title" data-title="Offer" >
        Special Offer For You
      </h2>

      <div className="offer__container container">
        {offer.map(({ img, title, discount, description }, index) => (
          <div className="offer__content" key={index}>
            <img src={img} alt={title} className="offer__img" />
            <div className="offer__details">
              <h3 className="offer__title">{title}</h3>
              <p className="offer__discount">Get {discount} Off</p>
              <p className="offer__description">{description}</p>
              <button className="offer__btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
