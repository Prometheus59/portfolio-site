import React, { Component } from "react";
import "./Technology.css";
import pythonimg from "./../Static/project_images/python.ico";
import html5img from "./../Static/project_images/html5.png";
import css3img from "./../Static/project_images/CSS3.png";
import javascriptimg from "./../Static/project_images/jslogo.png";
import cimg from "./../Static/project_images/c.png";
import githubimg from "./../Static/project_images/git-logooo.png";
import psqlimg from "./../Static/project_images/psql.png";
import reactimg from "./../Static/project_images/react.png";
import SASSimg from "./../Static/project_images/SASS.png";
import java from "./../Static/project_images/java.png";
import node from "./../Static/project_images/node.png";
import sql from "./../Static/project_images/sql.png";

class Technology extends Component {
  render() {
    return (
      <div id="Technology" className="default">
        <h3 className="title">Programming Languages</h3>
        <ul className="list">
          <li>
            <img src={pythonimg} alt="python" />
          </li>
          <li>
            <img src={java} alt="java" />
          </li>
          <li>
            <img src={javascriptimg} alt="javascript" />
          </li>
          <li>
            <img src={cimg} alt="c" />
          </li>
          <li>
            <img src={sql} alt="sql" />
          </li>
        </ul>

        <h2 className="title">Technical Tools</h2>
        <ul className="list">
          <li>
            <img src={html5img} alt="html5" />
          </li>
          <li>
            <img src={css3img} alt="css3" />
          </li>
          <li>
            <img src={node} alt="node" />
          </li>
          <li>
            <img src={githubimg} alt="github" />
          </li>
          <li>
            <img src={reactimg} alt="react" />
          </li>
          <li>
            <img src={SASSimg} alt="sass" />
          </li>
          <li>
            <img src={psqlimg} alt="psql" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Technology;
