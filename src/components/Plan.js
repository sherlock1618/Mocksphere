

  import React, { useState } from "react";
  import { Card, Button, Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
  
  const Plan = () => {
    const [billing, setBilling] = useState("monthly");
    const [selectedPlan, setSelectedPlan] = useState(null); // Initialize to null

    const plans = [
        { title: "Basic", priceMonthly: "$9/mo", priceYearly: "$90/yr", features: ["Feature A", "Feature B"] },
        { title: "Pro", priceMonthly: "$19/mo", priceYearly: "$190/yr", features: ["Feature A", "Feature B", "Feature C"] },
        { title: "Enterprise", priceMonthly: "$29/mo", priceYearly: "$290/yr", features: ["Feature A", "Feature B", "Feature C", "Feature D"] },
    ];
    const handleBillingToggle = (value) => {
      setBilling(value);
      console.log(value);
    };
  
    const handleSelectPlan = (index) => {
      setSelectedPlan(index);
      console.log(index);
    };
  
    return (
      <Container className="text-center py-5">
        <h2 className="mb-4">Choose Your Plan</h2>
  
        {/* Billing Toggle */}
        <div className="d-flex justify-content-center mb-4">
          <ToggleButtonGroup
            type="radio"
            name="billingOptions"
            value={billing}
            onChange={handleBillingToggle}
          >
            <ToggleButton
              id="tbg-btn-monthly" // Add ID for accessibility
              variant={billing === "monthly" ? "primary" : "outline-primary"}
              value="monthly"
            >
              Monthly
            </ToggleButton>
            <ToggleButton
              id="tbg-btn-yearly" // Add ID for accessibility
              variant={billing === "yearly" ? "primary" : "outline-primary"}
              value="yearly"
            >
              Yearly
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
  
        {/* Plan Cards */}
        <div className="d-flex flex-wrap justify-content-center gap-3" >
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-3 mb-3 ${selectedPlan === index ? "border-primary shadow info-card" : "border-light shadow text-bg-light"}`}
              onClick={() => handleSelectPlan(index)}
              style={{ cursor: "pointer", width: "18rem", margin: "15px", }}
              role="button" // Improve accessibility
            >
              <Card.Body>
                <Card.Title>{plan.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {billing === "monthly" ? plan.priceMonthly : plan.priceYearly}
                </Card.Subtitle>
                <ul className="list-unstyled">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          ))}
        </div>
  
        <Button className="mt-4" variant="primary" disabled={selectedPlan === null}>
          Start a Plan
        </Button>
      </Container>
    );
  };
  
  export default Plan;