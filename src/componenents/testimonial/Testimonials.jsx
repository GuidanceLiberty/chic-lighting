import React from "react";
import { TestimonialsData } from "../../mockdata/data";
import Slider from "react-slick";

const Testimonials = () => {
  const setting = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5 mb-5">
      <div className="container">
        {/* HEADER SECTION */}
        <div className="mb-5 text-start">
          <h1 className="fw-bold fs-2">
            What Are Customers Saying About Our Lights
          </h1>
        </div>

        {/* TESTIMONIALS CARDS */}
        <Slider {...setting}>
          {TestimonialsData.map((data) => (
            <div key={data.id} className="px-2">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  {/* UPPER SECTION */}
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-circle me-3"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <div>
                      <h5 className="card-title mb-1 fw-semibold">{data.name}</h5>
                      <small className="text-muted">Verified Buyer</small>
                    </div>
                  </div>

                  {/* TEXT */}
                  <p className="card-text text-muted">{data.text}</p>

                  {/* RATING */}
                  <p className="text-warning mb-0">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
