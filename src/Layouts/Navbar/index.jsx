import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
function Navbar() {
  return (
    <nav>
      <div className="navbar-logo">
        <img
          src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp"
          alt="navbar-logo"
        />
      </div>
      <div className="navbar-page">
        <ul>
          <li>
            <NavLink className="NavLink" to={"/"}>
              Home
            </NavLink>
            <NavLink className="NavLink" to={"/"}>
              Shop
            </NavLink>
            <NavLink className="NavLink" to={"/"}>
              Blog
            </NavLink>
            <NavLink className="NavLink" to={"/Add"}>
              Pages
            </NavLink>
            <NavLink className="NavLink" to={"/Add"}>
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
      <div className="navbar-button">
        <button>Buy Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
