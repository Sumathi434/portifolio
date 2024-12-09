import React from "react";
import "./Mainsection.css";
import Profile from "../../images/profile_image.jpg";
import PDF from "../../images/Resume.pdf";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";

function Mainsection() {
  return (
    <Element name="sectionOne">
      <main className="container">
        <div className="containerLeft">
          <p className="para1">Hello I am,</p>
          <h1>Naga Sumathi Vadugu</h1>
          <p className="para2">
            And I'm a <span>Frontend Developer</span>
          </p>
          <p className="para3">
            I'm a passionate frontend developer specializing in creating
            beautiful, <br />
            user-friendly websites.I design responsive and visually appealing
            interfaces that deliver a <br />
            seamless experience across all devices.My goal is to combine
            creativity and functionality, <br />
            crafting websites that are both functional and intuitive.
          </p>
          <div className="icons">
            <a href="https://www.instagram.com/nagasumathi_vadugu/">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/in/nagasumathi-vadugu/">
              <FaLinkedin />
            </a>
            <a href="https://x.com/NagasumathiV">
              <FaTwitter />
            </a>
            <a href="https://github.com/Sumathi434">
              <FaGithub />
            </a>
          </div>
          <div className="Resumebtn">
            <a href={PDF} download>
              <button>Download Resume</button>
            </a>
          </div>
        </div>

        <div className="containerRight">
          <img src={Profile} alt="" />
        </div>
      </main>
    </Element>
  );
}

export default Mainsection;
