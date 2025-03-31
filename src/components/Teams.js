import React, { useState } from "react";
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardImg, Button } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  { name: "John Doe", role: "Lead Developer", photo: "path/to/photo1.jpg" },
  { name: "Jane Smith", role: "Project Manager", photo: "path/to/photo2.jpg" },
  { name: "Emily Johnson", role: "UI/UX Designer", photo: "path/to/photo3.jpg" },
  { name: "Mike Brown", role: "Backend Engineer", photo: "path/to/photo4.jpg" },
];

const Teams = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const visibleCards = 3;
  const cardWidth = 280;
  const cardGap = 20;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      cards.push({
        ...teamMembers[index],
        position: i // 0: left, 1: center, 2: right
      });
    }
    return cards;
  };

  const getCardStyle = (position) => {
    const positions = {
      0: { // Left card
        left: 0,
        zIndex: 1,
        scale: 0.9
      },
      1: { // Center card
        left: cardWidth + cardGap,
        zIndex: 2,
        scale: 1
      },
      2: { // Right card
        left: (cardWidth + cardGap) * 2,
        zIndex: 1,
        scale: 0.9
      }
    };

    return {
      position: "absolute",
      width: `${cardWidth}px`,
      ...positions[position]
    };
  };

  return (
    <section className="py-5 bg-light" id="team">
      <Container>
        <h2 className="text-center mb-5">Our Creative Team</h2>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          position: "relative",
          minHeight: "400px"
        }}>
          <Button onClick={prevSlide} style={{ position: "absolute", left: "10px", zIndex: 10 }}>❮</Button>
          
          <div style={{ 
            width: `${(cardWidth + cardGap) * visibleCards - cardGap}px`,
            height: "400px",
            position: "relative",
            margin: "0 auto"
          }}>
            <AnimatePresence custom={direction} initial={false}>
              {getVisibleCards().map((member, i) => (
                <motion.div
                  key={`${currentIndex}-${i}`}
                  custom={direction}
                  initial={{ 
                    x: direction > 0 ? cardWidth + cardGap : -(cardWidth + cardGap),
                    opacity: 0,
                    scale: 0.9
                  }}
                  animate={{ 
                    x: 0,
                    opacity: 1,
                    scale: getCardStyle(i).scale
                  }}
                  exit={{ 
                    x: direction < 0 ? cardWidth + cardGap : -(cardWidth + cardGap),
                    opacity: 0,
                    scale: 0.9
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={getCardStyle(i)}
                >
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <Button onClick={nextSlide} style={{ position: "absolute", right: "10px", zIndex: 10 }}>❯</Button>
        </div>
      </Container>
    </section>
  );
};

export default Teams;