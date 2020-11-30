import React from "react";
import { Col, Row, Container } from "reactstrap";

function FooterComponent() {
  return (
    <footer className="site-footer">
      <Container fluid>
        <Row>
          <Col className="text-center" xs={6} sm={6} lg={6}>
            <span style={{ fontSize: "20px" }}>Site-Map</span>
            <div style={{ padding: "5px" }}>
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
          <Col className="text-center" xs={6} sm={6} lg={6}>
            <ul className="list-unstyled">
              <li>You can reach my by: </li>
              <li>
                {" "}
                <a
                  role="button"
                  className="btn btn-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:aros0885@gmail.com"
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
                  href="tel:+7575750080"
                >
                  <i className="fa fa-phone fa-lg" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
