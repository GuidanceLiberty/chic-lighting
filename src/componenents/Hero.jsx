import { FaPlay } from "react-icons/fa";
import HeroImg from "../assets/hero/light-1.webp";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container min-vh-100 d-flex align-items-center">
        <div className="row w-100">
          {/* BRAND INFO */}
          <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start py-5">
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="display-4 fw-bold lh-base"
            >
              Light gives you a perfect{" "}
              <span className="text-life">Life</span>
            </motion.h1>

            <motion.p
              variants={SlideRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-muted mx-auto mx-md-0"
              style={{ maxWidth: "500px" }}
            >
              From elegant chandeliers to smart LEDs — illuminate your world with style.
            </motion.p>

            {/* BUTTON SECTION */}
            <motion.div
              variants={SlideRight(1.6)}
              initial="hidden"
              animate="visible"
              className="d-flex justify-content-center justify-content-md-start gap-3 mt-4"
            >
              <button className="btn btn-primary d-flex align-items-center gap-2">
                Order Now
              </button>
              <button className="btn btn-outline-primary d-flex align-items-center gap-2">
                <FaPlay /> Watch Now
              </button>
            </motion.div>
          </div>

          {/* HERO IMAGE */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={HeroImg}
              alt="Light Hero"
              className="img-fluid hero-img shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
