import React from "react";
import { Jumbotron, Container, Row, Col, Media } from "reactstrap";
import { FadeTransform  } from 'react-animation-components';

function Home() {
  return (
    <Jumbotron id="main" fluid>
      <Container fluid>
        <Row style={{ alignItems: "center" }}>
          <Col lg={5} md={12} sm={12} className="text-center">
            <FadeTransform enterTransform="translateX(0px)" exitTransform="translateX(-120px)" in>
            <Media id="homePic" object src={"./images/Me1.jpg"} alt="Me" />
            </FadeTransform>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <p className="infobox">
              &nbsp;&nbsp;Hello! My Name is Jean-Eric Pierre-Louis "Pierre" and
              I am a United States Marine Corps Veteran and Web Developer. This
              page will help you get to know about me, my desires and my life! I
              hope you enjoy!
            </p>
            <p className="infobox">
              &nbsp;&nbsp;I am Full Stack Web Developer and recent graduate from
              Nucamp Coding Bootcamp. Since graduation, my skills have been put
              to the test creating and managing various websites including{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://polishedBymia.com"
              >
                <i style={{ color: "#e60073" }}>Polished By Mia</i>
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pierrenradyllc.netlify.app/"
              >
                <i style={{ color: "gold" }}>Pierre&RadyLLC</i>
              </a>
              &nbsp;<i>(in development)</i>.
            </p>
            <p className="infobox">
              &nbsp;&nbsp;My primary focuses is React, React Native, JavaScript
              and HTML/CSS. I also create various parsing programs used to help
              facilitate credit card production for{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://pierrenradyllc.netlify.app/"
              >
                <i style={{ color: "gold" }}>Pierre&RadyLLC</i>
              </a>
              . Currently, I study with&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.pluralsight.com/"
              >
                Plural Sight
              </a>
              &nbsp;and maintain a working knowledge of today Web Development
              standards.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Home;
