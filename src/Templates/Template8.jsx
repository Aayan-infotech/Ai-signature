import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Language,
  MailOutline,
  LocationOnOutlined,
  Close, // Using Close for 'X' (Twitter/X)
  MusicNote, // For TikTok icon
} from "@mui/icons-material";

const Template8 = ({ data }) => {
  // Use a default data structure for safety
  const defaultData = {
    name: "Daksh Kumar",
    title: "developer",
    company: "Aayan Infotech",
    image: "placeholder.png",
    phone: "1234567890",
    phone2: "9876543210",
    website: "www.aayaninfotech.com",
    email: "daksh.kumar@aayaninfotech.com",
    address: "werwerwe",
    ...data,
  };

  const accentColor = "#546e8c"; // Slate Blue/Grey from the image

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100"
      style={{
        maxWidth: "500px",
        padding: 0,
      }}
    >
      <div className="row gy-4">
        <div className="col-lg-9">
          <Box sx={{ p: 3, pb: 0 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Pacifico', cursive",
                mb: 1,
                color: "#000",
              }}
            >
              Kind regards.
            </Typography>
          </Box>

          {/* 2. Blue Header Bar (Image, Title, Name) */}
          <Row
            className="g-0 align-items-center"
            style={{ backgroundColor: accentColor, margin: 0, padding: 0 }}
          >
            {/* Image Column */}
            <Col
              xs={3}
              className="d-flex align-items-center justify-content-center p-2"
            >
              {/* Image is rectangular in the source image */}
              <Image
                src={defaultData.image}
                fluid
                alt="Profile"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  zIndex: 1,
                }}
              />
            </Col>

            {/* Name and Title Column */}
            <Col xs={9} className="p-2">
              <Box>
                <Typography
                  variant="body3"
                  sx={{ color: "#eee", textTransform: "uppercase" }}
                >
                  {defaultData.title}, {defaultData.company}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 700, color: "#fff", lineHeight: 1.2 }}
                >
                  {defaultData.name}
                </Typography>
              </Box>
            </Col>
          </Row>

          {/* 3. Contact Details and Social Media (White Space) */}
          <Box sx={{ p: 3, pt: 2 }}>
            {/* Phone Numbers (on one line without icons, as in the image) */}
            <Typography variant="body3" sx={{ mb: 1 }}>
              {defaultData.phone} &nbsp;&nbsp;
              {defaultData.phone2 || defaultData.phone}
            </Typography>

            {/* Website (on its own line) */}
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 0, mb: 0.5 }}
            >
              <Typography variant="body3" color="text.primary">
                {defaultData.website}
              </Typography>
            </Box>

            {/* Email and Location (on one line) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: 1,
                mb: 2,
                flexDirection: "column",
              }}
            >
              <Typography variant="body3" color="text.primary">
                {defaultData.email}
              </Typography>

              <Typography variant="body3" color="text.primary">
                {defaultData.address}
              </Typography>
            </Box>

            {/* Social Media Icons (Colored, simple, left-aligned) */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {/* Instagram */}
              <IconButton size="small" sx={{ color: "#E4405F" }}>
                <Instagram />
              </IconButton>
              {/* Facebook (Using a generic icon as the color is primary) */}
              <IconButton size="small" sx={{ color: "#1877F2" }}>
                <Facebook />
              </IconButton>
              {/* LinkedIn */}
              <IconButton size="small" sx={{ color: "#0077B5" }}>
                <LinkedIn />
              </IconButton>
              {/* X (Twitter) */}
              <IconButton size="small" sx={{ color: "#000000" }}>
                <Close />
              </IconButton>
              {/* TikTok */}
              <IconButton size="small" sx={{ color: "#000000" }}>
                <MusicNote />
              </IconButton>
            </Box>
          </Box>
        </div>
        <div className="col-lg-3"></div>
      </div>
      {/* 1. Kind Regards Signature */}
    </Card>
  );
};

export default Template8;
