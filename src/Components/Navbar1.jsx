import React from "react";
import Logo from "../assets/Logo.png";
import "../CSS/nav.css";
import { Navbar, Nav, Container, Button, Offcanvas, NavDropdown, Form } from "react-bootstrap";

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
              id= "offcanvasNavbar"
              aria-labelledby= "offcanvasNavbar"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbar">
                  <img src={Logo} alt="logo" className="d-inline-block align-top" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action3">Offers</Nav.Link>
                  <Nav.Link href="#action4">Destination</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navbar1;