import React from "react";
import "./About.css";

class Interests extends React.Component {
  render() {
    return (
      <div id="interests" className='default'>
        <div id='info'>
          <h2 className='header'>A little bit about me</h2>
          <p>
          When I'm not coding, I enjoy practicing what I've learned from binging youtube cooking channels or reading up about lucid dreaming. When the weather's nice, you can find me trying to fish in any nearby body of water.
          </p>
        </div>
        <div id='info-pics'>
            <h3 className='subheader'>My Interests</h3>
            <ul>
                <li>Guitar</li>
                <li>Fitness</li>
                <li>Programming</li>
                <li><a href="https://photos.google.com/share/AF1QipO9eFH18AnBJ6I99ykS3-Hjq6DcBo7E9e2SqQgi_jkdAQPqu5hle5iem0YOcHFf6w/photo/AF1QipOesZE1z7rX2P_gapZ3P9lwkUK8X__gI8fmEBR6?key=SkZ3VGFHYXgtMkE4RFFkbURKWVctSnNORjlTd3Jn">Fishing</a></li>
                <li>Origami</li>
                <li>Lucid Dreaming</li>
                <li><a href="https://www.bingingwithbabish.com/">Cooking</a></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Interests;