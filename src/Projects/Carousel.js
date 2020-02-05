import React from "react";
import Slider from "react-slick";
//import PaperLink from "../Common/PaperLink";
import lucidplatform from "../Static/project_images/lucid-platform-cover.png";
import wecan from "../Static/project_images/WeCanInsurace.png";
import wloopoi from "../Static/project_images/poiwaterloo.png";
import notes from "../Static/project_images/notes.png";
import cvgenerator from "../Static/project_images/cv-generator.png";
import ProjectCard from "./ProjectCard";
import "../../node_modules/slick-carousel/slick/slick-theme.css"; 
import "../../node_modules/slick-carousel/slick/slick.css";

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      arrows: true,
      slidesToShow: 3,
      className: "resourceCarousel",
      centerMode: false,
      centerPadding: "60px"
    };
    return (
      <Slider {...settings}>
        <div className="resourceCarouselSlides">
          <ProjectCard
            imglink={notes}
            title="Note Board"
            description="A note server accessed and modified by clients"
            githublink="https://github.com/Prometheus59/ClientServer"
          />
        </div>
        <div className="resourceCarouselSlides">
          <ProjectCard
            imglink={cvgenerator}
            title="Cover Letter Generator"
            description="Tool to create generic/custom/boring cv's"
            githublink="https://github.com/Prometheus59/Elexicon-Energy"
          />
        </div>
        <div className="resourceCarouselSlides">
          <ProjectCard
            imglink={wloopoi}
            title="Waterloo POI"
            description="Points of interest around Waterloo, ON"
            githublink="https://github.com/Prometheus59/Waterloo-POI"
          />
        </div>
        <div className="resourceCarouselSlides">
          <ProjectCard
            imglink={wecan}
            title="WeCan Insurance Website"
            description="Website built for WeCan Insurance"
            githublink="https://github.com/Prometheus59/WeCanWebsiteV2"
          />
        </div>
      </Slider>
    );
  }
}

export default Carousel;
