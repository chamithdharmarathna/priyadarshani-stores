import React from "react";

const Contact: React.FC = () => (
  <section id="contact" className="section contact">
    <div className="container contact__inner">
      <div className="contact__info">
        <h2 className="section__title">Contact Us</h2>
        <div className="section__divider" />
        <p className="contact__intro">
          "Visit Priyadarshani Stores at Rathna – Hangamuwa, Rathnapura, or
          contact us for inquiries about our products and services. Our friendly
          staff is always ready to assist you."
        </p>
        <ul className="contact__list">
          <li className="contact__item">
            <span className="contact__icon">📞</span>
            <a href="tel:+94767163787" className="contact__link">
              +94767163787
            </a>
          </li>
          <li className="contact__item">
            <span className="contact__icon">✉️</span>
            <a
              href="mailto:rathnawardenapriyadarshani@gmail.com"
              className="contact__link"
            >
              rathnawardenapriyadarshani@gmail.com
            </a>
          </li>
          <li className="contact__item">
            <span className="contact__icon">📍</span>
            <span>Rathna – Hangamuwa, Rathnapura, Sri Lanka</span>
          </li>
        </ul>
      </div>
      <div className="contact__map">
        <div className="contact__map-placeholder">
          <span>🗺️</span>
          <p>Location Map</p>
          <p className="contact__map-hint">
            Rathna – Hangamuwa, Rathnapura
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;