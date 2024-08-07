import React from "react";
import "./navbar.scss";
import { Button } from "@mui/material";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__wrapper">
          <img
            src="https://vakulenko.online/images/tild3830-6536-4238-a262-393965353063__modern-letter-n-a-v-.png"
            alt=""
            className="navbar__logo"
          />
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <Button className="navbar__btn" size="large" variant="outlined">КЕЙСЫ</Button>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <Button className="navbar__btn" size="large" variant="outlined">ОТЗЫВЫ</Button>
              </a>
            </li>{" "}
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <Button className="navbar__btn" size="large" variant="outlined">КОНТАКТЫ</Button>
              </a>
            </li>
          </ul>

          <div className="navbar__language">
            <Button size="small" variant="outlined">UA</Button>
            <Button size="small" variant="outlined">RU</Button>
          </div>

          <div className="navbar__burger">
            <hr className="navbar__hr" />
            <hr className="navbar__hr" />
            <hr className="navbar__hr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
