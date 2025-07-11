import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  Built & designed by{" "}
                  <a
                    className="copyright-link"
                    href="https://github.com/dzombicadi"
                  >
                    <strong>Adi Dzombic</strong>
                  </a>
                  .
                </p>
                <div className="rights">All rights reserved. ©</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
