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
import * as text from "./common/textinfo";

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
          {text.intro}
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Home;
