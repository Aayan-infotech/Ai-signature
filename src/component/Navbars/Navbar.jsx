import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      className="py-3"
      style={{
        background:
          "rgba(42, 142, 138, 1)",
      }}
    >
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand className="text-white fw-bold fs-4">
            Ai Signature
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#resources" className="text-white mx-2">
              Resources
            </Nav.Link>
            {/* <Nav.Link href="#Ai Signature" className="text-white mx-2">Ai Signature</Nav.Link> */}
            <Nav.Link href="#support" className="text-white mx-2">
              Support
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white mx-2">
              Pricing
            </Nav.Link>
            <Button
              variant="light"
              className="ms-3 px-4 fw-semibold"
              style={{ borderRadius: "25px" }}
              onClick={() => navigate("/auth/SignIn")}
            >
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
