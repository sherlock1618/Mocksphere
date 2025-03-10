import React from "react";
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from "reactstrap";

const Testimonials = () => {
  return (
    <section style={{ padding: "60px 0", textAlign: "center", backgroundColor: "#f8f9fa" }}>
      <h2 className="display-4 mb-5">What People Say</h2>
      <Container>
        <Row>
          {Array.from({ length: 3 }).map((_, index) => (
            <Col md="4" className="mb-4" key={index}>
              <Card
                style={{
                  border: "2px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className="card text-bg-light mb-3"
              >
                <CardBody>
                  <CardText style={{ fontStyle: "italic", marginBottom: "15px" }}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
                  </CardText>
                  <div style={{ marginBottom: "15px" }}>
                    <img
                      src={`https://i.pravatar.cc/100?img=${index + 1}`}
                      alt="avatar"
                      style={{ borderRadius: "50%", width: "80px", height: "80px" }}
                    />
                  </div>
                  <CardTitle tag="h5">John Doe {index + 1}</CardTitle>
                  <p className="text-muted">CEO, Company {index + 1}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
