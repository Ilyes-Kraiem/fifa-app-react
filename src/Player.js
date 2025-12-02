import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";

function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  position,
  rating,
  pace,
  shooting,
  passing,
  dribbling,
  defending,
  physical,
  image,
}) {
  const cardStyle = {
    background:
      "linear-gradient(150deg, rgba(15,23,42,0.95), rgba(30,64,175,0.9))",
    borderRadius: "24px",
    border: "1px solid rgba(248, 250, 252, 0.2)",
    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.9)",
    padding: "1rem",
    color: "#f9fafb",
    position: "relative",
    overflow: "hidden",
  };

  const badgeStyle = {
    position: "absolute",
    top: "12px",
    right: "16px",
    background:
      "linear-gradient(135deg,#facc15,#f97316,#facc15,#f97316,#facc15)",
    borderRadius: "999px",
    padding: "0.35rem 0.9rem",
    fontSize: "0.65rem",
    fontWeight: 800,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#111827",
    boxShadow: "0 0 18px rgba(250, 204, 21, 0.7)",
  };

  const ratingStyle = {
    position: "absolute",
    top: "14px",
    left: "16px",
    fontWeight: 900,
    fontSize: "1.5rem",
    lineHeight: 1,
    textAlign: "center",
    textShadow: "0 0 12px rgba(15, 23, 42, 0.7)",
  };

  const posStyle = {
    fontSize: "0.8rem",
    letterSpacing: "0.18em",
  };

  const statLabel = {
    fontSize: "0.65rem",
    color: "#9ca3af",
    letterSpacing: "0.12em",
  };

  const statValue = {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#e5e7eb",
  };

  return (
    <Card style={cardStyle} className="player-card">
      <span style={badgeStyle}>PLAYERS</span>

      <div style={ratingStyle}>
        <div>{rating}</div>
        <div style={posStyle}>{position}</div>
      </div>

      <Card.Img
        variant="top"
        src={image}
        alt={name}
        className="player-image"
      />

      <Card.Body className="player-body">
        <Card.Title className="player-name">{name}</Card.Title>
        <Card.Subtitle className="mb-2 player-meta">
          {team} · {nationality}
        </Card.Subtitle>
        <Card.Text className="player-details">
          <span>#{jerseyNumber}</span> · <span>{age} yrs</span>
        </Card.Text>

        <div className="player-stats">
          <div>
            <div style={statLabel}>PAC</div>
            <div style={statValue}>{pace}</div>
          </div>
          <div>
            <div style={statLabel}>SHO</div>
            <div style={statValue}>{shooting}</div>
          </div>
          <div>
            <div style={statLabel}>PAS</div>
            <div style={statValue}>{passing}</div>
          </div>
          <div>
            <div style={statLabel}>DRI</div>
            <div style={statValue}>{dribbling}</div>
          </div>
          <div>
            <div style={statLabel}>DEF</div>
            <div style={statValue}>{defending}</div>
          </div>
          <div>
            <div style={statLabel}>PHY</div>
            <div style={statValue}>{physical}</div>
          </div>
        </div>

        <Button className="player-btn" variant="outline-warning">
          ADD TO SQUAD
        </Button>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  position: "CAM",
  rating: 80,
  pace: 80,
  shooting: 80,
  passing: 80,
  dribbling: 80,
  defending: 80,
  physical: 80,
  image: process.env.PUBLIC_URL + "/cr7.png",
};

export default Player;
