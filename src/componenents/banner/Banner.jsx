import React from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utility/animation';

const Banner = ({ image, title, subtitle }) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        {/* BANNER IMAGE SECTION */}
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            src={image}
            alt=""
            className="img-fluid"
            style={{ maxWidth: '600px', objectFit: 'contain' }}
          />
        </div>

        {/* BANNER TEXT SECTION */}
        <div className="col-md-6 text-center text-md-start">
          <motion.p
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="fw-bold text-capitalize"
            style={{ fontSize: '2rem' }}
          >
            {title}
          </motion.p>

          <motion.p
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-secondary"
            style={{ fontSize: '1.1rem', maxWidth: '500px' }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={SlideUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mt-3 d-flex justify-content-center justify-content-md-start"
          >
            <button className="btn btn-primary px-4 py-2 rounded-pill shadow-sm">
              Explore More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
