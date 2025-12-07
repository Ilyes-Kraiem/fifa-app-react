import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";
import players from "./players";
function PlayersList({ searchTerm = "" }) {
  const normalized = searchTerm.toLowerCase();
  const filteredPlayers = players.filter((player) => {
    if (!normalized) return true;
    return (
      player.name.toLowerCase().includes(normalized) ||
      player.team.toLowerCase().includes(normalized) ||
      player.nationality.toLowerCase().includes(normalized)
    );
  });
  return (
    <Container className="player-grid">
      <Row className="g-4 justify-content-center">
        {filteredPlayers.map((player) => (
          <Col
            key={player.id || player.name}
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
