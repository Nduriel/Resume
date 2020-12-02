import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";

function PersonalInfo() {
  return (
    <Jumbotron fluid id="main">
      <Container fluid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
           
            <Media>
              <Media left href="#">
                <Media object style={size.image} src="./images/workout.jpg" alt="WorkoutPic" />
              </Media>
              <Media style={{paddingLeft: "25px"}} body>
                <Media heading >Early Life</Media>
                <p>
                  My full name is Jean-Eric Andr'e Pierre-Louis and I was born
                  in Charleston, South Carolina. Around the age of 5, my family
                  moved to Groton, Conneticut. We were, and still are a military
                  family. When I turned 13, my father got another duty station
                  in Virgina Beach, Va. My parents are still in Virgina Beach to
                  this day.
                </p>
                <p>
                  Growing up, I loved to draw, read and play basketball. During my time in Green Run High
                  School, I was in the marching band and played the Baritone
                  (Euphonium). My favorite subjects had always been Science and French. 
                </p>
              </Media>
            </Media>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

const size = {
  image: {
    width: "300px",
    height: "auto",
  },
};

export default PersonalInfo;
