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
        {/* Brand */}
        <Navbar.Brand href="#" className="ea-brand">
          FC<span>25</span>
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle aria-controls="navbarScroll" className="ea-toggle" />

        <Navbar.Collapse id="navbarScroll">
          {/* Nav Links */}
          <Nav className="me-auto my-2 my-lg-0 ea-nav" navbarScroll>
            <NavDropdown title="ABOUT" id="about" className="ea-dropdown">
              <NavDropdown.Item href="#about">The Game</NavDropdown.Item>
              <NavDropdown.Item href="#modes">Game Modes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#faq">FAQ</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="FEATURES" id="features" className="ea-dropdown">
              <NavDropdown.Item href="#ultimate-team">
                Ultimate Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#career-mode">Career Mode</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#crossplay">Cross-play</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#news" className="ea-link">
              NEWS
            </Nav.Link>

            <NavDropdown title="COMMUNITY" id="community" className="ea-dropdown">
              <NavDropdown.Item href="#forums">Forums</NavDropdown.Item>
              <NavDropdown.Item href="#creators">Creators</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#events">Events</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#feedback" className="ea-link">
              FC FEEDBACK
            </Nav.Link>
            <Nav.Link href="#ratings" className="ea-link">
              RATINGS
            </Nav.Link>
          </Nav>

          {/* Search */}
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
