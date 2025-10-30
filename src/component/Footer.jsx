import React from "react";
import { Container, Nav, Navbar, Button, Row, Col, Card } from 'react-bootstrap';

export default function Footer() {
  return (
     <footer style={{ backgroundColor: '#1a0f3d', color: 'white', padding: '60px 0 30px' }}>
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Product</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Features</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Pricing</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Templates</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Resources</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Blog</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Help Center</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">API Docs</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Company</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">About Us</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Careers</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Help Center</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Community</Nav.Link>
              <Nav.Link href="#" className="text-white-50 p-0 mb-2">Contact Us</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0 20px' }} />
        <p className="text-center text-white-50 mb-0">
          &copy; 2025 Ai Signature. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
