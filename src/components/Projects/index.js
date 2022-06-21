import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { projectsData } from "./projectsData";
import Tilt from "react-tilt";

const Projects = () => {
  return (
    <main>
      <section className="projects">
        <div className="projects__bio__image">
          <h1 className="text-secondary">My Projects</h1>
        </div>
        <div className="projects__items">
          {projectsData.map((item, index) => (
            <Tilt className="Tilt" options={{ max: 25, scale: 1.02 }}>
              <div key={index} className="projects__item">
                <img src={item.image} alt="my project" />
                <div className="projects__btns">
                  <a className="projects__btn" href="#">
                    <FaEye /> Preview
                  </a>
                  <a className="projects__btn" href="#">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
