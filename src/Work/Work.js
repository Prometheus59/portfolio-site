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
            position="Front-end Developer"
            date="May 2018 - Aug 2018"
            about="Created & Maintained Company Website"
            text="
            • Designed, developed and hosted company website as well as managed all leads generated
            from the website

            • Preparing information, quoting insurance premiums and sending quotes to licensed WeCan
            Staff

            • Responsible for incoming mail, maintained accurate document records
            "
          />
          <SimpleCard
            company="Camp Keno"
            position="Camp Counsellor"
            date="June 2014 - Aug 2014"
            about="YMCA's Summer Student Work Exchange Program"
            text="
            • Managed groups of 15-20 children
            • Supervised group excursions outside of the workplace
            • Ensured appropriate use of equipment & facilities
            "
          />
        </div>
      </div>
    );
  }
}

export default Work;
