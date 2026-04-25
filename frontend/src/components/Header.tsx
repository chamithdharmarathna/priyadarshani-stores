/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { NAV_LINKS } from "../data";
import { scrollToSection } from "../utils/scrollUtils";
import logoImage from "../assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map(link => link.href);
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveSection(href);
    scrollToSection(href);
  };

  // Styles
  const headerStyles = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: #FF751F;
    transition: box-shadow 0.3s;
    box-shadow: ${scrolled ? '0 2px 20px rgba(232,115,12,0.15)' : 'none'};
  `;

  const headerInnerStyles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    gap: 16px;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 24px;
  `;

  const logoSyles = css`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;

    img {
      height: 45px;
      width: auto;
    }

    @media (max-width: 900px) {
      img {
        height: 35px;
      }
    }
  `;

  const desktopNavStyles = css`
    display: flex;
    gap: 8px;

    @media (max-width: 900px) {
      display: none;
    }
  `;

  const navLinkStyles = (isActive: boolean) => css`
    font-size: 0.88rem;
    font-weight: ${isActive ? 700 : 500};
    color: ${isActive ? 'white' : 'black'};
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 16px;
    border-radius: 6px;
    transition: none;
  `;

  const hamburgerStyles = css`
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;

    @media (max-width: 900px) {
      display: flex;
    }

    span {
      display: block;
      width: 100%;
      height: 2.5px;
      background: white;
      border-radius: 4px;
      transition: transform 0.3s, opacity 0.3s;
    }

    ${menuOpen && `
      span:nth-of-type(1) {
        transform: translateY(7.5px) rotate(45deg);
      }
      span:nth-of-type(2) {
        opacity: 0;
      }
      span:nth-of-type(3) {
        transform: translateY(-7.5px) rotate(-45deg);
      }
    `}
  `;

  const mobileNavStyles = css`
    display: ${isMobile ? 'flex' : 'none'};
    flex-direction: column;
    background: #FF751F;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 8px 0 16px;
    max-height: ${menuOpen ? '400px' : '0'};
    overflow: hidden;
    transition: max-height 0.35s ease;
  `;

  const mobileNavLinkStyles = (isActive: boolean) => css`
    padding: 12px 24px;
    font-size: 1rem;
    color: ${isActive ? 'white' : 'black'};
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
    width: 100%;
    font-weight: ${isActive ? 700 : 500};
    transition: none;
  `;

  return (
    <header css={headerStyles}>
      <div css={headerInnerStyles}>
        <button onClick={() => handleNavClick("home")} css={logoSyles}>
          <img src={logoImage} alt="Priyadarshani Stores" />
        </button>

        <nav css={desktopNavStyles}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              css={navLinkStyles(activeSection === link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          css={hamburgerStyles}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav css={mobileNavStyles}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            css={mobileNavLinkStyles(activeSection === link.href)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;