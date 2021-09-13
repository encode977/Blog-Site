import React from "react";
import "./Footer.scss";
import logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="" />
      <ul className="footer__link">
        <li>News Feed</li>
        <li>Connect</li>
      </ul>
    </footer>
  );
}

export default Footer;
