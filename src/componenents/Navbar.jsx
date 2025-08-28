import React, { useState } from "react";
import { NavbarMenu } from "../mockdata/data";
import { CiSearch } from "react-icons/ci";
import { FaLightbulb } from "react-icons/fa"; // ✅ light bulb instead of dumbbell
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";
import VisitorCounter from "./VisitorCounter";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-light navbar-expand-md sticky-top navbar-custom">
      <div className="container d-flex align-items-center justify-content-between py-3">
        {/* LOGO */}
        <a href="/" className="navbar-brand d-flex align-items-center brand m-0">
          {/* ✅ Lightbulb Icon with glow */}
          <FaLightbulb className="me-2 fs-4 glowing-light" />
          <span className="text-dark">CHIC</span>
          <span className="ms-1 logo-orange">LiGHTING</span>
        </a>

        {/* DESKTOP LINKS ONLY */}
        <ul className="nav nav-pills nav-links-desktop ms-auto me-3">
          {NavbarMenu.map((item) => (
            <li className="nav-item" key={item.id}>
              <a href={item.link} className="nav-link px-2 text-dark">
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* ICONS + COUNTER + HAMBURGER */}
        <div className="nav-icons d-flex align-items-center gap-2">
          <button className="icon-btn" aria-label="Search">
            <CiSearch size={20} />
          </button>
          <button className="icon-btn" aria-label="Cart">
            <PiShoppingCartThin size={20} />
          </button>

          {/* ✅ Visitor Counter */}
          <VisitorCounter />

          {/* Desktop Login */}
          <a
            href="/login"
            className="btn btn-outline-primary d-none d-md-inline-block ms-2"
          >
            Login
          </a>

          {/* Mobile Hamburger */}
          <button
            className="icon-btn navbar-toggler-custom d-md-none"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <MdMenu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
