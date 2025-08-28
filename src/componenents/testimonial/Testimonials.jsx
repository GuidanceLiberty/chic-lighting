import React from "react";
import { TestimonialsData } from "../../mockdata/data";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
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
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // small tablets / large phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5 mb-5 bg-light">
      <div className="container">
        {/* HEADER SECTION */}
        <div className="mb-5 text-center">
          <h1 className="fw-bold fs-2">
            What Are Customers Saying About Our Lights
          </h1>
        </div>

        {/* TESTIMONIALS SLIDER */}
        <Slider {...settings}>
          {TestimonialsData.map((data) => (
            <div key={data.id} className="px-3">
              <div className="card shadow-sm border-0 h-100 p-3 text-center">
                {/* UPPER SECTION */}
                <div className="d-flex flex-column align-items-center mb-3">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-circle mb-2"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="card-title mb-0 fw-semibold">{data.name}</h5>
                  <small className="text-muted">Verified Buyer</small>
                </div>

                {/* TEXT */}
                <p
                  className="card-text text-muted"
                  style={{ minHeight: "80px", maxWidth: "90%", margin: "0 auto" }}
                >
                  "{data.text}"
                </p>

                {/* RATING */}
                <p className="text-warning mb-0">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
