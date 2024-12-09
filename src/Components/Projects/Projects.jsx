import React from "react";
import { Element } from "react-scroll";
import "./Projects.css";
import Weather from "../../assets/Images/weather.jpg";
import Calculator from "../../assets/Images/calculator.jpg";
import Foodfly from "../../assets/Images/foodfly.jpg";
import Quiz from "../../assets/Images/quiz.jpg";
import amazon from "../../assets/Images/amazon.jpg";
import Todolist from "../../assets/Images/Todolist.jpg";

function Projects() {
  return (
    <Element name="projects">
      <h1 className="projects">Projects</h1>
      <div className="projectsContainer">
        <div className="project">
          <img src={amazon} alt="amazon" />
          <div className="overlay">
            <a href="#">
              <h3>Amazon Clone</h3>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={Foodfly} alt="foodfly" />
          <div className="overlay">
            <a href="https://foodflyrestaurantapp.netlify.app/">
              <h3>FoodFly App</h3>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={Calculator} alt="calculator" loading="lazy" />
          <div className="overlay">
            <a href="https://calculatornsv.netlify.app/">
              <h3>Calculator</h3>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={Quiz} alt="quiz" />
          <div className="overlay">
            <a href="#">
              <h3>Quiz App</h3>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={Weather} alt="weather" />
          <div className="overlay">
            <a href="https://weatherappnsv.netlify.app/">
              <h3>Weather App</h3>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={Todolist} alt="todolist" />
          <div className="overlay">
            <a href="https://todolistnsv.netlify.app/">
              <h3>TodoList</h3>
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Projects;
