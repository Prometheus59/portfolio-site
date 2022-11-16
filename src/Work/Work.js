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
            company="Manulife Financial"
            position="Software Engineer"
            date="Sept 2020 - Aug 2021"
            about="Full-Stack Developer for Group Benefits Division"
            text1="• Front-end development for the next generation of group benefit onboarding with React, Redux"
            text2="• Back-end development for group benefit core services utilizing GraphQL and SQL"
            text3="• Spearheaded performance testing with Artillery scripts & accessibility testing to WCAG & AODA standards"
          />
          <SimpleCard
            company="Elexicon Energy"
            position="Database Engineer"
            date="July 2020 - August 2020"
            about="Merged databases from company merger"
            text1="• Managed testing and deployment of SSRS reports to Sharepoint & IBM Cognos"
            text2="• Created and modified complex SQL Queries across multiple databases"
            text3="• Assisted with server migration resulting from a company merger"
          />
          <SimpleCard
            company="Elexicon Energy"
            position="Credit Dept. Contractor"
            date="May 2019 - Aug 2019"
            about="Created and distributed Elexicon Energy Tools"
            text1="• Created and distributed software to increase co-worker’s productivity"
            text2="• Created and managed all outgoing disconnection notices"
            text3="• Maintained records for disconnects, reconnects, contracting, weather and IVR’s"
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
            text3="• Developed a JavaScript program to perform insurance premium calculations, reducing overall task time by ~ 30%"
          />
          <SimpleCard
            company="Camp Keno"
            position="Camp Counsellor"
            date="June 2014 - Aug 2014"
            about="YMCA's Summer Student Work Exchange Program"
            text1="• Managed groups of 15-20 children"
            text2="• Supervised group excursions outside of the workplace"
            text3="• Ensured appropriate use of equipment & facilities"
          />
        </div>
      </div>
    );
  }
}

export default Work;
