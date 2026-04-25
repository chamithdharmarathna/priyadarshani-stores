/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { scrollToSection } from "../utils/scrollUtils";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  // Styles
  const heroSectionStyles = css`
    position: relative;
    min-height: 60svh;
    display: flex;
    align-items: center;
    background: white;
    width: 100%;
  `;

  const heroContainerStyles = css`
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 20px;
  `;

  const imageOverlayWrapperStyles = css`
    position: relative;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    margin-top: 1cm;
  `;

  const heroImageStyles = css`
    width: 100%;
    height: auto;
    max-height: 45vh;
    object-fit: cover;
    display: block;
    border-radius: 30px;
  `;

  const overlayStyles = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 228, 211, 0.9);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 60px;
  `;

  const contentStyles = css`
    text-align: left;
    max-width: 900px;
    margin:130px;
  `;

  const welcomeTextStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    color: #FF751F;
    margin-bottom: 8px;
  `;

  const headingStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    color: #FF751F;
    margin-bottom: 20px;
  `;

  const storeTextStyles = css`
    color: black;
  `;

  const descriptionStyles = css`
    color: #2D2D2D;
    font-size: 1.25rem;
    line-height: 1.7;
    max-width: 1000px;
    margin: 0 0 36px 0;
  `;

  const ctaRowStyles = css`
    display: flex;
    gap: 6px;
    justify-content: flex-start;
    flex-wrap: wrap;
  `;

  const btnPrimaryStyles = css`
    display: inline-block;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    padding: 15px 36px;
    border-radius: 40px;
    cursor: pointer;
    transition: all 0.25s ease;
    border: 2px solid #FF751F;
    background: #FF751F;
    color: white;

    &:hover {
      background: #C25E00;
      border-color: #C25E00;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(232,115,12,0.30);
    }
  `;

  const handleShopNow = () => {
    scrollToSection("products");
  };

  return (
    <section css={heroSectionStyles}>
      <div css={heroContainerStyles}>
        <div css={imageOverlayWrapperStyles}>
          <img src={heroImage} alt="Priyadarshani Stores" css={heroImageStyles} />
          <div css={overlayStyles}>
            <div css={contentStyles}>
              <h1 css={welcomeTextStyles}>WELCOME TO</h1>
              <h1 css={headingStyles}>
                PRIYADARSHANI <span css={storeTextStyles}>STORES</span>
              </h1>
              <p css={descriptionStyles}>
                Your trusted neighborhood grocery store located in Rathna - Hangamuwa, Rathnapura.
                We are committed to providing fresh, high-quality grocery items and daily essentials
                at affordable prices. Visit us for a convenient and friendly shopping experience.
              </p>
              <div css={ctaRowStyles}>
                <button onClick={handleShopNow} css={btnPrimaryStyles}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;