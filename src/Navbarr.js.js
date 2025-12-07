import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import "./navbarr.css";
function Navbarr({ onSearch }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(value);
  };
  return (
    <Navbar expand="lg" className="fc25-navbar" variant="dark">
      <Container fluid className="px-5">
        <Navbar.Brand href="#" className="fc25-logo">
          <span className="logo-main">FC</span>
          <span className="logo-sub">25</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="fc25-navbar-nav" />
        <Navbar.Collapse id="fc25-navbar-nav">
          <Nav className="me-auto fc25-nav-links">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Football Ultimate Team™</Nav.Link>
            <Nav.Link href="#">News</Nav.Link>
            <Nav.Link href="#">FC Ratings</Nav.Link>
            <Nav.Link href="#">Community</Nav.Link>
          </Nav>
          <Form className="d-flex ea-search" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search your best player"
              className="me-2 ea-search-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button className="ea-search-btn" type="submit">
              SEARCH
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbarr;
