/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SERVICES } from "../data";
import freshIcon from "../assets/fresh.webp";
import priceIcon from "../assets/price.png";
import serviceIcon from "../assets/service.png";

const Services = () => {
  // Map icons to services
  const iconMap = {
    "Fresh Products": freshIcon,
    "Reasonable Prices": priceIcon,
    "Friendly Service": serviceIcon,
  };

  // Styles
  const servicesSectionStyles = css`
    padding: 80px 0;
    background: #FFF8F0;

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

  const titleStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    color: #FF751F;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 700;
  `;

  const dividerStyles = css`
    width: 56px;
    height: 4px;
    background: black;
    border-radius: 4px;
    margin: 0 auto 24px auto;
  `;

  const introStyles = css`
    text-align: center;
    color: #666666;
    font-family: 'Inter', sans-serif;
    font-style: italic;
    max-width: 700px;
    margin: 0 auto 48px auto;
    font-size: 1.2rem;
    line-height: 1.7;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      margin-bottom: 32px;
    }
  `;

  const servicesGridStyles = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  `;

  const serviceCardStyles = css`
    background: white;
    border-radius: 12px;
    padding: 36px 24px;
    text-align: center;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    transition: transform 0.25s, box-shadow 0.25s;
    border-bottom: 4px solid transparent;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 4px 24px rgba(232,115,12,0.10);
      border-bottom-color: #FF751F;
    }

    @media (max-width: 768px) {
      padding: 28px 20px;
    }
  `;

  const serviceIconStyles = css`
    width: 80px;
    height: 80px;
    margin: 0 auto 16px auto;
    display: block;
    object-fit: contain;
  `;

  const serviceTitleStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: 1.15rem;
    color: #FF751F;
    margin-bottom: 10px;
    font-weight: 700;
  `;

  const serviceDescStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: 0.92rem;
    color: #666666;
    line-height: 1.6;
  `;

  return (
    <section id="services" css={servicesSectionStyles}>
      <div css={containerStyles}>
        <h2 css={titleStyles}>Our Services</h2>
        <div css={dividerStyles} />
        <p css={introStyles}>
          "We offer a variety of grocery items including fresh produce, dry goods,
          household essentials, and daily necessities. Our store ensures quality
          products, reasonable prices, and friendly customer service to meet your
          everyday needs."
        </p>
        <div css={servicesGridStyles}>
          {SERVICES.map((s) => (
            <div key={s.title} css={serviceCardStyles}>
              <img
                src={iconMap[s.title as keyof typeof iconMap]}
                alt={s.title}
                css={serviceIconStyles}
              />
              <h3 css={serviceTitleStyles}>{s.title}</h3>
              <p css={serviceDescStyles}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;