import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const Banner2 = () => {
  return (
    <div className="container my-5">
      <div className="py-5 d-flex justify-content-center align-items-center">
        {/* BRAND INFO */}
        <div className="d-flex flex-column text-center gap-4 mx-auto" style={{ maxWidth: "800px" }}>
          
          {/* HEADING */}
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="fw-bold text-uppercase fs-2 fs-md-3 fs-lg-1"
          >
            Get 20% Discount on Your First Order, Are You Ready To Buy
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            variants={SlideRight(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-muted fs-5"
          >
            We will make sure you get the right and the best quality lighting
            products for your home and business.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="d-flex justify-content-center flex-wrap gap-3"
          >
            <button className="btn btn-primary px-4">Learn More</button>
            <button className="btn btn-outline-primary fw-bold px-4">
              Stay In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
