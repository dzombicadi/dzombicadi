import React from "react";
import "../styles/About.css";
import mypic from "../images/MyPicture.jpg";
import { Fade } from "react-awesome-reveal";

class About extends React.Component {
  render() {
    return (
      <Fade triggerOnce={true}>
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="about-header">
                  <h3 className="about-title">
                    <span>/</span> about me
                    <div class="line-mf"></div>
                  </h3>
                  <p className="about-description">
                    Brief information about me and some of my interests.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-md-7">
                    <Fade delay={500} cascade={false} triggerOnce={true}>
                      <div className="about-text">
                        <p>
                          I'm a fourth-year Mathematics and Computer Science
                          student at the University of Tuzla, with a deep
                          passion for technology and software development. My
                          academic journey has equipped me with strong
                          problem-solving skills and a solid foundation in
                          logic, algorithms, and programming. I'm particularly
                          interested in full-stack development, but I also
                          explore game development and machine learning. I enjoy
                          building creative and efficient solutions, whether
                          it's a web application, a game mechanic, or a machine
                          learning model.
                        </p>
                        As a tech and gaming enthusiast, I stay up to date with
                        the latest industry trends and tools such as:
                        <Fade direction="up" triggerOnce={true}>
                          <div className="languages-list">
                            <ul className="tech-stack">
                              <li>React.js & Node.js</li>
                              <li>JavaScript ES6+</li>
                              <li>C++</li>
                            </ul>
                            <ul className="tech-stack">
                              <li>HTML & CSS</li>
                              <li>Python</li>
                              <li>MongoDB & MySQL</li>
                            </ul>
                          </div>
                        </Fade>
                        <p>
                          Outside of coding, I like to stay active by biking,
                          running, and working out. It keeps me focused and
                          motivated. I enjoy taking on new challenges, working
                          with others, and growing as a developer and problem
                          solver.
                        </p>
                      </div>
                    </Fade>
                  </div>

                  <div className="col-md-5">
                    <Fade direction="up" triggerOnce={true}>
                      <img
                        src={mypic}
                        alt="portfolio-pic"
                        className="about-image"
                      />
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default About;
