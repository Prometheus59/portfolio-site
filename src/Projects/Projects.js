import "./Projects.css";
import Carousel from "./Carousel";
import lucidplatform from "../Static/project_images/lucid-platform-cover.png";
import wecan from "../Static/project_images/WeCanInsurace.png";
import elexicon from "../Static/project_images/elexicon-energy.png";
import ProjectCard from "./ProjectCard";
import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="default ProjectStyle">
        <h1 id="Projects" className="title">
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
              imglink={elexicon}
              title="Elexicon Energy Tools"
              description="Variety of tools for the Credit department"
              githublink="https://github.com/Prometheus59/Elexicon-Energy"
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
