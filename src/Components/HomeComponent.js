import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";

function Home() {
  return (
    <Jumbotron id="main" fluid>
      <Container fluid>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <Media object src={"./images/Me.jpg"} alt="Me" />

            <p>
              Hello! My Name is Jean-Eric Pierre-Louis and I am a United States
              Marine Corps Veteran and Web Developer.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Home;
