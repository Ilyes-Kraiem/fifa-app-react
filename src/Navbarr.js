import React from "react";
import "./navbarr.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Navbarr() {
  return (
    <Navbar expand="lg" className="ea-navbar" sticky="top">
      <Container fluid className="mycontainer">
        <Navbar.Brand href="#" className="ea-brand" >
          FC<span>25</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="ea-toggle" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 ea-nav" navbarScroll>
            <NavDropdown title="ABOUT" id="about" className="ea-dropdown">
              <NavDropdown.Item href="#about">Authenticity</NavDropdown.Item>
              <NavDropdown.Item href="#modes">Dual Entitlement</NavDropdown.Item>
              <NavDropdown.Item href="#faq">EA Play Membership</NavDropdown.Item>
              <NavDropdown.Item href="#faq">FC Club Membership</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FEATURES" id="features" className="ea-dropdown">
              <NavDropdown.Item href="#ultimate-team">Features Overview</NavDropdown.Item>
              <NavDropdown.Item href="#career-mode">5v5 Rush</NavDropdown.Item>
              <NavDropdown.Item href="#career-mode">Gameplay</NavDropdown.Item>
              <NavDropdown.Item href="#career-mode">Clubs</NavDropdown.Item>
              <NavDropdown.Item href="#career-mode">Football Ultimate Team</NavDropdown.Item>
              <NavDropdown.Item href="#career-mode">Heroes</NavDropdown.Item>
              <NavDropdown.Item href="#career-mode">Icons</NavDropdown.Item>
              <NavDropdown.Item href="#crossplay">FC Companion apps</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#fut" className="ea-link">
              Football Ultimate Team™
            </Nav.Link>
            <Nav.Link href="#news" className="ea-link">
              NEWS
            </Nav.Link>
            <Nav.Link href="#ratings" className="ea-link">
              FC 25 Ratings
            </Nav.Link>
            <Nav.Link href="#fcpro" className="ea-link">
              FC Pro
            </Nav.Link>
            <Nav.Link href="#community" className="ea-link">
              Community
            </Nav.Link>
            <Nav.Link href="#tots" className="ea-link">
              TOTS
            </Nav.Link>
          </Nav>
          <Form className="d-flex ea-search">
            <Form.Control
              type="search"
              placeholder="Search your best player"
              className="me-2 ea-search-input"
            />
            <Button className="ea-search-btn">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbarr;
