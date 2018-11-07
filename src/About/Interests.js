import React from "react";
import "./About.css";

class Interests extends React.Component {
  render() {
    return (
      <div id="interests" className='default'>
        <div id='info'>
          <h2 className='header'>A little bit about me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            atque similique consectetur tenetur, placeat fugit aut. Sequi id,
            ipsum porro dolor obcaecati atque sint neque voluptatibus ratione
            quasi qui eveniet tempora eum adipisci ex suscipit quis quibusdam
            dicta, a eligendi!
          </p>
        </div>
        <div id='info-pics'>
            <h3 className='subheader'>My Interests</h3>
            <ul>
                <li>Coding</li>
                <li>Fitness</li>
                <li>Fishing</li>
                <li>Origami</li>
                <li>Lucid Dreaming</li>
                <li>Cooking</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Interests;