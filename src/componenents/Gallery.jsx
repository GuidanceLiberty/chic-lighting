import React, { useState } from 'react';

import Outdoor from "../assets/hero/out.webp";
import Offer1 from "../assets/hero/offer1.jpeg"
import Offer2 from "../assets/hero/offer2.jpeg"
import Offer3 from "../assets/hero/offer3.webp"

import Gallery1 from "../assets/hero/gallery1.jpeg"
import Gallery2 from "../assets/hero/gallery2.jpeg"
import Gallery3 from "../assets/hero/gallery3.jpeg"
import Gallery4 from "../assets/hero/gallery4.jpeg"
import Gallery5 from "../assets/hero/gallery5.jpeg"
import Gallery6 from "../assets/hero/gallery6.jpeg"

const images = [
  { id: 1, img: Gallery1 },
  { id: 2, img: Gallery2 },
  { id: 3, img: Gallery3 },
  { id: 4, img: Gallery4 },
  { id: 5, img: Gallery5 },
  { id: 6, img: Gallery6 },
  { id: 7, img: Offer1 },
  { id: 8, img: Offer2 },
  { id: 9, img: Offer3 },
  { id: 10, img: Outdoor },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <div className="container my-5" id='gallery'>
      {/* Section Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold display-6">Gallery</h2>
        <p className="text-muted">Explore our collection of beautiful lighting designs</p>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid d-flex flex-wrap gap-3 justify-content-center">
        {images.map((item) => (
          <img
            src={item.img}
            key={item.id}
            onClick={() => setActive(item.img)}
            alt={`lighting ${item.id}`}
            className="img-thumbnail"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="lightbox position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
          onClick={() => setActive(null)}
          style={{ zIndex: 1050 }}
        >
          <img
            src={active}
            alt="full"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </div>
      )}
    </div>
  );
}
