import React, { useState } from "react";
import { ProductData } from "../../mockdata/data";
import { motion } from "framer-motion";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "LED", "LAMPS", "WALL", "OUTDOOR", "HOME", "CEILING"];

  const filteredCards =
    activeTab === "All"
      ? ProductData
      : ProductData.filter((card) => card.category === activeTab);

  return (
    <div className="container my-5" id="tabs">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Shop Lighting</h2>
        <p className="text-muted">
          Browse our wide collection of modern, stylish, and affordable lighting
          solutions
        </p>
      </div>

      {/* TABS BUTTON SECTION */}
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-4 p-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`btn ${
              activeTab === tab ? "btn-primary" : "btn-outline-secondary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CARD SECTION */}
      <div className="row g-4">
        {filteredCards.map((card) => (
          <motion.div
            id={card.id}
            key={card.id}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="col-12 col-md-6 col-lg-4"
          >
            <div className="card h-100 shadow-sm border-0">
              <img
                src={card.image}
                alt={card.title}
                className="card-img-top"
                style={{ height: "240px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{card.title}</h5>
                <p className="text-muted mb-1">{card.category}</p>
                <p className="fw-bold text-danger mb-0">{card.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
