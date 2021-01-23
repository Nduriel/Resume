import React, { useState } from "react";
import { carouselPic } from "./common/carouselPics";
import { FadeTransform } from "react-animation-components";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === carouselPic.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carouselPic.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = carouselPic.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    <Jumbotron id="main" fluid>
      <Container fluid>
        <Row style={{ alignItems: "center" }}>
          <Col
            lg={{ size: 5, offset: 1 }}
            md={{ offset: 1 }}
            sm={{ size: 10, offset: 1 }}
            xs={12}
            className="text-center"
          >
            <FadeTransform
              enterTransform="translateX(0px)"
              exitTransform="translateX(-120px)"
              in
            >
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={carouselPic}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
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
              &nbsp;, and attend{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://newhorizons.com/"
              >
                <i style={{ color: "limegreen" }}>New Horizons</i>
              </a>
              &nbsp; where I am studying for various IT certifications.
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Home;
