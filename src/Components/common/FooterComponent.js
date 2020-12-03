import React from "react";
import { Col, Row, Container } from "reactstrap";

function FooterComponent() {
  return (
    <footer className="site-footer">
      <Container fluid>
        <Row>
          <Col className="text-center" xs={5} md={6} sm={6} lg={6}>
            <span style={footerHeader}>Site-Map</span>
            <div style={{ padding: "0px" }}>
              <ul className="list-unstyled">
                <li>
                  <a href="/home" style={{ color: "white" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/WorkExperience" style={{ color: "white" }}>
                    Work Experience
                  </a>
                </li>
                <li>
                  <a href="/PersonalInfo" style={{ color: "white" }}>
                    Personal Info
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="text-center" xs={7} md={6} sm={6} lg={5}>
            {" "}
            <ul id="footer">
              <span style={footerHeader}>
                Contact Info: <br />
              </span>
              <span>
                <li>
                  <a
                    role="button"
                    className="btn btn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="tel:+7575750080"
                    style={{ color: "white" }}
                  >
                    <i className="fa fa-phone fa-lg" />
                  </a>
                </li>
                <li>
                  <a
                    role="button"
                    className="btn btn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:aros0885@gmail.com"
                    style={{ color: "white" }}
                  >
                    <i className="fa fa-envelope" />
                  </a>
                </li>
                <li>
                  <a
                    role="button"
                    className="btn btn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/pierreprofile/"
                    style={{ color: "white" }}
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </span>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const footerHeader = {
  fontSize: "20px",
  borderBottom: "2px solid whitesmoke",
};

export default FooterComponent;
