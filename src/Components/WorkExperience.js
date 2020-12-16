import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";
import * as text from "./common/textinfo";
import { Fade, Stagger } from "react-animation-components";

function WorkExperience() {
  return (
    <Jumbotron id="main" fluid>
      <h5 className="text-center" id="top">
        <a href="#WorkExp">Work Experience</a> -{" "}
        <a href="#Education">Education</a> -{" "}
        <a href="#Honors">Honors and Awards</a>
      </h5>
      <Container fluid>
        <h1 className="text-center" style={size.headerSpace}>
          Work Experience
        </h1>
        <Row
          style={{
            justifyContent: "center",
            margin: "10px",
            marginBottom: "100px",
          }}
        >
          <Fade in>
            <Media id="youknow" alt="workgif" src="./images/work.gif" />
          </Fade>
        </Row>
        <Stagger in>
          {text.workExp.map((item) => {
            return (
              <Fade>
                <Row style={resume}>
                  <Col>
                    <Media key={item.id}>
                      <Media left style={size.logoSpacing}>
                        <Media src={item.image} object style={size.logo} />
                      </Media>
                      <Media body>
                        <ul>
                          <Media heading>
                            <h2>{item.title}</h2>
                          </Media>
                          <i>
                            <h5>{item.position}</h5>
                            {item.dates}
                          </i>
                          <br />
                          {item.location}
                        </ul>
                        {item.experience}
                      </Media>
                    </Media>
                  </Col>
                </Row>
              </Fade>
            );
          })}
        </Stagger>
      </Container>
      <Container fluid id="Education">
        <h1 className="text-center" style={size.headerSpace}>
          Education{" "}
          <a href="#top" aria-hidden="true">
            <sub style={{ fontSize: "15px" }}>
              <i class="fa fa-arrow-up" />
            </sub>
          </a>
        </h1>
        <Row
          style={{
            justifyContent: "center",
            margin: "10px",
            marginBottom: "100px",
          }}
        >
          <Fade in>
            <Media id="youknow" alt="schoolGif" src="./images/school.gif" />
          </Fade>
        </Row>
        <Row style={resume}>
          <Col>
            <Media>
              <Media left>
                <a
                  href="https://learn.nucamp.co/course/index.php?categoryid=3"
                  role="button"
                  className="btn btn-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Media src="../images/nucamplogo.png" style={size.logo} />
                </a>
              </Media>
              {text.nucampExp}
            </Media>
          </Col>
        </Row>
        <br />
        <Row style={resume}>
          <Col>
            <Media>
              <Media left>
                <a
                  href="https://www.liberty.edu/"
                  role="button"
                  className="btn btn-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Media src="../images/libertylogo.png" style={size.logo} />
                </a>
              </Media>
              {text.libertyExp}
            </Media>
          </Col>
        </Row>
        <br />
        <Row style={resume}>
          <Col>
            <Media>
              <Media left>
                <a
                  href="https://greenrunhs.vbschools.com/"
                  role="button"
                  className="btn btn-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Media
                    className="text-center"
                    src="../images/greenrun.jpg"
                    style={size.logo}
                  />
                </a>
              </Media>
              {text.gRunExp}
            </Media>
          </Col>
        </Row>
      </Container>
      <Container fluid id="Honors">
        <h1 className="text-center" style={size.headerSpace}>
          Honors And Awards
          <a href="#top" aria-hidden="true">
            {" "}
            <sub style={{ fontSize: "15px" }}>
              <i class="fa fa-arrow-up" />
            </sub>
          </a>
        </h1>{" "}
        <Row style={resume}>
          <Col>
            <Media>
              <Media left>
                <Media
                  src="./images/trophy.png"
                  alt="trophy"
                  style={size.logo}
                />
              </Media>
              {text.honors}
            </Media>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

const resume = {
  marginTop: "5px",
  marginBottom: "2rem",
};

const size = {
  logo: {
    width: "200px",
    height: "auto",
    border: "2px solid black",
    borderStyle: "ridge",
    borderRadius: "1%",
  },
  headerSpace: {
    marginBottom: "30px",
    color: "goldenrod",
  },
  logoSpacing: {
    marginTop: "70px",
  },
};
export default WorkExperience;
