import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <span><p>Portfolio</p></span>
          </div>

          <div className="navbarRight">
            <div className="navheader">
              <Link
                className="Links"
                to="sectionOne"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                activeClass="active"
              >
                Home
              </Link>
              <Link
                className="Links"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                activeClass="active"
              >
                About
              </Link>
              <Link
                className="Links"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                activeClass="active"
              >
                Skills
              </Link>
              <Link
                className="Links"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                activeClass="active"
              >
                Projects
              </Link>
              <Link
                className="Links"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                activeClass="active"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
