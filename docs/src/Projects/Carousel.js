import React from "react";
import Slider from "react-slick";
//import PaperLink from "../Common/PaperLink";
import lucidplatform from "../Static/project_images/lucid-platform-cover.png";
import wecan from "../Static/project_images/WeCanInsurace.png";
import wloopoi from "../Static/project_images/poiwaterloo.png";
import snappy from "../Static/project_images/snappy.jpg";
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
            imglink={lucidplatform}
            title="Lucid Dreaming Platform"
            description="Resources for lucid dreaming"
            githublink="https://github.com/Prometheus59/Lucid-Platform"
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
            imglink={snappy}
            title="Snappy"
            description="Smart scheduling system for Instagram"
            githublink="https://github.com/Prometheus59/Snappy"
          />
        </div>
      </Slider>
    );
  }
}

export default Carousel;
