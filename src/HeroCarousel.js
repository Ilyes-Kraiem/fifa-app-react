import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import "./App.css";

function HeroCarousel() {
  const slides = [
    {
      id: 1,
      title: "5v5 Rush",
      subtitle:
        "Team up in 5v5 Rush, a new way to play with friends in Football Ultimate Team™, Clubs, and Kick-Off with fast-paced small-sided gameplay.",
      cta: "Learn more",
      image: process.env.PUBLIC_URL + "/assets/hero-1.jpg",
    },
    {
      id: 2,
      title: "FC IQ",
      subtitle:
        "An overhaul of tactical foundations across the game delivers greater strategic control and more realistic collective movement at the team level. FC IQ also utilises a new AI model, powered by real-world data, to influence player tactics through all-new Player Roles.",
      cta: "Learn more",
      image: process.env.PUBLIC_URL + "/assets/hero-2.jpg",
    },
    {
      id: 3,
      title: "Football Ultimate Team",
      subtitle:
        "Select your favourite Player Item and team up with friends in 5v5 Rush matches. Switch up your style of play with the click of a button by employing Manager Items, and find the perfect synergies between your Player Items based on specific Player Roles.",
      cta: "Learn more",
      image: process.env.PUBLIC_URL + "/assets/hero-3.jpg",
    },
    {
      id: 4,
      title: "Manager & Player Career",
      subtitle:
        "Live out the biggest storylines from the real-world with Live Start Points** (arriving as a post-launch update); rewrite the stories of past ICONs with today’s teams in Player Career; and play an authentic Women’s Career experience using a club or player from the top five women’s leagues. **To be released with a post-launch update. For more details & availability, visit ea.com/games/ea-sports-fc/fc-25/disclaimers.",
      cta: "Learn more",
      image: process.env.PUBLIC_URL + "/assets/hero-4.jpg",
    },
    {
      id: 5,
      title: "Clubs",
      subtitle:
        "Play, win, and progress with friends in more ways than ever before. Connect with club mates in your new Clubhouse and see friends’ avatars when they enter the mode. Take your club to new heights with Facilities, and showcase your skills in Clubs Rush.",
      cta: "Learn more",
      image: process.env.PUBLIC_URL + "/assets/hero-5.jpg",
    },
    {
      id: 6,
      title: "Unrivalled Authenticity",
      subtitle:
        "Experience unrivalled authenticity in EA SPORTS FC™ 25 with the most true-to-life experience of football’s biggest competitions, clubs and stars, with 19,000+ players across 700+ teams in more than 120 stadiums and over 30 leagues. EA SPORTS FC™ 25 is the only place you can play the iconic UEFA Champions League, UEFA Europa League, UEFA Europa Conference League, CONMEBOL Libertadores, Premier League, Bundesliga, and LALIGA EA SPORTS, all in the same game, plus the UEFA Women's Champions League, Barclays Women's Super League, the National Women's Soccer League, the D1 Arkema, Liga F and the Google Pixel Frauen-Bundesliga.",
      cta: "Learn more",
      image: process.env.PUBLIC_URL + "/assets/hero-6.jpg",
    },
  ];

  return (
    <section className="hero-section">
      <Carousel interval={6000} controls indicators>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="hero-overlay">
                <Container>
                  <div className="hero-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.subtitle}</p>
                    <Button className="hero-cta">{slide.cta}</Button>
                  </div>
                </Container>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroCarousel;
