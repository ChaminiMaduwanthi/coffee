import React from 'react';
import { menu } from "../../data";
import "./menu.css"

const Menu = () => {
  return (
    <section className="menu section" id="menu">
      <h2 className="section__title" data-title="Our Menu">
        Let's Check Our Menu
      </h2>

      <div className="menu__grid container grid">
        {menu.map(({ id, img, title, description, price, alt }) => (
          <div className="menu__item grid" key={id}>
            <div className="menu__img-wrapper">
              <img src={img} alt={alt} className="menu__img" />
            </div>
            <div className="menu__data">
              <h3 className="menu__title">{title}</h3>
              <p className="menu__description">{description}</p>
              <span className="menu__price">${price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
