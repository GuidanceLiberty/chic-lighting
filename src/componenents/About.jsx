import React from "react";

export default function About() {
  return (
    <div className="container my-5" id="about">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          {/* Section Heading */}
          <h2 className="fw-bold display-6 mb-3">About Us</h2>
          <p className="text-muted mb-4">
            Lighting the way since 1971 — blending tradition, innovation, and style.
          </p>

          {/* About Content */}
          <div className="p-4 rounded shadow-sm bg-light">
            <p className="mb-3">
              Since 1971, <strong>Chic Lighting & Design</strong> has curated timeless and 
              contemporary lighting for eclectic interiors. Our design professionals are 
              continuously trained and always ready to assist with both residential and 
              commercial projects of any size.
            </p>
            <p className="mb-0">
              From <em>crystal chandeliers</em> to <em>industrial pendants</em> and 
              <em> smart LEDs</em>, we focus on quality, functionality, and style — helping 
              you illuminate your spaces beautifully and sustainably.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
