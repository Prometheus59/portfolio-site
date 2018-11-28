import "./Projects.css";
import imgfile from "../Static/project_images/tempfile.jpg";
import ProjectCard from "./ProjectCard";
import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="default ProjectStyle">
        <h1 id="projects" className="title">
          Projects
        </h1>
        <div id='Featured'>
          <h3 class>Featured Projects</h3>
          <div className="ProjectCards">
            <ProjectCard
              imglink={imgfile}
              title="Project 1"
              description="This is a sample description"
            />
            <ProjectCard
              imglink={imgfile}
              title="Project 2"
              description="Sample Description"
            />
            <ProjectCard
              imglink={imgfile}
              title="Project 3"
              description="Sample Description"
            />
          </div>
        </div>

        <h3>Other Projects</h3>
        <ul className="list">
          <li>Project1</li>
          <li>Project2</li>
          <li>Project3</li>
        </ul>
      </div>
    );
  }
}

export default Projects;
