import React from "react";
import { TestimonialsData } from "../../mockdata/data";
import Slider from "react-slick";

const Testimonials = () => {
  const setting = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
          <h2 className="fw-bold display-6">
            What Our Customers Are Saying About Us
          </h2>
        </div>

        {/* TESTIMONIALS CARDS */}
        <Slider {...setting}>
          {TestimonialsData.map((data) => (
            <div key={data.id} className="my-4">
              <div className="card shadow-sm border-0 h-100 p-4">
                {/* UPPER SECTION */}
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-circle me-3"
                    style={{ width: "64px", height: "64px", objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="mb-0 fw-bold">{data.name}</h5>
                    <small className="text-muted">{data.position}</small>
                  </div>
                </div>

                {/* BOTTOM SECTION */}
                <div>
                  <p className="text-muted small">{data.text}</p>
                  <p className="mb-0">⭐⭐⭐⭐⭐</p>
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
