import React from "react";
import {
  Mail,
  TrendingUp,
  Users,
  Shield,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

import {
  Container,
  Nav,
  Navbar,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

export default function Home() {
  function HeroSection() {
    return (
      <div
        style={{
          backgroundColor: "#2D1B69",
          color: "white",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">
                Email signatures.
                <br />
                Make it count.
              </h1>
              <p className="fs-5 mb-4">
                Create professional email signatures for your entire team.
                Centrally manage, deploy, and track email signatures across your
                organization.
              </p>
              <Button
                size="lg"
                className="px-5 py-3 fw-semibold"
                style={{
                  backgroundColor: "#FF007A",
                  border: "none",
                  borderRadius: "30px",
                }}
              >
                Get started
              </Button>
              <p className="mt-3 small">
                No credit card required • 14-day free trial
              </p>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "30px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#4285F4",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      marginRight: "15px",
                    }}
                  >
                    G
                  </div>
                  <div>
                    <div style={{ color: "#333", fontWeight: "600" }}>
                      Gmail
                    </div>
                    <div style={{ color: "#888", fontSize: "14px" }}>
                      Connect your account
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#0078D4",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                      marginRight: "15px",
                    }}
                  >
                    O
                  </div>
                  <div>
                    <div style={{ color: "#333", fontWeight: "600" }}>
                      Outlook
                    </div>
                    <div style={{ color: "#888", fontSize: "14px" }}>
                      Connect your account
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

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
          backgroundColor: "#1a0f3d",
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

  function FeaturesSection() {
    const features = [
      {
        icon: <Mail size={48} />,
        title: "Template Gallery",
        description:
          "Choose from dozens of professionally designed templates to match your brand",
      },
      {
        icon: <Users size={48} />,
        title: "Manage Licenses",
        description:
          "Centrally manage and deploy email signatures at scale across your organization",
      },
      {
        icon: <TrendingUp size={48} />,
        title: "Track Users",
        description:
          "Get insights into user activity and signature performance with detailed analytics",
      },
    ];

    return (
      <Container className="py-5 my-5">
        <h2
          className="text-center mb-5 fw-bold"
          style={{ color: "#2D1B69", fontSize: "2.5rem" }}
        >
          Centralized email signature management at scale.
        </h2>
        <Row>
          {features.map((feature, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card
                className="h-100 border-0 shadow-sm"
                style={{ borderRadius: "15px" }}
              >
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ color: "#FF007A" }}>
                    {feature.icon}
                  </div>
                  <Card.Title className="fw-bold mb-3">
                    {feature.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  function CTASection() {
    return (
      <div
        style={{
          backgroundColor: "#2D1B69",
          color: "white",
          padding: "80px 0",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">
                One setup. Total autonomy.
              </h2>
              <p className="fs-5 mb-4">
                Set up once and let your team create their own professional
                email signatures. Maintain brand consistency while giving
                employees creative freedom.
              </p>
              <Button
                size="lg"
                className="px-5 py-3 fw-semibold"
                style={{
                  backgroundColor: "#FF007A",
                  border: "none",
                  borderRadius: "30px",
                }}
              >
                Try it free
              </Button>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "15px",
                  padding: "40px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                }}
              >
                <div className="text-center" style={{ color: "#333" }}>
                  <Mail
                    size={60}
                    style={{ color: "#FF007A", marginBottom: "20px" }}
                  />
                  <h4 className="fw-bold mb-3">Central Management</h4>
                  <p className="text-muted">
                    Control all signatures from one dashboard
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  function BenefitsSection() {
    const benefits = [
      {
        icon: <CheckCircle size={40} />,
        text: "Easy to use",
        desc: "Intuitive interface for all users",
      },
      {
        icon: <Shield size={40} />,
        text: "GDPR ready",
        desc: "Fully compliant with regulations",
      },
      {
        icon: <TrendingUp size={40} />,
        text: "Built to grow",
        desc: "Scales with your business",
      },
      {
        icon: <Users size={40} />,
        text: "24/7 support",
        desc: "Always here to help you",
      },
    ];

    return (
      <Container className="py-5 my-5">
        <h2
          className="text-center mb-5 fw-bold"
          style={{ color: "#2D1B69", fontSize: "2.5rem" }}
        >
          Built on trust. Experts you can count on.
        </h2>
        <Row className="justify-content-center">
          {benefits.map((benefit, idx) => (
            <Col md={3} sm={6} key={idx} className="text-center mb-4">
              <div style={{ color: "#FF007A" }} className="mb-3">
                {benefit.icon}
              </div>
              <h5 className="fw-bold">{benefit.text}</h5>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <BenefitsSection />
      <TrustedBy />
    </>
  );
}
