import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <BsNavbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <BsNavbar.Toggle aria-controls="navbarNav" />
        <BsNavbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>            
            <Nav.Link href="#skills">skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default NavbarComp;
