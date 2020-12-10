import React from "react";
import { Col, Row, Container } from "reactstrap";

function FooterComponent() {
  return (
    <footer className="site-footer">
      <Container fluid>
        <Row>
          <Col className="text-center" xs={5} md={6} sm={6} lg={6}>
            <div style={{ padding: "0px" }}>
              <ul className="list-unstyled">
                <span style={footerHeader}>
                  Site-Map
                  <br />
                </span>
                <span>
                  <li>
                    <a href="/home" style={spacing}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/WorkExperience" style={spacing}>
                      Work Experience
                    </a>
                  </li>
                  <li>
                    <a href="/PersonalInfo" style={spacing}>
                      Personal Info
                    </a>
                  </li>
                </span>
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
                .
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
                .
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
  fontWeight: "bold",
  borderBottom: "4px solid darkgrey",
  borderBottomStyle: "ridge",
  textShadow: "2px 2px 1px black",
  color: "white",
};

const spacing = {
  fontSize: "16px",
  color: "white",
};

export default FooterComponent;
