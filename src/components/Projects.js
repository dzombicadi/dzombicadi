import React from "react";
import "../styles/Projects.css";
import ExternalLinks from "./ExternalLinks.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import { Fade } from "react-awesome-reveal";

import hackathonImage from "../images/hackathon.png";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const spotlightProjects = {
      "EESTEC Hackathon 2024": {
        title: "EESTEC Hackathon",
        desc: "Built a social media app with fully functional chat system in 24 hours.",
        techStack: "React & Firebase",
        link: "https://github.com/dzombicadi/socialmediaapp-templors",
        open: "https://www.instagram.com/p/DB-6gNDI58S/?utm_source=ig_web_copy_link",
        image: hackathonImage,
      },
    };

    const projects = {
      "EESTEC Hackathon 2024": {
        desc: "Built a social media app with fully functional chat system in 24 hours.",
        techStack: "React & Firebase",
        link: "https://github.com/dzombicadi/socialmediaapp-templors",
        open: "https://www.instagram.com/p/DB-6gNDI58S/?utm_source=ig_web_copy_link",
      },
    };

    return (
      <div id="projects">
        <Fade direction="down" triggerOnce={true}>
          <div className="section-header ">
            <span className="section-title">
              <span className="section-dash">/</span> experience
            </span>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <Carousel>
            {Object.keys(spotlightProjects).map((key, i) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={spotlightProjects[key]["image"]}
                  alt={key}
                />
                <div className="caption-bg">
                  <Carousel.Caption>
                    <h3>{spotlightProjects[key]["title"]}</h3>
                    <p>
                      {spotlightProjects[key]["desc"]}
                      <p className="techStack">
                        {spotlightProjects[key]["techStack"]}
                      </p>
                    </p>
                    <ExternalLinks
                      githubLink={spotlightProjects[key]["link"]}
                      openLink={spotlightProjects[key]["open"]}
                    ></ExternalLinks>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <div className="project-container">
            <ul className="projects-grid">
              {Object.keys(projects).map((key, i) => (
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              ))}
            </ul>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Projects;
