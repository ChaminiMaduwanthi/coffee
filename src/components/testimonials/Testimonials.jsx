import React from "react";
import "./testimonials.css";
import t1 from '../../assets/images/cli1.png';
import t2 from '../../assets/images/cli2.png';
import t3 from '../../assets/images/cli3.png';
import t4 from '../../assets/images/cli4.png';
import t5 from '../../assets/images/cli5.png';
import t6 from '../../assets/images/cli6.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
      name: "Reid E Bull",
      role: "Customer",
      image: t5,
      rating: 5,
    },
    {
      id: 2,
      text: "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
      name: "Parker Jimenez",
      role: "Customer",
      image: t2,
      rating: 5,
    },
    {
      id: 3,
      text: "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
      name: "Sylvia H Green",
      role: "Customer",
      image: t3,
      rating: 5,
    },
    {
        id: 4,
        text: "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
        name: "Reid E Bull",
        role: "Customer",
        image: t4,
        rating: 5,
      },
      {
        id: 5,
        text: "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
        name: "Reid E Bull",
        role: "Customer",
        image: t1,
        rating: 5,
      },
      {
        id: 6,
        text: "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
        name: "Reid E Bull",
        role: "Customer",
        image: t6,
        rating: 5,
      },
  ];

  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title" data-title="Testimonials">
        What Client Say's
      </h2>
      <div className="testimonials__grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial__card" key={testimonial.id}>
            <p className="testimonial__text">{testimonial.text}</p>
            <div className="testimonial__user">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial__img"
              />
              <div>
                <h4 className="testimonial__name">{testimonial.name}</h4>
                <span className="testimonial__role">{testimonial.role}</span>
                <div className="testimonial__rating">
                  {"⭐".repeat(testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
