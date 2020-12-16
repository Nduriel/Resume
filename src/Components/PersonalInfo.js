import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";
import * as textinfo from "./common/textinfo";
import { FadeTransform, Fade } from "react-animation-components";

function PersonalInfo() {
  return (
    <Jumbotron fluid id="main">
      <Container fluid>
        <Row
          style={{
            justifyContent: "center",
            margin: "10px",
            marginBottom: "40px",
          }}
        >
          <Fade in>
            <Media id="youknow" src="./images/more-you-know.gif" />
          </Fade>
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
            <Col> {textinfo.hobbies}</Col>
          </FadeTransform>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default PersonalInfo;
