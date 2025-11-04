import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone, // For phone icon
  Language, // For website icon
  MailOutline, // For email icon
  LocationOnOutlined, // For location icon
  Close, // Using Close for 'X' (Twitter/X)
  MusicNote, // For TikTok icon
} from "@mui/icons-material";

const Template7 = ({ data }) => {
  // Use a default data structure for safety
  const defaultData = {
    name: "Daksh Kumar",
    title: "developer",
    company: "Aayan Infotech",
    image: "placeholder.png", // Ensure you provide a valid path/URL
    phone: "1234567890",
    phone2: "9876543210", // Added for the second phone number
    website: "www.aayaninfotech.com",
    email: "daksh.kumar@aayaninfotech.com",
    address: "werwerwe",
    ...data,
  };

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100 p-3"
      style={{ maxWidth: "500px" }}
    >
      {/* 1. Kind Regards Signature */}
      <Row className="align-items-start">
        {/* Left Column: Name, Title, Contact Details, Social Media */}
        <Col xs={8}>
          <Box>
            {/* Name and Title */}
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#333", mb: 0.5 }}
            >
              {defaultData.name}
            </Typography>
            <Typography variant="body3" color="text.secondary" sx={{ mb: 2 }}>
              {defaultData.title}, {defaultData.company}
            </Typography>

            {/* Contact Details with Icons */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 2 }}
            >
              {/* Phone Numbers (on one line) */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone fontSize="small" color="action" />
                  <Typography variant="body3">{defaultData.phone}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone fontSize="small" color="action" />{" "}
                  {/* Assuming this is also a phone icon */}
                  <Typography variant="body3">
                    {defaultData.phone2 || defaultData.phone}
                  </Typography>
                </Box>
              </Box>

              {/* Website */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Language fontSize="small" color="action" />
                <MUILink
                  href={`https://${defaultData.website}`}
                  variant="body3"
                  underline="none"
                  color="text.primary"
                >
                  {defaultData.website}
                </MUILink>
              </Box>

              {/* Email */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MailOutline fontSize="small" color="action" />
                <Typography variant="body3">{defaultData.email}</Typography>
              </Box>

              {/* Address/Location */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnOutlined fontSize="small" color="action" />
                <Typography variant="body3">{defaultData.address}</Typography>
              </Box>
            </Box>

            {/* Social Media Icons (Left-aligned, circular, with border) */}
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {[Facebook, Instagram, LinkedIn, Close, MusicNote].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    size="small"
                    sx={{
                      color: "#555", // Darker grey for icons
                      border: "1px solid #ccc", // Light grey border
                      borderRadius: "50%",
                      width: 30,
                      height: 30,
                      p: 0,
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                )
              )}
            </Box>
          </Box>
        </Col>

        {/* Right Column: Profile Image */}
        <Col xs={4} className="d-flex justify-content-end flex-column">
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Pacifico', cursive",
              mb: 2,
              color: "#000",
            }}
          >
            Kind regards.
          </Typography>
          <Image
            src={defaultData.image}
            roundedCircle
            fluid
            alt="Profile"
            style={{ width: "90px", height: "90px", objectFit: "cover" }}
          />
        </Col>
      </Row>
      {/* Horizontal Separator Line at the bottom */}
      <Box sx={{ borderBottom: "1px solid #eee", mt: 3, mx: -3 }} />{" "}
      {/* Adjusted margin to extend full width */}
    </Card>
  );
};

export default Template7;
