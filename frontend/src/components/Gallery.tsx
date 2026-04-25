/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useState } from "react";
import store1 from "../assets/store1.jpeg";
import store2 from "../assets/store2.jpeg";
import store3 from "../assets/store3.jpeg";
import store4 from "../assets/store4.jpeg";

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  const galleryItems = [
    { id: 1, image: store1, title: "Store Front" },
    { id: 2, image: store2, title: "Product Display" },
    { id: 3, image: store3, title: "Fresh Produce Section" },
    { id: 4, image: store4, title: "Customer Service" },
  ];

  // Animation for fade-in
  const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  // Animation for image loading
  const shimmer = keyframes`
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  `;

  // Styles
  const gallerySectionStyles = css`
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
    margin: 0 auto 48px auto;
  `;

  const galleryGridStyles = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  `;

  const galleryItemStyles = css`
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    cursor: pointer;
    animation: ${fadeInUp} 0.6s ease-out forwards;
    opacity: 0;

    &:nth-of-type(1) { animation-delay: 0.1s; }
    &:nth-of-type(2) { animation-delay: 0.3s; }
    &:nth-of-type(3) { animation-delay: 0.5s; }
    &:nth-of-type(4) { animation-delay: 0.7s; }
  `;

  const imageWrapperStyles = css`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `;

  const imageStyles = (isLoaded: boolean) => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    opacity: ${isLoaded ? 1 : 0};
    transition: opacity 0.3s ease, transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  `;

  const skeletonStyles = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 1000px 100%;
    animation: ${shimmer} 1.5s infinite;
  `;

  const overlayStyles = css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;

    ${galleryItemStyles}:hover & {
      transform: translateY(0);
    }
  `;

  const overlayTitleStyles = css`
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  `;

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" css={gallerySectionStyles}>
      <div css={containerStyles}>
        <h2 css={titleStyles}>Gallery</h2>
        <div css={dividerStyles} />

        <div css={galleryGridStyles}>
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              css={galleryItemStyles}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div css={imageWrapperStyles}>
                {!loadedImages[item.id] && <div css={skeletonStyles} />}
                <img
                  src={item.image}
                  alt={item.title}
                  css={imageStyles(loadedImages[item.id] || false)}
                  onLoad={() => handleImageLoad(item.id)}
                />
                <div css={overlayStyles}>
                  <p css={overlayTitleStyles}>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;