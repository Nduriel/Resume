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
                <Media
                  object
                  style={size.image}
                  src="./images/highschool.jpg"
                  alt="WorkoutPic"
                />
              </Media>
              <Media style={{ paddingLeft: "15px" }} body>
                <Media heading>Early Life</Media>
                <p>
                  My full name is Jean-Eric Andr'e Pierre-Louis and I was born
                  in Charleston, South Carolina. Around the age of 5, my family
                  moved to Groton, Conneticut. We were, and still are a military
                  family. When I turned 13, my father got another duty station
                  in Virgina Beach, Va. My parents are still in Virgina Beach to
                  this day.
                </p>
                <p>
                  Growing up, I loved to draw, read and play basketball. During
                  my time in Green Run High School, I was in the marching band
                  and played the Baritone (Euphonium). My favorite subjects had
                  always been Science and French.
                </p>
              </Media>
            </Media>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col>
            {" "}
            <Media>
              <Media style={{ paddingLeft: "15px" }} body>
                <Media heading>Hobbies and Personal Life</Media>
                <p>
                  I enjoy going to the gym and working out 5 days week. To me,
                  working out is an essential part my physical and mental
                  health. When I am not working out or coding, I am usually
                  enjoying watching Netflix shows or playing PlayStation.
                </p>
                <p>
                  I enjoy travelling as well. So far, I have been to Slovakia,
                  Budapest, France (2x), Niger Africa (2x), Cancun and Belize
                  Mexico. I plan to visit Bratislava Slovakia in 2021 when the
                  CoronaVirus pandemic is more under control.
                </p>
              </Media>
              <Media right href="#">
                <Media
                  object
                  style={size.image}
                  src="./images/workout.jpg"
                  alt="WorkoutPic"
                />
              </Media>
            </Media>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

const size = {
  image: {
    width: "200px",
    height: "auto",
  },
};

export default PersonalInfo;
