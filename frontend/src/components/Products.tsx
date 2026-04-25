/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const Products = () => {
  // Product data with images
  const products = [
    { id: 1, name: "Rice", category: "Grains", image: "/products/rice.webp" },
    { id: 2, name: "Coconut", category: "Fresh Produce", image: "/products/coconut.jpg" },
    { id: 3, name: "Spices", category: "Household", image: "/products/detergent.jpg" },
    { id: 4, name: "Packaged Foods", category: "Snacks", image: "/products/packaged.jpg" },
    { id: 5, name: "Beverages", category: "Drinks", image: "/products/beverages.jpg" },
    { id: 6, name: "Household Items", category: "Essentials", image: "/products/essentials.jpg" },
    { id: 7, name: "Vegetables", category: "Fresh Produce", image: "/products/vegetables.webp" },
    { id: 8, name: "Fruits", category: "Fresh Produce", image: "/products/fruits.jpg" },
    { id: 9, name: "Dairy Products", category: "Dairy", image: "/products/dairy.jpg" },
    { id: 10, name: "Bakery Items", category: "Bakery", image: "/products/bakery.jpg" },
  ];

  // Duplicate products for seamless loop
  const duplicatedProducts = [...products, ...products, ...products];

  // Animation for infinite scroll
  const scrollAnimation = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.33%);
    }
  `;

  // Styles
  const productsSectionStyles = css`
    padding: 80px 0;
    background: white;
    overflow: hidden;

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

  const sliderWrapperStyles = css`
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-top: 20px;
  `;

  const sliderStyles = css`
    display: flex;
    gap: 24px;
    animation: ${scrollAnimation} 30s linear infinite;
    width: fit-content;

    &:hover {
      animation-play-state: paused;
    }
  `;

  const productCardStyles = css`
    flex: 0 0 250px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid #E8D5C0;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      border-color: #FF751F;
      box-shadow: 0 4px 24px rgba(232,115,12,0.15);
    }

    @media (max-width: 768px) {
      flex: 0 0 200px;
    }

    @media (max-width: 480px) {
      flex: 0 0 170px;
    }
  `;

  const productImageStyles = css`
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: #FFF8F0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  `;

  const productInfoStyles = css`
    padding: 16px;
    text-align: center;
  `;

  const productCategoryStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    color: #FF751F;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
  `;

  const productNameStyles = css`
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #2D2D2D;
    margin: 0;
  `;

  const placeholderImageStyles = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    background: linear-gradient(135deg, #FFF5E8 0%, #FDEBD0 100%);
  `;

  return (
    <section id="products" css={productsSectionStyles}>
      <div css={containerStyles}>
        <h2 css={titleStyles}>Products</h2>
        <div css={dividerStyles} />
        <p css={introStyles}>
          "At Priyadarshani Stores, you can find a wide selection of groceries
          including rice, coconut, spices, packaged foods, beverages, and
          household items. We carefully select our products to ensure freshness
          and quality."
        </p>
      </div>

      <div css={sliderWrapperStyles}>
        <div css={sliderStyles}>
          {duplicatedProducts.map((product, index) => (
            <div key={`${product.id}-${index}`} css={productCardStyles}>
              <div css={productImageStyles}>
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <div css={placeholderImageStyles}>
                    <span>🛍️</span>
                  </div>
                )}
              </div>
              <div css={productInfoStyles}>
                <div css={productCategoryStyles}>{product.category}</div>
                <h3 css={productNameStyles}>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;