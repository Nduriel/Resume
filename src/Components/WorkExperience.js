import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";
import * as text from "./common/textinfo";
import { Fade, Stagger } from "react-animation-components";

function WorkExperience() {
  return (
    <Jumbotron id="main" fluid>
      <Container fluid>
        <h5 className="text-center" id="top">
          <a href="#WorkExp">Work Experience</a> -{" "}
          <a href="#Education">Education</a> -{" "}
          <a href="#Honors">Honors and Awards</a>
        </h5>
        {/* <Row>
        <Fade in>
        <Media id="youknow" alt="workgif" src="./images/gifs/work.gif" />
        </Fade>
          </Row> */}

        {/* Certs */}

        <Row>
          <Col>
            <Fade in>
              <Media>
                <Media body>
                  <Media heading>
                    <span style={size.headerSpace}>Certifications</span>
                  </Media>
                  <a
                    href="https://www.youracclaim.com/badges/8f8cee10-650a-4d4b-9c14-8656988b28f3"
                    role="button"
                    className="btn btn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Media
                      style={{ width: "auto", height: "120px" }}
                      alt="workgif"
                      src="./images/A+cert.png"
                    />
                  </a>
                </Media>
              </Media>
            </Fade>
          </Col>
        </Row>

        {/* Work Experience */}
        <h1 className="text-center" style={size.headerSpace}>
          Work Experience
        </h1>
        <Row style={size.listtable} className="justify-content-center">
          <Col lg="auto">
            <Stagger in>
              {text.workExp.map((item) => {
                return (
                  <Fade>
                    <Media key={item.id} className="mt-3">
                      <Media body>
                        <Media heading>
                          <h2 id="heading">
                            {item.title}
                          </h2>
                        </Media>
                        <i>
                          <h5>{item.position}</h5>
                          {item.dates}
                        </i>
                        <br />
                        {item.location}
                        {item.experience}
                      </Media>
                      <Media className="mt-5 ml-5" style={size.logoSpacing}>
                        <Media
                          object
                          src={item.image}
                          style={size.logo}
                          alt="worklogo"
                        />
                      </Media>
                    </Media>
                    <br />
                    <hr />
                  </Fade>
                );
              })}
            </Stagger>
          </Col>
        </Row>

        {/* Education */}
        <div fluid id="Education">
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
              <Media
                id="youknow"
                alt="schoolGif"
                src="./images/gifs/school.gif"
              />
            </Fade>
          </Row>
          <Row>
            <Col style={size.listtable}>
              <Media>
                <Media left style={size.logoSpacing}>
                  <a
                    href="https://www.newhorizons.com/"
                    role="button"
                    className="btn btn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Media
                      src="../images/logos/nh.png"
                      object
                      style={size.logo}
                    />
                  </a>
                </Media>
                {text.newhorizons}
              </Media>
            </Col>
            <Col style={size.listtable}>
              <Media>
                <Media left style={size.logoSpacing}>
                  <a
                    href="https://learn.nucamp.co/course/index.php?categoryid=3"
                    role="button"
                    className="btn btn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Media
                      src="../images/logos/nucamplogo.png"
                      object
                      style={size.logo}
                    />
                  </a>
                </Media>
                {text.nucampExp}
              </Media>
            </Col>
          </Row>
          <br />
          <Row style={resume}>
            <Col style={size.listtable}>
              <Media>
                <Media left style={size.logoSpacing}>
                  <a
                    href="https://www.liberty.edu/"
                    role="button"
                    className="btn btn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Media
                      src="../images/logos/libertylogo.png"
                      style={size.logo}
                      object
                    />
                  </a>
                </Media>
                {text.libertyExp}
              </Media>
            </Col>
            <Col style={size.listtable}>
              <Media>
                <Media left style={size.logoSpacing}>
                  <a
                    href="https://greenrunhs.vbschools.com/"
                    role="button"
                    className="btn btn-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Media
                      src="../images/logos/greenrun.jpg"
                      style={size.logo}
                      object
                    />
                  </a>
                </Media>
                {text.gRunExp}
              </Media>
            </Col>
          </Row>
        </div>
        <div fluid id="Honors">
          <h1 className="text-center" style={size.headerSpace}>
            Honors And Awards
            <a href="#top" aria-hidden="true">
              {" "}
              <sub style={{ fontSize: "15px" }}>
                <i class="fa fa-arrow-up" />
              </sub>
            </a>
          </h1>{" "}
          <Row style={size.listtable}>
            <Col>
              <Media>
                <Media left>
                  <Media
                    src="./images/logos/trophy.png"
                    alt="trophy"
                    style={size.logo}
                  />
                </Media>
                {text.honors}
              </Media>
            </Col>
          </Row>
        </div>
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
    marginBottom: "50px",
    color: "goldenrod",
  },
  listtable: {
    borderStyle: "ridge",
    borderRadius: "5px",
    border: "3px solid grey",
    boxShadow: "2px 2px 2px black",
    background: "rgb(83, 82, 82)",
    margin: "6px",
    marginBottom: "2rem",
  },
};
export default WorkExperience;
