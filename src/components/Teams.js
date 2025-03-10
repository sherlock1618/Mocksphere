import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";

const teamMembers = [
  { name: "John Doe", role: "Lead Developer", photo: "path/to/photo1.jpg" },
  { name: "Jane Smith", role: "Project Manager", photo: "path/to/photo2.jpg" },
  { name: "Emily Johnson", role: "UI/UX Designer", photo: "path/to/photo3.jpg" },
];

const Teams = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Creative Team</h2>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow text-center">
                <CardImg
                  top
                  width="100%"
                  src={member.photo}
                  alt={member.name}
                  className="rounded-circle"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <CardBody>
                  <CardTitle tag="h5">{member.name}</CardTitle>
                  <CardSubtitle className="text-muted">{member.role}</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Teams;
