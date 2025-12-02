import React from "react";
import Container from "react-bootstrap/Container";
import PlayersList from "./PlayersList";
import Navbarr from "./Navbarr";
import "./App.css";

function App() {
  const bgUrl = process.env.PUBLIC_URL + "/fc25-bg.jpg";

  return (
    <div
      className="app-root"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbarr />
      <div className="app-overlay">
        <Container className="py-5">
          <h1 className="fifa-title">ULTIMATE ATTACKERS</h1>
          <p className="fifa-subtitle">EA SPORTS FC 25 · SPECIAL PLAYER CARDS</p>

          <PlayersList />
        </Container>
      </div>
    </div>
  );
}

export default App;
