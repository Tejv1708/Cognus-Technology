import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="info-container">
      <div className="message">
        Lowest guaranted price across the globe Get upto 50% off{" "}
        <a href="">Book Now</a>
      </div>

      <div className="contact-info-container">
        <span className="contact-info">📞+441615244345 | </span>
        <span className="contact-info">📞+441615244345 | </span>
        <span className="contact-info">✉️help@globalassignmenthelp.com</span>
      </div>
    </div>
  );
};

export default Navbar;
