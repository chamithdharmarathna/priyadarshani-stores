import React from "react";
import { PRODUCTS } from "../data";

const Products: React.FC = () => (
  <section id="products" className="section products">
    <div className="container">
      <h2 className="section__title section__title--center">Products</h2>
      <div className="section__divider section__divider--center" />
      <p className="products__intro">
        "At Priyadarshani Stores, you can find a wide selection of groceries
        including rice, coconut, spices, packaged foods, beverages, and
        household items. We carefully select our products to ensure freshness
        and quality."
      </p>
      <div className="products__grid">
        {PRODUCTS.map((p) => (
          <div key={p.label} className="product-card">
            <div className="product-card__img">
              <div className="product-card__placeholder">
                <span>{p.icon}</span>
              </div>
            </div>
            <p className="product-card__label">{p.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;