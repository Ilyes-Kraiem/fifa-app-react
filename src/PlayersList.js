import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import players from "./players";
import Player from "./Player";

function PlayersList() {
  return (
    <Container className="player-grid">
      <Row className="g-4 justify-content-center">
        {players.map((player) => (
          <Col
            key={player.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;
