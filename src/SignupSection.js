import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function SignupSection() {
  return (
    <section className="signup-section">
      <Container className="py-5">
        <Row className="align-items-center g-4">
          <Col md={6}>
            <h2>Stay up to date with EA SPORTS FC™ 25</h2>
            <p>
              Sign up today to receive the latest products, events, news and promotions from EA SPORTS FC™ 25 and EA by email consistent with EA’s Privacy and Cookie Policy.
            </p>
            <p>Already have an EA Account?</p>
                              <Button className="signin-btn" type="submit">
                    Sign in
                  </Button>
          </Col>
          <Col md={6}>
            <Form className="signup-form">
              <Row className="g-3">
                <Col xs={12}>
                  <Form.Control type="email" placeholder="Email" required />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="dd/mm/yyyy" />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="Country of residence" />
                </Col>
                <Col xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="Sign up today to receive the latest products, events, news, and promotions from EA SPORTS FC™ 25 and EA by email consistent with EA’s Privacy and Cookie Policy. You may change this choice or an existing subscription to EA emails by changing the email preferences in your EA Account or by clicking unsubscribe at the base of marketing emails that you receive."
                  />
                </Col>
                <Col xs={12}>
                  <Button className="signup-btn" type="submit">
                    Sign up
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default SignupSection;
