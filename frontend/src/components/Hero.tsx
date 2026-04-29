/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { scrollToSection } from "../utils/scrollUtils";
import heroImage from "../assets/hero.jpg";

const Hero = () => {

  const heroSectionStyles = css`
      background: white;
      width: 100%;
      padding-top: 16px;
      /* This pushes the hero card down so About's -90px margin-top
         still overlaps nicely without the icon sitting right on the edge */
      padding-bottom: 80px;

      @media (max-width: 768px) {
        padding-top: 110px;
        padding-bottom: 50px;
      }
    `;

  const heroContainerStyles = css`
      width: 100%;
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 20px;
      /* Gap between navbar and the hero card */
      padding-top: 80px;

      @media (max-width: 768px) {
        padding: 0 12px;
        padding-top: 12px;
      }
    `;

  /*
   * The wrapper is position:relative and has NO fixed height.
   * The overlay (position:relative) drives the height.
   * The image is position:absolute and fills 100% of whatever height the overlay creates.
   */
  const imageOverlayWrapperStyles = css`
    position: relative;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;

    @media (max-width: 768px) {
      border-radius: 20px;
    }
  `;

  const heroImageStyles = css`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;

    @media (max-width: 768px) {
      display: none;
    }
  `;

  /*
   * The overlay is position:relative — it is the height source.
   * Padding drives how much space the content gets.
   * Each breakpoint is tuned to a real device width/height.
   */
  const overlayStyles = css`
    position: relative;
    background: rgba(255, 228, 211, 0.92);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    /* 4K / large desktop: tall padding */
    padding: 90px 60px;

    /* standard desktop ~1440px */
    @media (max-width: 1440px) {
      padding: 70px 60px;
    }

    /* laptop ~1280px */
    @media (max-width: 1280px) {
      padding: 55px 50px;
    }

    /* small laptop ~1024px */
    @media (max-width: 1024px) {
      padding: 45px 40px;
    }

    /* tablet landscape ~900px */
    @media (max-width: 900px) {
      padding: 38px 36px;
    }

    /* mobile */
    @media (max-width: 768px) {
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
    /* Left indent scales with viewport width */
    margin-left: clamp(0px, 8vw, 130px);
    max-width: 900px;

    /* small laptop: reduce indent */
    @media (max-width: 1024px) {
      margin-left: clamp(0px, 4vw, 60px);
      max-width: 640px;
    }

    @media (max-width: 768px) {
      margin-left: 0;
      max-width: 100%;
      width: 100%;
    }
  `;

  const welcomeTextStyles = css`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    line-height: 1.15;
    color: #FF751F;
    margin: 0 0 4px 0;

    /* Fluid scale: tiny at 768px, full size at 1600px */
    font-size: clamp(1.5rem, 2.8vw, 4rem);

    @media (max-width: 1024px) { font-size: clamp(1.4rem, 3vw, 2.8rem); }
    @media (max-width: 900px)  { font-size: clamp(1.3rem, 3.2vw, 2.4rem); }
    @media (max-width: 768px)  { font-size: clamp(1.6rem, 5.5vw, 2.2rem); margin-bottom: 4px; }
  `;

  const headingStyles = css`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    line-height: 1.15;
    color: #FF751F;
    margin: 0 0 16px 0;

    font-size: clamp(1.5rem, 2.8vw, 4rem);

    @media (max-width: 1024px) { font-size: clamp(1.4rem, 3vw, 2.8rem);  margin-bottom: 14px; }
    @media (max-width: 900px)  { font-size: clamp(1.3rem, 3.2vw, 2.4rem); margin-bottom: 12px; }
    @media (max-width: 768px)  { font-size: clamp(1.6rem, 5.5vw, 2.2rem); margin-bottom: 12px; }
  `;

  const storeTextStyles = css`
    color: black;
  `;

  const descriptionStyles = css`
    color: #2D2D2D;
    line-height: 1.7;
    max-width: 900px;
    margin: 0 0 28px 0;

    font-size: clamp(0.8rem, 1.15vw, 1.2rem);

    @media (max-width: 1024px) { font-size: clamp(0.8rem, 1.3vw, 1.2rem); margin-bottom: 22px; max-width: 480px; }
    @media (max-width: 900px)  { font-size: clamp(0.8rem, 1.5vw, 1.2rem);   margin-bottom: 18px; }
    @media (max-width: 768px)  { font-size: 1.2rem; margin-bottom: 20px; max-width: 100%; }
    @media (max-width: 480px)  { font-size: 0.95rem; margin-bottom: 16px; }
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
    border-radius: 40px;
    cursor: pointer;
    transition: all 0.25s ease;
    border: 2px solid #FF751F;
    background: #FF751F;
    color: white;

    font-size: clamp(0.75rem, 0.9vw, 1rem);
    padding: clamp(9px, 1vh, 15px) clamp(20px, 2.2vw, 36px);

    @media (max-width: 1024px) { font-size: 0.9rem; padding: 11px 28px; }
    @media (max-width: 768px)  { font-size: 0.9rem; padding: 11px 28px; }
    @media (max-width: 480px)  { font-size: 0.85rem; padding: 10px 22px; }

    &:hover {
      background: #C25E00;
      border-color: #C25E00;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(232, 115, 12, 0.30);
    }
  `;
   const handleShopNow = () => {
      scrollToSection("products");
    };

  return (
    <section id="home" css={heroSectionStyles}>
      <div css={heroContainerStyles}>
        <div css={imageOverlayWrapperStyles}>
          {/* Absolutely fills whatever height the overlay creates */}
          <img src={heroImage} alt="Priyadarshani Stores" css={heroImageStyles} />

          {/* This drives the height — no fixed vh constraint */}
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