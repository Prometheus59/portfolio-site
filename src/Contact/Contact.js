import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import emailimg from "./../Static/project_images/email.png";
import githubimg from "./../Static/project_images/github.png";
import linkedinimg from "./../Static/project_images/linkedin.png";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div id="Contact" className="default">
        <h1>Contact</h1>
        <div className="contact">
          <Tooltip title="ryankarumanchery@gmail.com" enterDelay="500">
            <li>
              <a href="mailto:ryankarumanchery@gmail.com">
                <img src={emailimg} alt="email" />
              </a>
            </li>
          </Tooltip>
          <Tooltip title="Prometheus59" enterDelay="500">
            <li>
              <a href="https://github.com/Prometheus59">
                <img src={githubimg} alt="github" />
              </a>
            </li>
          </Tooltip>
          <Tooltip title="ryankarumanchery" enterDelay="500">
            <li>
              <a href="https://www.linkedin.com/in/rkarumanchery/">
                <img src={linkedinimg} alt="linkedIn" />
              </a>
            </li>
          </Tooltip>
        </div>
        <h2 className="text-pop-up-top">Hire me!</h2>
      </div>
    );
  }
}

export default Contact;
