import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
      console.log("Shrink state:", shrink); // Debugging line
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shrink]);

  return (
    <header className={shrink ? "shrink" : ""}>
      <Navbar className={`navbar-top ${shrink ? "shrink shadow" : "bg-transparent"} fixed-top`} expand="md">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center">
            {/* <img
              src="/path/to/mocksphere-logo.png"
              alt="MocksphereLogo"
              style={{ width: "60px", height: "60px", marginRight: "20px" }}
            /> */}
            <h1 className="text-white mb-0">Mocksphere</h1>
          </div>
          
          {/* Center Links */}
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="#features" className="text-white">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" className="text-white">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#team" className="text-white">Team</NavLink>
            </NavItem>
          </Nav>
          
          {/* Right Links */}
          <Nav navbar>
            <NavItem>
              <NavLink href="#signin" className="text-white">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#signout" className="text-white">Sign Out</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;