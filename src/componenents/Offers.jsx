import React from "react";
import { OfferData } from "../mockdata/data";

export default function Offers() {
  return (
    <div className="container my-5" id="offers">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Current Offers</h2>
        <p className="text-muted">
          Discover our latest discounts and special deals on lighting
        </p>
      </div>

      {/* Offers Grid */}
      <div className="row g-4">
        {OfferData.map((o) => (
          <div key={o.id} className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              {/* Offer Image */}
              <img
                src={o.imageUrl}
                alt={o.title}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />

              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{o.title}</h5>
                <p className="card-text text-muted">{o.details}</p>

                {/* Discount Badge */}
                <span className="badge bg-success align-self-start mb-2">
                  Save {o.discount}%
                </span>

                <button className="btn btn-primary mt-auto">Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
