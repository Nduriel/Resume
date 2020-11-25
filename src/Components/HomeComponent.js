import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";
import { mePic } from "./common/images/photos";

function Home() {
  return (
    <>
      <Jumbotron>
        <Container fluid>
          <Row>
            <Col lg={6}>
              <Media object alt="Me" src={mePic} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
