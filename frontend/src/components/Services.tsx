import React from "react";
import { SERVICES } from "../data";

const Services: React.FC = () => (
  <section id="services" className="section services">
    <div className="container">
      <h2 className="section__title section__title--center">Our Services</h2>
      <div className="section__divider section__divider--center" />
      <p className="services__intro">
        "We offer a variety of grocery items including fresh produce, dry goods,
        household essentials, and daily necessities. Our store ensures quality
        products, reasonable prices, and friendly customer service to meet your
        everyday needs."
      </p>
      <div className="services__grid">
        {SERVICES.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;