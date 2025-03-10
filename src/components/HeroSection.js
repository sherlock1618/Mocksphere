import React from "react";
import { Container, Button } from "reactstrap";

const Hero = () => {
  return (
    <section
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "150px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <h1 className="display-2 fw-bold mb-4">Introduction Title</h1>
        <p className="lead mb-5">Short email description</p>
        <Button color="primary" size="lg">
          Get Started
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
