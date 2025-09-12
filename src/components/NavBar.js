import React from "react";
import "../styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="menu-name">
            Adi Dzombic
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-links" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-links" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-links" href="#projects">
              Work
            </Nav.Link>
            <Nav.Link
              className="nav-links"
              href="https://drive.google.com/drive/folders/1vOOb0MDQAp3S9cp4UVXDDw9WVyukgMJ8?usp=sharing"
              target="_blank"
            >
              College
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link
              className="nav-icon-links"
              href="mailto:dzombicadi@icloud.com"
            >
              <MailRoundedIcon></MailRoundedIcon>
            </Nav.Link>
            <Nav.Link
              className="nav-icon-links"
              href="https://github.com/dzombicadi"
              target="_blank"
            >
              <GitHubIcon></GitHubIcon>
            </Nav.Link>
            <Nav.Link
              className="nav-icon-links"
              href="https://www.linkedin.com/in/dzombicadi/"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 25 }}></LinkedInIcon>
            </Nav.Link>
            <Nav.Link
              id="college-link"
              className="nav-icon-links"
              href="https://drive.google.com/drive/folders/1vOOb0MDQAp3S9cp4UVXDDw9WVyukgMJ8?usp=sharing"
              target="_blank"
            >
              <SchoolIcon></SchoolIcon>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
