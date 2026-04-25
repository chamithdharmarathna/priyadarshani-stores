import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";
import { scrollToSection } from "../utils/scrollUtils";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner container">
        <button onClick={() => handleNavClick("home")} className="logo">
          <span className="logo__cart">🛒</span>
          <span className="logo__name">
            Priya<span className="logo__accent">darshani</span>
          </span>
          <span className="logo__stores">STORES</span>
        </button>

        <nav className="nav nav--desktop">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="nav__link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`nav nav--mobile ${menuOpen ? "nav--mobile-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="nav__link nav__link--mobile"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;