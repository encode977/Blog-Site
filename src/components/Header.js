import React from "react";
import "./Header.scss";
import Logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img src={Logo} alt="Unifeed" />
      </div>
      <div className="header__right">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
        <button className="header__btn">Subscribe</button>
      </div>
    </header>
  );
}

export default Header;
