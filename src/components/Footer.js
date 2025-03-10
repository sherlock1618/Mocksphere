import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="text-white py-4" id="About">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <h5 className="mb-2">MockSphere</h5>
            <p>© {new Date().getFullYear()} MockSphere. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <a href="#privacy" className="text-white mx-2">
              Privacy Policy
            </a>
            <a href="#terms" className="text-white mx-2">
              Terms of Service
            </a>
            <a href="#contact" className="text-white mx-2">
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
