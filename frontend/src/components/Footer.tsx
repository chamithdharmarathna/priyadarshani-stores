/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NAV_LINKS } from "../data";
import { scrollToSection } from "../utils/scrollUtils";
import { FiPhone, FiMail } from "react-icons/fi";
import logo2 from "../assets/logo2.png";

const Footer = () => {
  // Styles
  const footerStyles = css`
    background: black;
    color: rgba(255, 255, 255, 0.75);
    width: 100%;
  `;

  const containerStyles = css`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;

    @media (max-width: 768px) {
      padding: 0 24px;
    }
  `;

  const footerTopStyles = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 60px 0 40px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    gap: 60px;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 50px;
    }
  `;

  const logoSectionStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex: 2;
    text-align: center;

    @media (max-width: 900px) {
      order: 1;
    }
  `;

  const logoImageStyles = css`
    width: 380px;
    height: auto;
    display: block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 120px;
    }
  `;

  const taglineStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    opacity: 0.8;
    max-width: 320px;
    margin: 0;
    line-height: 1.6;
    text-align: center;

    @media (max-width: 900px) {
      max-width: 100%;
    }
  `;

  const quickLinksStyles = css`
    text-align: left;
    flex: 1.5;

    @media (max-width: 900px) {
      text-align: center;
      order: 2;
      width: 100%;
    }
  `;

  const quickLinksTitleStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    color: #FF751F;
    margin-bottom: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;

    @media (max-width: 900px) {
      font-size: 1rem;
    }
  `;

  const quickLinksListStyles = css`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const quickLinkButtonStyles = css`
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.65);
    transition: all 0.2s;
    padding: 0;
    position: relative;

    &:hover {
      color: #FF751F;
      transform: translateX(5px);
    }

    @media (max-width: 900px) {
      &:hover {
        transform: translateX(0);
      }
    }
  `;

  const contactBlockStyles = css`
    text-align: left;
    flex: 1.3;


    @media (max-width: 900px) {
      text-align: center;
      order: 3;
      width: 110%;
    }
  `;

  const contactTitleStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    color: #FF751F;
    margin-top:-40px;
    margin-left:20px;
    margin-bottom: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;

    @media (max-width: 900px) {
      font-size: 1rem;
    }
  `;

  const contactItemStyles = css`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;

    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;

    @media (max-width: 900px) {
      justify-content: center;
    }
  `;

  const contactIconStyles = css`
    font-size: 1.1rem;
    color: #FF751F;
    flex-shrink: 0;
  `;

  const contactLinkStyles = css`
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    transition: color 0.2s;
    word-break: break-all;

    &:hover {
      color: #FF751F;
    }
  `;

  const footerBottomStyles = css`
    text-align: center;
    padding: 30px 0 20px 0;
    font-size: 0.85rem;
    opacity: 0.5;
    font-family: 'Inter', sans-serif;
  `;

  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };

  return (
    <footer css={footerStyles}>
      <div css={containerStyles}>
        <div css={footerTopStyles}>
          {/* Quick Links - Left Side */}
          <div css={quickLinksStyles}>
            <h4 css={quickLinksTitleStyles}>Quick Links</h4>
            <ul css={quickLinksListStyles}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    css={quickLinkButtonStyles}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo Section - Center */}
          <div css={logoSectionStyles}>
            <img
              src={logo2}
              alt="Priyadarshani Stores"
              css={logoImageStyles}
              onClick={() => handleNavClick("home")}
              style={{ cursor: 'pointer' }}
            />
            <p css={taglineStyles}>
              Your trusted neighbourhood grocery store in Rathnapura.
            </p>
          </div>

          {/* Contact Section - Right Side */}
          <div css={contactBlockStyles}>
            <h4 css={contactTitleStyles}>Get In Touch</h4>
            <div css={contactItemStyles}>
              <FiPhone css={contactIconStyles} />
              <a href="tel:+94767163787" css={contactLinkStyles}>
                +94767163787
              </a>
            </div>
            <div css={contactItemStyles}>
              <FiMail css={contactIconStyles} />
              <a
                href="mailto:rathnawardenapriyadarshani@gmail.com"
                css={contactLinkStyles}
              >
                rathnawardenapriyadarshani@gmail.com
              </a>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;