import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const features = [
  { title: "Fast Performance", description: "Experience blazing fast speeds.", icon: "🚀" },
  { title: "Secure Transactions", description: "End-to-end encryption for safety.", icon: "🔒" },
  { title: "Cloud Sync", description: "Sync your data across devices.", icon: "☁️" },
  { title: "24/7 Support", description: "We’re here to help anytime.", icon: "📞" },
  { title: "Customizable UI", description: "Personalize your experience.", icon: "🎨" },
  { title: "AI Powered", description: "Intelligent automation at its best.", icon: "🤖" }
];

const Features = () => {
  return (
    <section style={{ padding: "60px 0", textAlign: "center" }} id="features">
      <h2 className="display-4 mb-5">Discover Our Powerful Features</h2>
      <Container>
        <Row>
          {features.map((feature, index) => (
            <Col md="4" className="mb-4" key={index}>
              <Card style={{ border: "1px solid #ccc", borderRadius: "8px", height: "220px", width: "350px", margin: "0 auto", padding: "20px" }}>
                <CardBody>
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{feature.icon}</div>
                  <h5>{feature.title}</h5>
                  <p style={{ fontSize: "0.9rem", color: "#666" }}>{feature.description}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
