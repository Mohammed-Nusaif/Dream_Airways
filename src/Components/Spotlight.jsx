import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import plane from "../assets/plane.png";
import "../CSS/Spotlight.css";
import skyVideo from "../assets/sky4.mp4";

function Spotlight() {
  return (
    <Container className="spot-cont">
      <section id="spotlight">
        <Row className="spot-row-content">
          <Col xl={6} className="order-xl-1 order-2 mb-4 mb-xl-0 px-lg-5">
            <div className="p-4">
              <h1>Create Ever-Lasting Memories With Us</h1>
            </div>
            <div className="btn-cont">
              <Button className="btn1">Explore</Button>
              <Button className="btn2">About Us</Button>
            </div>
          </Col>

          <Col xl={6} className="order-xl-2 order-1 d-none d-xl-block">
            <div className="masked-video-container">
              {/* Video with sky masked inside shape */}
              <div className="video-mask">
                <video autoPlay muted loop playsInline>
                  <source src={skyVideo} type="video/mp4" />
                </video>
              </div>

              {/* Airplane on top */}
              <img src={plane} alt="Avion" className="img-fluid plane-img" />
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Spotlight;
