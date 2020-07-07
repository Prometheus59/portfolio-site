import React from "react";
import SimpleCard from "./Card";
import "./Work.css";

class Work extends React.Component {
  render() {
    return (
      <div id="Work">
        <h1>Work Experience</h1>
        <div className="Cards">
          <SimpleCard
            company="Camp Keno"
            position="Camp Counsellor"
            date="June 2014 - Aug 2014"
            about="YMCA's Summer Student Work Exchange Program"
            text1="• Managed groups of 15-20 children"
            text2="• Supervised group excursions outside of the workplace"
            text3="• Ensured appropriate use of equipment & facilities"
          />
          <SimpleCard
            company="WeCan Insurance"
            position="Front-end Developer"
            date="May 2018 - Aug 2018"
            about="Created & Maintained Company Website"
            text1="• Designed, developed and hosted company website as well as managed all leads generated
            from the website"
            text2="• Preparing information, quoting insurance premiums and sending quotes to licensed WeCan
            Staff"
            text3="• Responsible for incoming mail, maintained accurate document records"
          />
          <SimpleCard
            company="Elexicon Energy"
            position="Summer Student"
            date="May 2019 - Aug 2019"
            about="Created and distributed Elexicon Energy Tools"
            text1="• Created and distributed software to increase co-worker’s productivity"
            text2="• Created and managed all outgoing disconnection notices"
            text3="• Maintained records for disconnects, reconnects, contracting, weather and IVR’s"
          />
          <SimpleCard
            company="Manulife Financial"
            position="Software Engineer"
            date="Sept 2020 - Aug 2021"
            about="Have not started working yet"
            text1="• Not sure what to expect"
            text2="• Hopefully something in fullstack"
            text3="• Will update this when I find out"
          />
        </div>
      </div>
    );
  }
}

export default Work;
