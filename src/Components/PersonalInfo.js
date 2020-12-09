import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";
import * as textinfo from "./common/textinfo";

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
          <Media id="youknow" src="./images/more-you-know.gif" />
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {textinfo.earlylife}
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col>{textinfo.militaryService}</Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col> {textinfo.hobbies}</Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default PersonalInfo;
