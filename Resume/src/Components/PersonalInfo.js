import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";
import * as textinfo from "./common/textinfo";
import { FadeTransform, Fade } from "react-animation-components";

function PersonalInfo() {
  return (
    <Jumbotron fluid id="main">
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h1 style={size.headerSpace}>About Me</h1>
          </Col>
        </Row>
        <Row>
          <FadeTransform
            enterTransform="translateX(0px)"
            exitTransform="translateX(-60px)"
            in
          >
            <Col lg={12} md={12} sm={12} xs={12}>
              {textinfo.earlylife}
            </Col>
          </FadeTransform>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <FadeTransform
            enterTransform="translateX(0px)"
            exitTransform="translateX(60px)"
            in
          >
            <Col>{textinfo.militaryService}</Col>
          </FadeTransform>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <FadeTransform
            enterTransform="translateX(0px)"
            exitTransform="translateX(-60px)"
            in
          >
            <Col>{textinfo.hobbies}</Col>
          </FadeTransform>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            margin: "10px",
            marginTop: "40px",
          }}
        >
          <Fade in>
            <Media
              id="youknow"
              alt="introPer"
              src="../images/gifs/more-you-know.gif"
            />
          </Fade>
        </Row>
      </Container>
    </Jumbotron>
  );
}

const size = {
  headerSpace: {
    marginBottom: "50px",
    color: "goldenrod",
  },
};

export default PersonalInfo;
