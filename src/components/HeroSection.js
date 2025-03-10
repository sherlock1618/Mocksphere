import React from "react";
import { Container, Button, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <section
      style={{
        color: "white",
        padding: "100px 100px",
        textAlign: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            <h1 className="display-2 fw-bold mb-4">Introduction Title</h1>
            <p className="lead mb-5">Short email description</p>
            <Button color="primary" size="lg">
              Get Started
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "400px",
                top: "20px",
                margin: "0px 100px 5px",
                overflow: "hidden",
                borderRadius: "15px",
              }}
            >
              <img
                src="../background/interview.jpg"
                alt="Descriptive illustration"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  opacity: 0.8,
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
