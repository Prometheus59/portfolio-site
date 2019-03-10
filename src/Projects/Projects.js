import "./Projects.css";
import Carousel from "./Carousel";
import lucidplatform from "../Static/project_images/lucid-platform-cover.png";
import wecan from "../Static/project_images/WeCanInsurace.png";
import wloopoi from "../Static/project_images/poiwaterloo.png";
import ProjectCard from "./ProjectCard";
import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="default ProjectStyle">
        <h1 id="projects" className="title">
          Projects
        </h1>
        <div id="Featured">
          <h3>Featured Projects</h3>
          <div className="ProjectCards">
            <ProjectCard
              imglink={lucidplatform}
              title="Lucid Dreaming Platform"
              description="Resources for lucid dreaming"
              githublink="https://github.com/Prometheus59/Lucid-Platform"
            />
            <ProjectCard
              imglink={wecan}
              title="WeCan Insurance Website"
              description="Website built for WeCan Insurance"
              githublink="https://github.com/Prometheus59/WeCanWebsiteV2"
            />
            <ProjectCard
              imglink={wloopoi}
              title="Waterloo POI"
              description="Points of interest around Waterloo, ON"
              githublink="https://github.com/Prometheus59/Waterloo-POI"
            />
          </div>
        </div>

        <h3>Other Projects</h3>
        <Carousel />
      </div>
    );
  }
}

export default Projects;
