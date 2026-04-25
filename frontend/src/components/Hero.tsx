import React from "react";
import { scrollToSection } from "../utils/scrollUtils";

const Hero: React.FC = () => (
  <section id="home" className="hero">
    <div className="hero__bg-pattern" />
    <div className="container hero__inner">
      <div className="hero__text">
        <p className="hero__eyebrow">Your Neighbourhood Grocery Store</p>
        <h1 className="hero__heading">
          Welcome to <br />
          <span className="hero__brand">Priyadarshani</span>
          <br />
          <span className="hero__brand-sub">STORES</span>
        </h1>
        <p className="hero__sub">
          Located at Rathna – Hangamuwa, Rathnapura. We are committed to
          providing fresh, high-quality grocery items and daily essentials at
          affordable prices. Visit us for a convenient and friendly shopping
          experience.
        </p>
        <div className="hero__cta-row">
          <button onClick={() => scrollToSection("products")} className="btn btn--primary">
            Shop Now
          </button>
          <button onClick={() => scrollToSection("contact")} className="btn btn--outline">
            Contact Us
          </button>
        </div>
      </div>
      <div className="hero__illustration">
        <div className="store-card">
          <div className="store-card__roof" />
          <div className="store-card__body">
            <div className="store-card__door" />
            <div className="store-card__window" />
            <div className="store-card__window" />
          </div>
          <p className="store-card__label">STORE</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;