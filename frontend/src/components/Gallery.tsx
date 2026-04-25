import React from "react";

const Gallery: React.FC = () => {
  const galleryItems = [1, 2, 3, 4];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section__title section__title--center">Gallery</h2>
        <div className="section__divider section__divider--center" />
        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <div key={item} className={`gallery__item`}>
              <div className="gallery__placeholder">
                <span>📷</span>
                <p>Store Image {item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;