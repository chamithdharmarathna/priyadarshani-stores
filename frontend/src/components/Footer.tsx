import React from "react";
import { NAV_LINKS } from "../data";
import { scrollToSection } from "../utils/scrollUtils";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <div className="footer__top">
        <div className="footer__brand">
          <button onClick={() => scrollToSection("home")} className="logo logo--footer">
            <span className="logo__cart">🛒</span>
            <span className="logo__name">
              Priya<span className="logo__accent">darshani</span>
            </span>
            <span className="logo__stores">STORES</span>
          </button>
          <p className="footer__tagline">
            Your trusted neighbourhood grocery store in Rathnapura.
          </p>
        </div>
        <div className="footer__links">
          <h4 className="footer__links-title">Quick Links</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="footer__link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__contact-block">
          <h4 className="footer__links-title">Get In Touch</h4>
          <p>📞 <a href="tel:+94767163787" className="footer__link">+94767163787</a></p>
          <p>✉️ <a href="mailto:rathnawardenapriyadarshani@gmail.com" className="footer__link footer__link--email">rathnawardenapriyadarshani@gmail.com</a></p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Priyadarshani Stores. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;