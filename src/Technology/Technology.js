import React, { Component } from "react";
import "./Technology.css";
import Tooltip from "@material-ui/core/Tooltip";
import pythonimg from "./../Static/project_images/python.ico";
import html5img from "./../Static/project_images/html5.png";
import css3img from "./../Static/project_images/CSS3.png";
import javascriptimg from "./../Static/project_images/jslogo.png";
import cimg from "./../Static/project_images/c.png";
import git from "./../Static/project_images/git-logooo.png";
import psqlimg from "./../Static/project_images/psql.png";
import reactimg from "./../Static/project_images/react.png";
import SASSimg from "./../Static/project_images/SASS.png";
import java from "./../Static/project_images/java.png";
import node from "./../Static/project_images/node.png";
import sql from "./../Static/project_images/sql.png";
import graphQL from "./../Static/project_images/graphql.png";
import artillery from "./../Static/project_images/artilleryimg.png";
import jest from "./../Static/project_images/jest.png";
import mongodb from "./../Static/project_images/mongodb.png";
import typescript from "./../Static/project_images/TS_logo.png";
import redux from "./../Static/project_images/redux-icon.png";

class Technology extends Component {
  render() {
    return (
      <div id="Technology" className="default">
        <h3 className="title">Programming Languages</h3>
        <ul className="list">
          <li>
            <Tooltip title="JavaScript">
              <img src={javascriptimg} alt="javascript" />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Python">
              <img src={pythonimg} alt="python" />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Java">
              <img src={java} alt="java" />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="C">
              <img src={cimg} alt="c" />
            </Tooltip>
          </li>
          <li>
            <Tooltip title="SQL">
              <img src={sql} alt="sql" />
            </Tooltip>
          </li>
        </ul>

        <h2 className="title">Technical Tools</h2>
        <ul className="list">
          <li>
            <Tooltip title="Node.js">
              <a href="https://nodejs.org/en/">
                <img src={node} alt="node" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Git">
              <a href="https://git-scm.com/">
                <img src={git} alt="git" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="React.js">
              <a href="https://reactjs.org/">
                <img src={reactimg} alt="react" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="TypeScript">
              <a href="https://www.typescriptlang.org/">
                <img src={typescript} alt="typescript" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Redux">
              <a href="https://react-redux.js.org/">
                <img src={redux} alt="redux" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="HTML">
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <img src={html5img} alt="html5" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="CSS">
              <a href="https://www.w3.org/Style/CSS/Overview.en.html">
                <img src={css3img} alt="css3" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="SASS">
              <a href="https://sass-lang.com/">
                <img src={SASSimg} alt="sass" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="PSQL">
              <a href="https://www.postgresql.org/">
                <img src={psqlimg} alt="psql" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="GraphQL">
              <a href="https://graphql.org/">
                <img src={graphQL} alt="graphql" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Artillery">
              <a href="https://artillery.io/">
                <img src={artillery} alt="artillery.io" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Jest">
              <a href="https://jestjs.io/">
                <img src={jest} alt="Jest" />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="MongoDB">
              <a href="https://www.mongodb.com/">
                <img src={mongodb} alt="MongoDB" />
              </a>
            </Tooltip>
          </li>
        </ul>
      </div>
    );
  }
}

export default Technology;
