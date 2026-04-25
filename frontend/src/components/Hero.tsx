/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { scrollToSection } from "../utils/scrollUtils";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
  const heroSectionStyles = css`
    position: relative;
    display: flex;
    align-items: center;
    background: white;
    width: 100%;
    /* Remove min-height — let content drive height on mobile */
    min-height: 60svh;

    @media (max-width: 768px) {
      min-height: unset;
      padding-bottom: 0;
    }
  `;

  const heroContainerStyles = css`
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0 12px;
    }
  `;

  const imageOverlayWrapperStyles = css`
    position: relative;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    /* Use consistent spacing unit — no cm */
    margin-top: 16px;

    @media (max-width: 768px) {
      border-radius: 20px;
      margin-top: 110px;
    }
  `;

  /*
   * DESKTOP: keep the image visible behind the overlay (fixed max-height).
   * MOBILE: hide the image entirely — the overlay becomes the background
   *         so height is driven by text content, never clipped.
   */
  const heroImageStyles = css`
    width: 100%;
    height: auto;
    max-height: 45vh;
    object-fit: cover;
    display: block;
    border-radius: 30px;

    @media (max-width: 768px) {
      /* Image is hidden; overlay sits on a coloured background */
      display: none;
    }
  `;

  const overlayStyles = css`
    /* Desktop: absolute so it sits on top of the image */
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

    @media (max-width: 1024px) {
      padding: 40px;
    }

    /* Mobile: switch to relative so the card grows with content */
    @media (max-width: 768px) {
      position: relative;
      border-radius: 20px;
      padding: 28px 20px;
      align-items: flex-start;
      background: rgba(255, 228, 211, 0.95);
    }

    @media (max-width: 480px) {
      padding: 22px 16px;
    }
  `;

  const contentStyles = css`
    text-align: left;
    max-width: 900px;
    margin: 130px;

    @media (max-width: 1024px) {
      margin: 80px;
    }

    @media (max-width: 768px) {
      margin: 0;
      max-width: 100%;
      width: 100%;
    }
  `;

  const welcomeTextStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    color: #FF751F;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: clamp(1.6rem, 5.5vw, 2.2rem);
      margin-bottom: 4px;
    }
  `;

  const headingStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    color: #FF751F;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: clamp(1.6rem, 5.5vw, 2.2rem);
      margin-bottom: 14px;
    }
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

    @media (max-width: 1024px) {
      font-size: 1.1rem;
      max-width: 800px;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 0 0 22px 0;
      max-width: 100%;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin: 0 0 18px 0;
    }
  `;

  const ctaRowStyles = css`
    display: flex;
    gap: 6px;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 10px;
    }
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
      box-shadow: 0 8px 24px rgba(232, 115, 12, 0.30);
    }

    @media (max-width: 768px) {
      padding: 11px 28px;
      font-size: 0.9rem;
      /* Don't force full-width — keep it pill-shaped on mobile */
    }

    @media (max-width: 480px) {
      padding: 10px 22px;
      font-size: 0.85rem;
    }
  `;

  const handleShopNow = () => {
    scrollToSection("products");
  };

  return (
    <section css={heroSectionStyles}>
      <div css={heroContainerStyles}>
        <div css={imageOverlayWrapperStyles}>
          {/* Visible on desktop, hidden on mobile */}
          <img src={heroImage} alt="Priyadarshani Stores" css={heroImageStyles} />

          {/* Absolute on desktop (sits over image), relative on mobile (grows with content) */}
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