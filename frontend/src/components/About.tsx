/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import storeLogo from "../assets/storelogo.png";

const About = () => {
  // Animation for the logo
  const floatAnimation = keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  `;

  const pulseAnimation = keyframes`
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  `;

  // Styles
  const aboutSectionStyles = css`
      background: white;
      margin-top: -90px;  // Add this to pull the section up

      @media (max-width: 768px) {
        padding: 30px 0 50px 0;
        margin-top: -20px;  // Less negative on mobile
      }
    `;

  const aboutInnerStyles = css`
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 60px;
    align-items: center;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 24px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  `;

  const imgWrapStyles = css`
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    animation: ${floatAnimation} 3s ease-in-out infinite;

    @media (max-width: 900px) {
      max-width: 320px;
      margin: 0 auto;
    }
  `;

  const logoImageStyles = css`
    width: 80%;
    height: 80%;
    object-fit: contain;
    animation: ${pulseAnimation} 4s ease-in-out infinite;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  `;

  const contentStyles = css`
    @media (max-width: 900px) {
      text-align: center;
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

    @media (max-width: 900px) {
      margin-left: auto;
      margin-right: auto;
    }
  `;

  const bodyStyles = css`
    color: #666666;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-style: italic;
    line-height: 1.8;
    border-left: 4px solid #FF751F;
    padding-left: 20px;

    @media (max-width: 900px) {
      text-align: left;
      border-left: 4px solid #FF751F;
      padding-left: 20px;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  `;

  return (
    <section id="about" css={aboutSectionStyles}>
      <div css={aboutInnerStyles}>
        <div css={imgWrapStyles}>
          <img src={storeLogo} alt="Priyadarshani Stores Logo" css={logoImageStyles} />
        </div>
        <div css={contentStyles}>
          <h2 css={titleStyles}>About Us</h2>
          <div css={dividerStyles} />
          <p css={bodyStyles}>
            "Priyadarshani Stores is a locally owned grocery store dedicated to
            serving the community with quality products and reliable service. With
            a strong focus on customer satisfaction, we aim to provide a wide range
            of essential goods in a welcoming and convenient environment."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;