import React from "react";
import { Col, Row } from "reactstrap";

function Footer() {
  return (
    <>
      <footer className="site-footer">
          <Row style={{flexDirection: 'row'}}>
            <Col lg={4} sm={4} xs={4} className="text-center">
              <h4 style={footerHeader}>Social</h4>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" />
              </a>{" "}
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square" />
              </a>{" "}
              <br />
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter" />
              </a>{" "}
            </Col>
            <Col lg={4} sm={4} xs={4} className="text-center">
              <h4 style={footerHeader}>Questions?</h4>
              <a
                role="button"
                className="btn btn-link"
                target="_blank"
                rel="noopener noreferrer"
                href="tel:+7575750080"
              >
                <i className="fa fa-phone fa-lg" />
              </a>
              <a
                role="button"
                className="btn btn-link"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:aros0885@gmail.com"
              >
                <i className="fa fa-envelope" />
              </a>
              <br />
              Jean-Eric Pierre-Louis
              <i
                className="fa fa-copyright"
                aria-hidden="true"
                style={{ fontSize: "13px" }}
              />
            </Col>
          </Row>
      </footer>
    </>
  );
}

const footerHeader = {
  color: "white",
  fontWeight: "bold",
  textShadow: "1px 1px 1px black",
};

export default Footer;
