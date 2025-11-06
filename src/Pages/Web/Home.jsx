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
import { useSpring, animated, useInView } from "@react-spring/web";

import {
  Container,
  Nav,
  Navbar,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"; // import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner1 from "../../assets/banner/banner1.webp";
import Banner2 from "../../assets/banner/banner2.webp";
import Banner3 from "../../assets/banner/banner3.webp";
import Banner4 from "../../assets/banner/banner4.webp";
import Banner5 from "../../assets/banner/banner5.webp";
import Banner6 from "../../assets/banner/banner6.webp";
import Banner7 from "../../assets/banner/banner7.webp";
import Banner8 from "../../assets/banner/banner8.webp";
import {
  Typography,
  Box,
  IconButton,
  Avatar,
  CardContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Animated wrapper component for fade-in effects
const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: "-100px 0px",
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(30px)",
    config: { tension: 280, friction: 60 },
    delay,
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default function Home() {
  const testimonials = [
    {
      id: 1,
      name: "Mary McGuire",
      title: "Business Consulting and Coaching",
      quote:
        "I value how MySignature maximizes what would usually be empty space to deliver ample information. I particularly enjoy the design and how user-friendly it is.",
      // You'd use actual image URLs here
      imageUrl: "",
    },
    {
      id: 2,
      name: "KiwiOnTheSticks",
      title: "Gaming Content Creator",
      quote:
        "I am a huge fan of MySignature! Setting it up is a breeze and it even integrates Canva right into the editor! I highly recommend this service to anyone who wants to give their emails a sleek and professional look.",
      imageUrl: "",
    },
    // Add more testimonials for the slider effect
    {
      id: 3,
      name: "Third User Name",
      title: "Another Professional Role",
      quote:
        "This is a placeholder quote for the third slide to demonstrate the Swiper functionality.",
      imageUrl: "",
    },
  ];

  const TestimonialCard = ({ name, title, quote, imageUrl }) => {
    return (
      // Use Box for styling; Bootstrap's 'text-center' for centering content if applicable
      <Box className="p-3">
        <div className="d-flex align-items-start mb-3">
          {/* Avatar component for the image */}
          <Avatar
            alt={name}
            src={imageUrl}
            sx={{ width: 80, height: 80, mr: 2 }} // Increased size for prominence
          />
          <Box>
            {/* Use MUI Typography for text styling */}
            <Typography variant="h6" component="div" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
        </div>

        {/* Quote text */}
        <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
          {quote}
        </Typography>
      </Box>
    );
  };

  const TemplateCard = ({ templateName, imageUrl }) => {
    return (
      // Card with subtle shadow and border (similar to the image)
      <Card
        sx={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
          border: "1px solid #f0f0f0",
          p: 0, // Remove default padding
          height: "100%", // Ensure all cards are the same height in the grid
        }}
      >
        <CardContent sx={{ p: 0 }}>
          {/* Placeholder for the "Example" label at the top */}
          <Box
            sx={{
              bgcolor: "rgba(0, 0, 0, 0.03)",
              p: 1.5,
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight="bold"
            >
              Example
            </Typography>
          </Box>

          {/* Placeholder for the actual signature image/content */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 300, // Fixed height for visual consistency
              bgcolor: "white",
              p: 2,
            }}
          >
            {/* Replace this Box with an actual image component or the complex signature HTML/React */}
            <Typography variant="body2" color="text.disabled">
              [Template: {templateName}]
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  };

  function HeroSection() {
    const heroAnimation = useSpring({
      from: { opacity: 0, transform: "translateY(50px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 280, friction: 60 },
    });

    const buttonAnimation = useSpring({
      from: { opacity: 0, transform: "translateY(50px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 280, friction: 60 },
      delay: 200,
    });

    const carouselAnimation = useSpring({
      from: { opacity: 0, transform: "translateY(50px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 280, friction: 60 },
      delay: 400,
    });

    return (
      <div
        style={{
          // background: "#2A8E8A",
          background:
            "linear-gradient(169deg,rgba(42, 142, 138, 1) 28%, rgba(109, 195, 109, 1) 78%)",
          color: "white",
          paddingTop: "80px",
          paddingBottom: "80px",
          minHeight: "calc(100vh - 72px)",
        }}
      >
        <Container>
          <Row className="align-items-center gy-3">
            <Col lg={9}>
              <animated.div style={heroAnimation}>
                <h1 className="fs-1 fw-bold mb-4">
                  Free Email Signature Generator
                  <br />
                  to Boost Your Personal Brand
                </h1>
                <p className="fs-5 mb-4">
                  Create professional email signatures for your entire team.
                  Centrally manage, deploy, and track email signatures across
                  your organization.
                </p>
              </animated.div>
            </Col>
            <Col lg={3}>
              <animated.div style={buttonAnimation}>
                <Button
                  size="lg"
                  className="px-5 py-3 fw-semibold"
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    color: "#2A8E8A",
                    borderRadius: "30px",
                  }}
                >
                  Get started
                </Button>
                <p className="mt-3 small">
                  No credit card required • 14-day free trial
                </p>
              </animated.div>
            </Col>
            <Col lg={12} className="mt-5 mt-lg-3">
              <animated.div style={carouselAnimation}>
                <Swiper
                  // install Swiper modules
                  modules={[Autoplay, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                >
                  <SwiperSlide>
                    <img
                      src={Banner1}
                      alt=""
                      className="w-100 object-fit-contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <img
                      src={Banner2}
                      alt=""
                      className="w-100 object-fit-contain"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <img
                      src={Banner3}
                      alt=""
                      className="w-100 object-fit-contain"
                    />
                  </SwiperSlide>
                </Swiper>
              </animated.div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  function AboutTemplate() {
    return (
      <div>
        <Container fluid className="px-0 mx-0 overflow-hidden">
          {/* --- Block 1: Keep as is (Text then Image) --- */}
          <FadeInSection>
            <div className="row align-items-center gy-4">
              <div className="col-lg-6 px-0">
                <h2 className="text-center mb-4 fw-bold">
                  Create professional email signatures for your entire team to
                  standout.
                </h2>
                <div className="text-center">
                  <Button variant="dark" size="lg" className="mt-3">
                    View Setup Guide
                  </Button>
                </div>
              </div>
              <div className="col-lg-6 px-0">
                <img
                  src={Banner4}
                  alt="Team signature management illustration"
                  className="w-100 object-fit-contain"
                />
              </div>
            </div>
          </FadeInSection>

          {/* --- Block 2: Keep as is (Image then Text) --- */}
          <FadeInSection delay={100}>
            <div className="row align-items-center gy-4">
              <div className="col-lg-6 px-0">
                <img
                  src={Banner5}
                  alt="Signature design preview"
                  className="w-100 object-fit-contain"
                />
              </div>
              <div className="col-lg-6 px-0">
                <h2 className="text-center mb-4 fw-bold">
                  Create professional email signatures to make a Branding
                </h2>
                <div className="text-center">
                  <Button variant="dark" size="lg" className="mt-3">
                    View Setup Guide
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* --- Block 3: ADDED attractive marketing line and button (Text then Image) --- */}
          <FadeInSection delay={100}>
            <div className="row align-items-center gy-4">
              <div className="col-lg-6 px-0">
                <h2 className="text-center mb-4 fw-bold">
                  💰 <span className="text-primary">Drive Sales</span> with
                  Every Email. Turn your signatures into a marketing channel!
                </h2>
                <p className="text-center mb-4">
                  Add dynamic banners, special promotions, and social links to
                  every outgoing message effortlessly.
                </p>
                <div className="text-center">
                  <Button variant="dark" size="lg" className="mt-3">
                    Create Signature Now
                  </Button>
                </div>
              </div>
              <div className="col-lg-6 px-0">
                <img
                  src={Banner6}
                  alt="Marketing banner in email signature"
                  className="w-100 object-fit-contain"
                />
              </div>
            </div>
          </FadeInSection>

          {/* --- Block 4: ADDED attractive marketing line and button (Image then Text) --- */}
          <FadeInSection delay={100}>
            <div className="row align-items-center gy-4">
              <div className="col-lg-6 px-0">
                <img
                  src={Banner7}
                  alt="Centralized management dashboard"
                  className="w-100 object-fit-contain"
                />
              </div>
              <div className="col-lg-6 px-0">
                <h2 className="text-center mb-4 fw-bold">
                  ✨ <span className="text-success">Perfect Consistency</span>{" "}
                  Across the Board. Manage everyone from one central dashboard.
                </h2>
                <p className="text-center mb-4">
                  Eliminate branding errors and ensure every employee's
                  signature is compliant and pixel-perfect, automatically.
                </p>
                <div className="text-center">
                  <Button variant="dark" size="lg" className="mt-3">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* --- Block 5: ADDED attractive marketing line and button (Text then Image) --- */}
          <FadeInSection delay={100}>
            <div className="row align-items-center gy-4">
              <div className="col-lg-6 px-0">
                <h2 className="text-center mb-4 fw-bold">
                  ⏰ <span className="text-warning">Setup in Minutes</span>,
                  Save Hours. Simple installation for all major email clients.
                </h2>
                <p className="text-center mb-4">
                  Our intuitive platform means your team can be up and running
                  with beautiful, professional signatures instantly.
                </p>
                <div className="text-center">
                  <Button variant="dark" size="lg" className="mt-3">
                    View Setup Guide
                  </Button>
                </div>
              </div>
              <div className="col-lg-6 px-0">
                <img
                  src={Banner8}
                  alt="Quick setup process illustration"
                  className="w-100 object-fit-contain"
                />
              </div>
            </div>
          </FadeInSection>
        </Container>
      </div>
    );
  }

  const TestimonialSlider = () => {
    return (
      <FadeInSection>
        <Box sx={{ py: 8, bgcolor: "background.paper" }}>
          <Container fluid>
            {" "}
            {/* Bootstrap container for centered and responsive content */}
            <Box
              className="d-flex justify-content-between align-items-center mb-4"
              sx={{ maxWidth: "100%", mx: "auto" }} // Adjust max-width as needed
            >
              <Typography variant="h5" component="h5" fontWeight="light">
                Professionals choose the **MySignature** free email signature
                generator to get the most out of their emails
              </Typography>
              <Box className="d-none d-md-flex">
                {" "}
                {/* Navigation visible on medium/large screens */}
                <IconButton
                  className="swiper-button-prev-custom"
                  sx={{ mr: 1 }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton className="swiper-button-next-custom">
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Box>
            <hr /> {/* Horizontal rule from the image */}
            {/* Swiper Slider setup */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              breakpoints={{
                768: {
                  // Show 2 slides on screens >= 768px (like in the image)
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              style={{ padding: "20px 0" }} // Add some vertical padding
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  {/* Ensure slides are vertically aligned nicely */}
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
            <hr /> {/* Second horizontal rule */}
          </Container>
        </Box>
      </FadeInSection>
    );
  };

  const templatesData = [
    { id: 1, name: "Willy Turner Template" },
    { id: 2, name: "Ava Bennett Template" },
    { id: 3, name: "Samantha Wilson Template" },
  ];

  const TemplateSelectionSection = () => {
    return (
      // Use a background color similar to the image
      <Box sx={{ bgcolor: "#f5f7fa", py: 8 }}>
        <Container>
          {" "}
          {/* Bootstrap container for centered, responsive content */}
          {/* --- Header Section --- */}
          <FadeInSection>
            <Box sx={{ mb: 6, maxWidth: "800px" }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{ fontWeight: 400, mb: 2 }}
              >
                Let's get started! **Choose your email signature template**
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 300, color: "text.secondary", mb: 4 }}
              >
                Explore hundreds of professionally designed templates tailored
                for every profession and industry.
              </Typography>

              {/* MUI Button styled to look like the dark, prominent CTA */}
              <Button
                style={{
                  backgroundColor: "#1a2333", // Custom dark color
                  border: 0,
                  textTransform: "none",
                  fontSize: "1rem",
                  padding: "1rem 1.5rem",
                }}
                onClick={() => console.log("View All Templates clicked")}
              >
                View All Templates
              </Button>
            </Box>
          </FadeInSection>
          {/* --- Template Cards Grid --- */}
          {/* Bootstrap Row for the horizontal layout */}
        </Container>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            768: {
              // Show 2 slides on screens >= 768px (like in the image)
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              // Show 3 slides on screens >= 1024px (like in the image)
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          style={{ padding: "20px 0" }} // Add some vertical padding
        >
          {" "}
          {templatesData.map((template, idx) => (
            // Bootstrap Col for responsive columns
            <SwiperSlide key={template.id}>
              <FadeInSection delay={idx * 100}>
                {/* 4 columns on large screens (3 per row)
                    6 columns on medium screens (2 per row)
                    12 columns on small screens (1 per row) */}
                <TemplateCard templateName={template.name} />
              </FadeInSection>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  };

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
        <FadeInSection>
          <h2
            className="text-center mb-5 fw-bold"
            style={{ color: "rgba(42, 142, 138, 1)", fontSize: "2.5rem" }}
          >
            Centralized email signature management at scale.
          </h2>
        </FadeInSection>
        <Row>
          {features.map((feature, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <FadeInSection delay={idx * 100}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  style={{ borderRadius: "15px" }}
                >
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ color: "#6dc36d" }}>
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
              </FadeInSection>
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
          backgroundColor: "#000000c7",
          color: "white",
          padding: "80px 0",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <FadeInSection>
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
                    backgroundColor: "#6dc36d",
                    border: "none",
                    borderRadius: "30px",
                  }}
                >
                  Try it free
                </Button>
              </FadeInSection>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <FadeInSection delay={200}>
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
                      style={{ color: "#6dc36d", marginBottom: "20px" }}
                    />
                    <h4 className="fw-bold mb-3">Central Management</h4>
                    <p className="text-muted">
                      Control all signatures from one dashboard
                    </p>
                  </div>
                </div>
              </FadeInSection>
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
        <FadeInSection>
          <h2
            className="text-center mb-5 fw-bold"
            style={{ color: "#2a8e8a", fontSize: "2.5rem" }}
          >
            Built on trust. Experts you can count on.
          </h2>
        </FadeInSection>
        <Row className="justify-content-center">
          {benefits.map((benefit, idx) => (
            <Col md={3} sm={6} key={idx} className="text-center mb-4">
              <FadeInSection delay={idx * 100}>
                <div style={{ color: "#6dc36d" }} className="mb-3">
                  {benefit.icon}
                </div>
                <h5 className="fw-bold">{benefit.text}</h5>
              </FadeInSection>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <>
      <HeroSection />
      <AboutTemplate />
      <TestimonialSlider />
      <FeaturesSection />
      <TemplateSelectionSection />
      <CTASection />
      <BenefitsSection />
    </>
  );
}
