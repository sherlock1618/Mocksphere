import React from "react";
import { Container, Card, CardBody, Collapse, Button } from "reactstrap";

const faqs = [
  { question: "What is Mocksphere?", answer: "Mocksphere is a platform that provides high-quality mock interviews to help you ace your real interviews." },
  { question: "How can I get started?", answer: "Simply click on the 'Get Started' button on the homepage and follow the instructions." },
  { question: "Are there any fees?", answer: "Mocksphere offers both free and premium plans. Check our pricing page for more details." },
  { question: "Can I customize my mock interview?", answer: "Yes, you can choose the type of interview and the difficulty level." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5 bg-light qna">
      <Container>
        <h2 className="text-center mb-5">Frequently Asked Questions</h2>
        <div className="border p-4 rounded">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-3">
              <CardBody>
                <Button
                  color="link"
                  className="w-100 text-start"
                  onClick={() => toggle(index)}
                >
                  {faq.question}
                </Button>
                <Collapse isOpen={openIndex === index}>
                  <p className="mt-2 ps-3">{faq.answer}</p>
                </Collapse>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
