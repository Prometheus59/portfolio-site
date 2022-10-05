import React from "react";
import "./About.css";

class Interests extends React.Component {
  render() {
    return (
      <div id="interests" className="default">
        <div id="info">
          <h2 className="header">A little bit about me</h2>
          <p>
            When I'm not coding, I enjoy practicing what I've learned from
            binging youtube cooking channels or reading up about lucid dreaming.
            When the weather's nice, you can find me trying to fish in any
            nearby body of water.
          </p>
        </div>
        <div id="info-pics">
          <h3 className="subheader">My Interests</h3>
          <ul>
            <li>
              <a href="https://open.spotify.com/track/1244xKUG27TnmQhUJlo3gU?si=bb641fc8f718496a">
                Guitar
              </a>
            </li>
            <li>Fitness</li>
            <li>
              <a href="https://github.com/Prometheus59">Programming</a>
            </li>
            <li>
              <a href="https://photos.app.goo.gl/SCVHW9jtGfu3brhb7">Fishing</a>
            </li>
            <li>Origami</li>
            <li>Lucid Dreaming</li>
            <li>
              <a href="https://www.bingingwithbabish.com/">Cooking</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Interests;
