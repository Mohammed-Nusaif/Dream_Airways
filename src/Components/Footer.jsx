import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../CSS/Footer.css";
import logo from "../assets/Logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <Container>
        {/* Newsletter Section */}
        <section className="subscribe text-center gap-2">
          <h2>Subscribe Newsletters & get Latest News</h2>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <input
              className="sub"
              type="email"
              placeholder="Enter your email address"
            />
            <Button className="btn">Subscribe</Button>
          </div>
        </section>

        {/* Footer Links Section */}
        <Row className="footer-content mt-5 text-center text-md-start">
          {/* Social + Logo */}
          <Col md={3} className="mb-4 mb-md-0">
            <img src={logo} alt="Logo" className="footer-logo mb-3" />
            <p>Your mind should be stronger than your feelings. Fly!</p>
            <div className="medias d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <FaFacebookF className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaInstagram className="icon" />
            </div>
          </Col>

          {/* Info Columns */}
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Information</h5>
            <ul>
              <li>Home</li>
              <li>Explore</li>
              <li>Flight Status</li>
              <li>Travel</li>
              <li>Check-in</li>
              <li>Manage your booking</li>
            </ul>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h5>Quick Guide</h5>
            <ul>
              <li>FAQ</li>
              <li>How to</li>
              <li>Features</li>
              <li>Baggage</li>
              <li>Route map</li>
              <li>Our Communities</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Services</h5>
            <ul>
              <li>Chauffeur</li>
              <li>Our Partners</li>
              <li>Destination</li>
              <li>Careers</li>
              <li>Transportation</li>
              <li>Programme Rules</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Signature */}
      <div className="signature mt-4 text-center">
        <p>
          Courtesy Design | Developed by <a href="#">NSF</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
