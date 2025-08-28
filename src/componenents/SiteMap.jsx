import React from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "led", label: "LED Lights" },
  { id: "offers", label: "Offers" },
  { id: "gallery", label: "Gallery" },
  { id: "about", label: "About Us" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact Us" },
  { id: "feedback", label: "Feedback" },
  { id: "download", label: "Download" },
];

export default function SiteMap() {
  return (
    <div className="container my-5">
      <h3 className="fw-bold text-center mb-4">Sitemap</h3>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul className="list-unstyled row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 text-center">
            {items.map((i) => (
              <li key={i.id} className="col">
                <a
                  href={`#${i.id}`}
                  className="text-decoration-none text-dark fw-medium"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
