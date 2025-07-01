import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../CSS/guide.css";
import window1 from "../assets/window1.png";
import window2 from "../assets/window2.jpg";
import plane from "../assets/planeoutside.png";

function Guide() {
  return (
    <>
      <Container className="">
        <section id="support">
          <div className="content">
            <h3>TRAVEL SUPPORT</h3>
            <h2>Plan your travel with confidence</h2>
            <p>
              find help with booking and travel plans,see what to expect along
              the journey{" "}
            </p>
          </div>
        </section>
        <section id="guide">
          <Row>
            <Col
              xl={9}
              md={8}
              sm={12}
              className="order-xl-1 order-2 mb-4 mb-xl-0 px-lg-5"
            >
              <div className="requirement cnt">
                <span>01</span>
                <h2>Travel requirements for your Destinations</h2>
                <p>
                  Find help booking and travel plans,see what to expect along
                  the journey to your favourite destinations!
                </p>
              </div>
              <div className="services cnt">
                <span>02</span>
                <h2>Chauffeur services at your arrival</h2>
                <p>
                  Find help booking and travel plans,see what to expect along
                  the journey to your favourite destinations!
                </p>
              </div>
              <div className="insurance cnt">
                <span>03</span>
                <h2>Multi-risk travel insurances</h2>
                <p>
                  Find help booking and travel plans,see what to expect along
                  the journey to your favourite destinations!
                </p>
              </div>
            </Col>
            <Col
              xl={5}
              md={8}
              sm={12}
              className="order-xl-2 order-1 d-none d-xl-block"
            >
              <img src={window1} className="window1" alt="" />
              <img src={window2} className="window2" alt="" />
              <img src={plane} alt="" className="plane" />
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
}

export default Guide;
