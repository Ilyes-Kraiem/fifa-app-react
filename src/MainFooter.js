import React from "react";
import { Container } from "react-bootstrap";
function MainFooter() {
  return (
    <footer className="main-footer">
      <Container className="py-4">
        <div className="footer-top">
          <div className="footer-logo">EA</div>
          <div className="footer-links">
            <a href="#">Help</a>
            <br></br>
            <a href="#">Legal & Privacy</a>
            <br></br>
            <a href="#">Your Privacy Choices</a>
            <br></br>
            <a href="#">Corporate Social Responsibility</a>
            <br></br>
            <a href="#">Online Service Updates</a>  
          </div>
        </div>
        <p className="footer-text">
         Any digital products sold into certain territories (please see Terms of Sale for details) will be inclusive of VAT/GST, where applicable.
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()}  Electronic Arts Inc.
        </p>
      </Container>
    </footer>
  );
}
export default MainFooter;
