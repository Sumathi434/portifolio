import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";
import PDF from "../../assets/PDF/Resume.pdf";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <Element name="contact">
      <footer>
        <div className="contactDetails">
          <h1>Contact Details</h1>
          <p>nagasumathiv@gmail.com</p>
          <div className="icons">
          <a href="https://www.instagram.com/nagasumathi_vadugu/">
            <FaInstagram/>
          </a>

          <a href="https://www.linkedin.com/in/nagasumathi-vadugu/">
            <FaLinkedin/>
          </a>
          <a href="https://x.com/NagasumathiV">
            <FaTwitter/>
          </a>
          <a href="https://github.com/Sumathi434">
            <FaGithub/>
          </a>
        </div>
        <div className="Resumebtn">
          <a href={PDF} download>
            <button>Download Resume</button>
          </a>
        </div>
       <p> © 2024 Naga Sumathi Vadugu. All rights reserved.</p>
      </div>
      </footer>
    </Element>
  );
}

export default Contact;
