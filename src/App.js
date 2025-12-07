import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import PlayersList from "./PlayersList";
import Navbarr from "./Navbarr";
import HeroCarousel from "./HeroCarousel";
import NewsSection from "./NewsSection";
import SignupSection from "./SignupSection";
import MainFooter from "./MainFooter";
import "./App.css";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
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
      <Navbarr onSearch={setSearchTerm} />
      <HeroCarousel />
      <div className="app-overlay">
        <section className="players-section">
          <Container className="py-5">
            <h1 className="fifa-title">ULTIMATE ATTACKERS</h1>
            <p className="fifa-subtitle">
              EA SPORTS FC 25 · SPECIAL PLAYER CARDS
            </p>
            <PlayersList searchTerm={searchTerm} />
          </Container>
        </section>
        <NewsSection />
        <SignupSection />
        <MainFooter />
      </div>
    </div>
  );
}

export default App;
