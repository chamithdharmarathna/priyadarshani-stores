/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  // Styles
  const contactSectionStyles = css`
    padding: 80px 0;
    background: white;

    @media (max-width: 768px) {
      padding: 50px 0;
    }
  `;

  const containerStyles = css`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 24px;
  `;

  const contactInnerStyles = css`
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: start;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  `;

  const titleStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    color: #FF751F;
    margin-bottom: 10px;
    font-weight: 700;
  `;

  const dividerStyles = css`
    width: 56px;
    height: 4px;
    background: black;
    border-radius: 4px;
    margin-bottom: 24px;
  `;

  const introStyles = css`
    color: #666666;
    font-family: 'Inter', sans-serif;
    font-style: italic;
    margin-bottom: 32px;
    font-size: 1.2rem;
    line-height: 1.7;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  `;

  const contactListStyles = css`
    display: flex;
    flex-direction: column;
    gap: 18px;
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  const contactItemStyles = css`
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #2D2D2D;
  `;

  const contactIconStyles = css`
    font-size: 1.3rem;
    flex-shrink: 0;
    color: #FF751F;
  `;

  const contactLinkStyles = css`
    color: #FF751F;
    font-weight: 600;
    transition: color 0.2s;
    text-decoration: none;

    &:hover {
      color: #C25E00;
    }
  `;

  const contactTextStyles = css`
    color: #2D2D2D;
  `;

  const mapWrapperStyles = css`
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid #E8D5C0;
    min-height: 280px;
    background: #FFF8F0;
    width: 100%;

    iframe {
      width: 100%;
      height: 100%;
      min-height: 350px;
      display: block;
      border: 0;
    }

    @media (max-width: 768px) {
      iframe {
        min-height: 300px;
      }
    }
  `;

  return (
    <section id="contact" css={contactSectionStyles}>
      <div css={containerStyles}>
        <div css={contactInnerStyles}>
          <div>
            <h2 css={titleStyles}>Contact Us</h2>
            <div css={dividerStyles} />
            <p css={introStyles}>
              "Visit Priyadarshani Stores at Rathna – Hangamuwa, Rathnapura, or
              contact us for inquiries about our products and services. Our friendly
              staff is always ready to assist you."
            </p>
            <ul css={contactListStyles}>
              <li css={contactItemStyles}>
                <FiPhone css={contactIconStyles} />
                <a href="tel:+94767163787" css={contactLinkStyles}>
                  +94767163787
                </a>
              </li>
              <li css={contactItemStyles}>
                <FiMail css={contactIconStyles} />
                <a
                  href="mailto:rathnawardenapriyadarshani@gmail.com"
                  css={contactLinkStyles}
                >
                  rathnawardenapriyadarshani@gmail.com
                </a>
              </li>
              <li css={contactItemStyles}>
                <FiMapPin css={contactIconStyles} />
                <span css={contactTextStyles}>Rathna – Hangamuwa, Rathnapura, Sri Lanka</span>
              </li>
            </ul>
          </div>

          <div css={mapWrapperStyles}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d209709.4731132806!2d80.2320407!3d6.645224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3c1001fab79c3%3A0xb8bc06d0f55194a2!2sPriyadarshani%20Stores!5e1!3m2!1sen!2slk!4v1777095297164!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Priyadarshani Stores Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;