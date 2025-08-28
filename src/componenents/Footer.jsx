import React from "react";
import { FaFacebook, FaInstagram, FaLink, FaLightbulb } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer
      className="text-white rounded-top-4"
      style={{
        background:
          "linear-gradient(90deg, #111 0%, #0b0b0f 50%, #111 100%)",
      }}
    >
      <div className="container-fluid py-5">
        <div className="row g-4">
          {/* BRAND SECTION */}
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 text-uppercase fw-bold fs-5 mb-2">
              <FaLightbulb className="text-warning fs-4" />
              <span>CHIC</span>
              <span className="text-warning">LiGHTING</span>
            </div>

            <p className="text-secondary mb-3">
              Illuminating spaces with modern, stylish, and energy-efficient
              lighting solutions. Chic Lighting — where design meets brilliance.
            </p>

            {/* Socials */}
            <div className="d-flex align-items-center gap-3 pt-2">
              <a href="#" className="link-light">
                <HiLocationMarker className="fs-4" />
              </a>
              <a href="#" className="link-light">
                <FaInstagram className="fs-4" />
              </a>
              <a href="#" className="link-light">
                <FaFacebook className="fs-4" />
              </a>
              <a href="#" className="link-light">
                <FaLink className="fs-4" />
              </a>
            </div>
          </div>

          {/* LINKS SECTIONS */}
          <div className="col-md-8">
            <div className="row row-cols-1 row-cols-sm-3 g-4">
              {/* Important Links */}
              <div>
                <h6 className="fw-semibold mb-3">Important Links</h6>
                <ul className="list-unstyled m-0">
                  <li className="mb-2">
                    <a href="#" className="link-light text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#about" className="link-light text-decoration-none">
                      About
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#equipments" className="link-light text-decoration-none">
                      Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/login" className="link-light text-decoration-none">
                      Login
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h6 className="fw-semibold mb-3">Company</h6>
                <ul className="list-unstyled m-0">
                  <li className="mb-2">
                    <a href="#offers" className="link-light text-decoration-none">
                      Offers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#contact" className="link-light text-decoration-none">
                      Contact
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#privacy" className="link-light text-decoration-none">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h6 className="fw-semibold mb-3">Resources</h6>
                <ul className="list-unstyled m-0">
                  <li className="mb-2">
                    <a href="#gallery" className="link-light text-decoration-none">
                      Gallery
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#faq" className="link-light text-decoration-none">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#download" className="link-light text-decoration-none">
                      Download
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#feedback" className="link-light text-decoration-none">
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <hr className="border-secondary opacity-25 my-4" />
        <div className="text-center text-secondary small">
          &copy; {new Date().getFullYear()} Chic Lighting &amp; Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
