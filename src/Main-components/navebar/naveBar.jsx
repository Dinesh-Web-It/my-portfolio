import React from "react";
import "./naveBar.css";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const NaveBar = () => {
  function sidebar() {
    const sidebar = document.querySelector(".nav-ul");
    sidebar.style.display = "flex";
  }
  function menubar() {
    const sidebar = document.querySelector(".nav-ul");
    sidebar.style.display = "none";
  }

  return (
    <div className="nav-bar">
      <h3>
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
          PORTFOLIO
        </Link>
      </h3>
      <ul className="menu-nav">
        <li className="nav-items">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-items">
          <Link
            spy={true}
            to="/skills"
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="nav-items">
          <Link
            spy={true}
            to="/projects"
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="nav-items">
          <Link
            spy={true}
            to="/resume"
            smooth={true}
            offset={50}
            duration={500}
          >
            Resume
          </Link>
        </li>
        <li className="nav-items">
          <Link
            spy={true}
            to="/contact"
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className="nav-ul">
        <li className="nav-items" id="cross">
          <a onClick={menubar}>
            <RxCross2 />
          </a>
        </li>
        <li className="nav-items">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-items">
          <Link
            to="/skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="nav-items">
          <Link
            to="/projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="nav-items">
          <Link
            to="/resume"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Resume
          </Link>
        </li>
        <li className="nav-items">
          <Link
            to="/contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="button">
        <button className="nav-btn">
          <a href="https://www.linkedin.com/in/dinesh-k-725343293">Hire Me</a>
        </button>
        <BiMenuAltRight id="menu" onClick={sidebar} />
      </div>
    </div>
  );
};

export default NaveBar;
