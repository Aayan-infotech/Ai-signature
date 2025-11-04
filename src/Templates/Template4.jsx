import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, MusicNote } from "@mui/icons-material";

const Template4 = ({ data }) => {
  // Use provided data or default data
  const profileData = data;

  return (
    <Card
      className="shadow-sm border-0 p-4 d-flex m-auto w-100"
      style={{
        maxWidth: "500px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "10px",
      }}
    >
      <Row className="align-items-start">
        <Col xs={4}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Pacifico', cursive",
              mt: 1,
              mb: 2,
              color: "#000",
              textAlign: "start",
              fontSize: "1rem",
            }}
          >
            Kind regards,
          </Typography>
          <Image
            src={profileData.image}
            roundedCircle
            fluid
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              border: "3px solid #f0f0f0",
            }}
          />
        </Col>
        <Col xs={8}>
          {/* Contact Information with Checkbox Style */}
          <Box sx={{ pl: 2 }}>
            <Box sx={{ textAlign: "left", mb: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  // fontSize: "1.8rem",
                  lineHeight: 1.2,
                }}
              >
                {profileData.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  // fontSize: "1.1rem",
                  color: "#666",
                }}
              >
                {profileData.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  // fontSize: "1.1rem",
                  color: "#333",
                }}
              >
                {profileData.company}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 0.6 }}>
              <Typography variant="body3" sx={{ fontSize: "0.9rem" }}>
                {profileData.phone}
              </Typography>
            </Box>

            {/* Mobile */}
            {profileData.mobile && (
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.6 }}>
                <Typography variant="body3" sx={{ fontSize: "0.9rem" }}>
                  {profileData.mobile}
                </Typography>
              </Box>
            )}

            {/* Website - Checked */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 0.6 }}>
              <MUILink
                href={`https://${profileData.website.replace("/", ".")}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  color: "#1976d2",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {profileData.website}
              </MUILink>
            </Box>

            {/* Email */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 0.6 }}>
              <Typography variant="body3" sx={{ fontSize: "0.9rem" }}>
                {profileData.email}
              </Typography>
            </Box>

            {/* Address */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography variant="body3" sx={{ fontSize: "0.9rem" }}>
                {profileData.address}
              </Typography>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              <IconButton
                size="small"
                sx={{
                  color: "#E4405F",
                  backgroundColor: "#f5f5f5",
                  "&:hover": { backgroundColor: "#ffeef2" },
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#1877F2",
                  backgroundColor: "#f5f5f5",
                  "&:hover": { backgroundColor: "#e7f3ff" },
                }}
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#0077B5",
                  backgroundColor: "#f5f5f5",
                  "&:hover": { backgroundColor: "#e6f2ff" },
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "#000000",
                  backgroundColor: "#f5f5f5",
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
              >
                <MusicNote fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Col>
      </Row>
    </Card>
  );
};

export default Template4;
