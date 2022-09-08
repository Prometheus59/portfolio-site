import React from "react";
import Slider from "react-slick";
//import PaperLink from "../Common/PaperLink";
import lucidplatform from "../Static/project_images/lucid-platform-cover.png";
import newsprnt from "../Static/project_images/news_pic.jpg";
import wloopoi from "../Static/project_images/poiwaterloo.png";
import notes from "../Static/project_images/notes.png";
import pac from "../Static/project_images/pac.png";
import cvgenerator from "../Static/project_images/cv-generator.png";
import ProjectCard from "./ProjectCard";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const { windowWidth } = this.state;
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      arrows: true,
      slidesToShow: windowWidth < 1250 ? 1 : 3,
      className: "resourceCarousel",
      centerMode: false,
      centerPadding: "60px",
    };
    return (
      <Slider {...settings}>
        <div className="resourceCarouselSlides">
          <ProjectCard
            imglink={pac}
            title="Pac-Sort"
            description="Data classification algo to classify websites"
            githublink="https://github.com/Prometheus59/pac-sort"
          />
        </div>
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
            githublink="https://github.com/Prometheus59/Cover-Letter-Generator"
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
            imglink={newsprnt}
            title="Daily Digest"
            description="Creates pdf with top posts/articles from sites"
            githublink="https://github.com/Prometheus59/print-news"
          />
        </div>
        <div className="resourceCarouselSlides">
          <ProjectCard
            imglink={lucidplatform}
            title="Lucid Dreaming Platform"
            description="Resources for lucid dreaming"
            githublink="https://github.com/Prometheus59/Lucid-Platform"
          />
        </div>
      </Slider>
    );
  }
}

export default Carousel;
