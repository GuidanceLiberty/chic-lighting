import React from "react";
import { NavbarMenu } from "../mockdata/data";


const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <>
      {/* Dark overlay */}
      <div
        className={`rm-overlay d-md-none ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Centered orange rounded card */}
      <div className={`rm-card d-md-none ${open ? "show" : ""}`}>
        <ul className="list-unstyled m-0">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="rm-item">
              <a
                href={item.link}
                className="rm-link"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResponsiveMenu;
