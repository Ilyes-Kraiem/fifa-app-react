import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const NEWS = [
  {
    id: 1,
    title: "EA SPORTS FC™ 25 | Season Finale Update",
    date: "June 2, 2025",
    tag: "News Article",
    img : process.env.PUBLIC_URL + "https://drop-assets.ea.com/images/1cLCEnhkOWfjoAFvdGADVR/6e6732cb0be33427f02fda65599dfdc6/Season_Finale_Pitch_Notes_Thumbnail.png?im=AspectCrop=(16,9),xPosition=0.5,yPosition=0.5;Resize=(2560)&q=80",
  },
  {
    id: 2,
    title: "Football Ultimate Team™ 25 - Team of the Season",
    date: "April 25, 2025",
    tag: "News Article",
    img: process.env.PUBLIC_URL + "https://drop-assets.ea.com/images/4rmlKvVv717qEsR4K0qSSU/12ee3c775e9556bd10c7025943e31273/fc25-tots-live-feat-img-16x9.jpg?im=AspectCrop=(16,9),xPosition=0.5,yPosition=0.5;Resize=(2560)&q=80",
  },
  {
    id: 3,
    title: "EA SPORTS FC™ 25 | Premium Pass",
    date: "April 24, 2025",
    tag: "News Article",
    img: process.env.PUBLIC_URL + "https://drop-assets.ea.com/images/eBGunTuGAP8WibbHkk0yU/a0f6cbf967e5d5b30582c26a85a752fe/Premium_Pass_Pitch_Notes_Thumbnail.png?im=AspectCrop=(16,9),xPosition=0.5,yPosition=0.5;Resize=(2560)&q=80",
  },
  {
    id: 4,
    title: "Football Ultimate Team™ 25 - TOTS: Warm-up",
    date: "April 18, 2025",
    tag: "News Article",
    img: process.env.PUBLIC_URL + "https://drop-assets.ea.com/images/4R3X68CzCWyq8VSusdXUXW/861d8137f1b84308fe9d4b5a3c1803a8/fc25-tots-warmup-feat-img-16x9.jpg?im=AspectCrop=(16,9),xPosition=0.5,yPosition=0.5;Resize=(2560)&q=80",
  },
];
function NewsSection() {
  return (
    <section className="news-section">
      <Container className="py-5">
        <div className="news-header">
          <h2>Latest News</h2>
          <Button variant="outline-light" size="sm">
            See all
          </Button>
        </div>
        <Row className="g-4 mt-3">
          {NEWS.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={3}>
              <Card className="news-card">
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <span className="news-tag">{item.tag}</span>
                  <p className="news-date">{item.date}</p>
                  <Card.Title className="news-title">
                    {item.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
export default NewsSection;
