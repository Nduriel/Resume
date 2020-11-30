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
            <span style={{ fontSize: "18px" }}>You can reach my by: </span><br />
            <span>
              {" "}
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
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
