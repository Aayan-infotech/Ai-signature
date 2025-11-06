import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function TrustedBy() {
  const companies = [
    "Amazon",
    "Regenersis",
    "EXXON",
    "Mercedes",
    "Sony",
    "SIEMENS",
  ];

  return (
    <div
      style={{
        color: "white",
        padding: "40px 0",
      }}
    >
      <Container>
        <p className="text-center mb-4">
          More than 1,200,000 customers worldwide trust Ai Signature.
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {companies.map((company, idx) => (
            <span key={idx} className="fs-5 fw-bold" style={{ opacity: 0.8 }}>
              {company}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(169deg,rgba(42, 142, 138, 1) 28%, rgba(109, 195, 109, 1) 78%)",
        }}
      >
        <TrustedBy />
        <footer
          style={{
            color: "white",
            padding: "60px 0 30px",
          }}
        >
          <Container>
            <Row>
              <Col md={3} className="mb-4">
                <h5 className="fw-bold mb-3">Product</h5>
                <Nav className="flex-column">
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Features
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Pricing
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Templates
                  </Nav.Link>
                </Nav>
              </Col>
              <Col md={3} className="mb-4">
                <h5 className="fw-bold mb-3">Resources</h5>
                <Nav className="flex-column">
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Blog
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Help Center
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    API Docs
                  </Nav.Link>
                </Nav>
              </Col>
              <Col md={3} className="mb-4">
                <h5 className="fw-bold mb-3">Company</h5>
                <Nav className="flex-column">
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    About Us
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Careers
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Contact
                  </Nav.Link>
                </Nav>
              </Col>
              <Col md={3} className="mb-4">
                <h5 className="fw-bold mb-3">Support</h5>
                <Nav className="flex-column">
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Help Center
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Community
                  </Nav.Link>
                  <Nav.Link href="#" className="text-white-50 p-0 mb-2">
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
            <hr
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                margin: "40px 0 20px",
              }}
            />
            <p className="text-center text-white-50 mb-0">
              &copy; 2025 Ai Signature. All rights reserved.
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
}
