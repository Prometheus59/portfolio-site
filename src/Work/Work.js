import React from "react";
import SimpleCard from "./Card";
import "./Work.css"

class Work extends React.Component {
  render() {
    return (
      <div id="Work">
        <h1>Work Experience</h1>
        <div className="Cards">
          <SimpleCard
            company="WeCan Insurance"
            position="Technical Service Representative"
            date="May 2018 - Aug 2018"
            about="lorem ipsum yada yada yee"
          />
          <SimpleCard
            company="Camp Keno"
            position="Camp Counsellor"
            date="June 2014 - Aug 2014"
            about="lorem ipsum yada yada yee"
          />
        </div>
      </div>
    );
  }
}

export default Work;
