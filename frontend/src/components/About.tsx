import React from "react";

const About: React.FC = () => (
  <section id="about" className="section about">
    <div className="container about__inner">
      <div className="about__img-wrap">
        <div className="about__img-placeholder">
          <span>🏪</span>
        </div>
      </div>
      <div className="about__content">
        <h2 className="section__title">About Us</h2>
        <div className="section__divider" />
        <p className="about__body">
          "Priyadarshani Stores is a locally owned grocery store dedicated to
          serving the community with quality products and reliable service. With
          a strong focus on customer satisfaction, we aim to provide a wide range
          of essential goods in a welcoming and convenient environment."
        </p>
      </div>
    </div>
  </section>
);

export default About;