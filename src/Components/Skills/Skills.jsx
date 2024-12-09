import React, { useState } from "react";
import { Element } from "react-scroll";
import "./Skills.css";

function Skills() {
  const [html, setHtml] = useState(80);
  const [css, setCss] = useState(70);
  const [javascript, setJavascript] = useState(85);
  const [react, setReact] = useState(80);

  const handleHtmlChange = (e) => setHtml(e.target.value);
  const handleCssChange = (e) => setCss(e.target.value);
  const handleJavascriptChange = (e) => setJavascript(e.target.value);
  const handleReactChange = (e) => setReact(e.target.value);

  const getSliderBackground = (value) => {
    return `linear-gradient(to right, #06D001 ${value}%, #ddd ${value}%)`;
  };

  return (
    <Element name="skills">
      <h1 className="skill">Skills</h1>
      <div className="skillscontainer">
        <div className="skillSection">
          <h2>Technical Skills</h2>

          {/* HTML Skill */}
          <label htmlFor="html-range">HTML</label>
          <div className="slider-range">
            <input
              type="range"
              id="html-range"
              min="0"
              max="100"
              value={html}
              onChange={handleHtmlChange}
              step="1"
              className="slider"
              style={{ background: getSliderBackground(html) }} // Apply dynamic background
            />
            <span
              className="tooltip"
              style={{ left: `${html}%`, transform: `translateX(-${html}%)` }}
            >
              {html}%
            </span>
          </div>

          {/* CSS Skill */}
          <label htmlFor="css-range">CSS</label>
          <div className="slider-range">
            <input
              type="range"
              id="css-range"
              min="0"
              max="100"
              value={css}
              onChange={handleCssChange}
              step="1"
              className="slider"
              style={{ background: getSliderBackground(css) }}
            />
            <span
              className="tooltip"
              style={{ left: `${css}%`, transform: `translateX(-${css}%)` }}
            >
              {css}%
            </span>
          </div>

          {/* JavaScript Skill */}
          <label htmlFor="javascript-range">JavaScript</label>
          <div className="slider-range">
            <input
              type="range"
              id="javascript-range"
              min="0"
              max="100"
              value={javascript}
              onChange={handleJavascriptChange}
              step="1"
              className="slider"
              style={{ background: getSliderBackground(javascript) }}
            />
            <span
              className="tooltip"
              style={{
                left: `${javascript}%`,
                transform: `translateX(-${javascript}%)`,
              }}
            >
              {javascript}%
            </span>
          </div>

          {/* React Skill */}
          <label htmlFor="react-range">React.js</label>
          <div className="slider-range">
            <input
              type="range"
              id="react-range"
              min="0"
              max="100"
              value={react}
              onChange={handleReactChange}
              step="1"
              className="slider"
              style={{ background: getSliderBackground(react) }}
            />
            <span
              className="tooltip"
              style={{ left: `${react}%`, transform: `translateX(-${react}%)` }}
            >
              {react}%
            </span>
          </div>
        </div>

        <div className="extraSkills">
          <h2>Professional Skills</h2>
          <ul>
            <li>
              Problem Solving
              <p>
                Ability to approach complex issues with analytical thinking and
                devise effective solutions in a timely manner.
              </p>
            </li>
            <li>
              Project Management
              <p>
                Experience in planning, executing, and overseeing projects to
                ensure deadlines are met while maintaining quality.
              </p>
            </li>
            <li>
              Communication Skills
              <p>
                Strong verbal and written communication skills for presenting
                ideas clearly, collaborating with teams, and interacting with
                clients.
              </p>
            </li>
            <li>
              Team Collaboration
              <p>
                Skilled in working within cross-functional teams, promoting a
                collaborative environment, and contributing to team success.
              </p>
            </li>
            <li>
              Time Management
              <p>
                Excellent organizational skills with the ability to manage
                multiple tasks and meet deadlines without compromising quality.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
}

export default Skills;
