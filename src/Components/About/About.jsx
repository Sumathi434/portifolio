import React from "react";
import { Element } from "react-scroll";
import './About.css';

function About() {
  return (
    <Element name="about">
      <div className="aboutContainer">
        <h1>About Me</h1>
        <div className="aboutsection">
        <p>
          Hi, I'm <strong>Nagasumathi Vadugu</strong>, a certified full-stack
          developer with a deep passion for frontend development. I specialize
          in creating visually appealing, user-friendly, and responsive websites
          that provide an exceptional user experience.
        </p>
        <p>
          Through my journey in web development, I have honed my skills in
          modern technologies like HTML, CSS, JavaScript, React, and more. While
          my full-stack certification has equipped me with a broad understanding
          of the development process, my true passion lies in the creative and
          dynamic aspects of frontend development.
        </p>
        <p>
          My goal is to continuously improve my skills, stay updated with
          industry trends, and contribute to building impactful digital
          experiences. I'm driven by a desire to bring ideas to life through
          code and design, and I'm excited to apply my expertise to meaningful
          projects.
        </p>
        
          <p>
            Please check out my portfolio, and I'd love the opportunity to
            collaborate with you!
          </p>
        </div>
       
      </div>
    </Element>
  );
}

export default About;
