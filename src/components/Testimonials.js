import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import { motion } from "framer-motion";
import "../css/Testimonials.css";

const testimonials = [
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", name: "John Doe 1", position: "CEO, Company 1" },
  { text: "Vivamus lacinia odio vitae vestibulum vestibulum.", name: "John Doe 2", position: "CTO, Company 2" },
  { text: "Curabitur dapibus nisl vitae elit fringilla rutrum.", name: "John Doe 3", position: "Manager, Company 3" },
  { text: "Pellentesque in ipsum id orci porta dapibus.", name: "John Doe 4", position: "Developer, Company 4" },
  { text: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.", name: "John Doe 5", position: "Designer, Company 5" },
  { text: "Sed porttitor lectus nibh.", name: "John Doe 6", position: "Marketer, Company 6" }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section style={{ padding: "60px 0", textAlign: "center", backgroundColor: "#f8f9fa", position: "relative" }}>
      <h2 className="display-4 mb-5">What People Say</h2>
      <Container>
        <Button
          onClick={prev}
          color="primary"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          &#9664;
        </Button>
        <Button
          onClick={next}
          color="primary"
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          &#9654;
        </Button>
        <motion.div
          key={currentIndex}
          initial={{ x: direction * 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Row style={{ justifyContent: "center" }}>
            {visibleTestimonials.map((testimonial, index) => (
              <Col md="4" className="mb-4" key={testimonial.name}>
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
                      "{testimonial.text}"
                    </CardText>
                    <div style={{ marginBottom: "15px" }}>
                      <img
                        src={`https://i.pravatar.cc/100?img=${index + 1}`}
                        alt="avatar"
                        style={{ borderRadius: "50%", width: "80px", height: "80px" }}
                      />
                    </div>
                    <CardTitle tag="h5">{testimonial.name}</CardTitle>
                    <p className="text-muted">{testimonial.position}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
