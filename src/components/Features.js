import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const Features = () => {
  return (
    <section style={{ padding: "60px 0", textAlign: "center" }} id="Features">
      <h2 className="display-4 mb-5">Discover Our Powerful Features</h2>
      <Container>
        <Row>
          {Array.from({ length: 6 }).map((_, index) => (
            <Col md="4" className="mb-4" key={index}>
              <Card
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  height: "200px",
                  width: "350px",
                  margin: "0 auto",
                }}
              >
                <CardBody></CardBody>
              </Card>
              <h5 className="mt-3">Feature Title {index + 1}</h5>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
