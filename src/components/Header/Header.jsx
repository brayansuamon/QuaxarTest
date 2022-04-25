import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const { header, nav, link } = styles;
const Header = () => {
  return (
    <header className={header}>
      <h1>Brayan Suarez Monroy</h1>
      <nav className={nav}>
        <ul>
          <li>
            <Link className={link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={link} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={link} to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className={link} to="/experience">
              Experience
            </Link>
          </li>
          <li>
            <Link className={link} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={nav}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/brayan-suarezm/">
              <img src="./Images/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/brayansuamon">
              <img src="./Images/github.svg" alt="Github" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
