import React from "react";
import JobList from "./Jobs";
import "../styles/Experience.css";
import { Fade } from "react-awesome-reveal";

class Experience extends React.Component {
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
    return (
      <div id="experience">
        <Fade direction="down" triggerOnce={true}>
          <div className="section-header ">
            <span className="section-title">
              <span className="section-dash">/</span> experience
            </span>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <JobList></JobList>
        </Fade>
      </div>
    );
  }
}

export default Experience;
