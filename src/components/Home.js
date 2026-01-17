import React from "react";
import Typist from "react-text-typist";
import "../styles/Home.css";
import { Fade } from "react-awesome-reveal";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

class NavBar extends React.Component {
  render() {
    return (
      <div id="home">
        <Fade direction="down" triggerOnce={true}>
          <Typist
            className="typist-text"
            sentences={["hi, i'm Adi"]}
            typingSpeed={200}
            startDelay={1000}
            loop={false}
          />

          <div className="home-subtitle">I create stuff sometimes.</div>
        </Fade>

        <Fade>
          <div className="home-description">
            I am a fourth-year mathematics student at the{" "}
            <a
              className="university-link"
              href="https://untz.ba/"
              rel="noreferrer"
              target="_blank"
            >
              University of Tuzla
            </a>
            . I am interested in programming, data science and game development.
          </div>
        </Fade>
        <Fade direction="up" triggerOnce={true}>
          <a href="mailto:dzombicadi@icloud.com" className="home-contact">
            <EmailRoundedIcon className="home-contact-icon"></EmailRoundedIcon>
            {}Say hi!
          </a>
        </Fade>
      </div>
    );
  }
}

export default NavBar;
