import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

class ExternalLinks extends React.Component {
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
      <span className="external-links">
        <a
          className="github-icon"
          href={this.props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "#ccd6f6",
              backgroundColor: "transparent",
            }}
          ></GitHubIcon>
        </a>
        {this.props.openLink && (
          <a
            className="open-icon"
            href={this.props.openLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <OpenInBrowserIcon
              style={{
                fontSize: 25,
                color: "#ccd6f6",
                backgroundColor: "transparent",
              }}
            ></OpenInBrowserIcon>
          </a>
        )}
      </span>
    );
  }
}

export default ExternalLinks;
