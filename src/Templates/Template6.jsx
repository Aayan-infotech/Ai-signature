import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone, // For mobile/phone icon
  Language, // For website icon
  MailOutline, // For email icon
  LocationOnOutlined, // For location icon
  Close, // Using Close for 'X' (Twitter/X)
  MusicNote, // For TikTok icon
} from "@mui/icons-material";

const Template6 = ({ data }) => {
  // Use a default data structure for safety
  const defaultData = {
    name: "Daksh Kumar",
    title: "developer",
    company: "Aayan Infotech",
    image: "placeholder.png",
    phone: "1234567890",
    phone2: "1234567890",
    website: "www.example.com",
    email: "example@email.com",
    address: "Location",
    ...data,
  };

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100"
      style={{ maxWidth: "500px", border: "1px solid #ddd" }}
    >
      <Box sx={{ p: 3 }}>
        {/* 1. Kind Regards Signature */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Pacifico', cursive",
            mb: 2,
            color: "#000",
          }}
        >
          Kind regards.
        </Typography>

        <Row className="align-items-start">
          {/* 2. Profile Image Column */}
          <Col xs={3} style={{ flexShrink: 0 }}>
            {/* Image is rectangular in the source image */}
            <Image
              src={defaultData.image}
              fluid
              alt="Profile"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "3px",
              }}
            />
          </Col>

          {/* 3. Name, Title, and Contact Details Column */}
          <Col xs={9}>
            <Box>
              {/* Name and Title */}
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                {defaultData.name}
              </Typography>
              <Typography variant="body3" color="text.secondary" sx={{ mb: 2 }}>
                {defaultData.title}, **{defaultData.company}**
              </Typography>

              {/* Contact Details with Icons */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {/* Phone 1 (Using Phone for the handset icon) */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone fontSize="small" color="action" />
                  <Typography variant="body3">{defaultData.phone}</Typography>
                </Box>
                {/* Phone 2 (Using Phone for the mobile icon) */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone fontSize="small" color="action" />
                  <Typography variant="body3">
                    {defaultData.phone2 || defaultData.phone}
                  </Typography>
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
            </Box>
          </Col>
        </Row>
      </Box>

      {/* 4. Social Media Footer Bar */}
      <Box
        sx={{
          backgroundColor: "#546e8c", // Slate Blue/Grey color from the image
          width: "100%",
          p: 1.5,
          display: "flex",
          justifyContent: "flex-end", // Align icons to the right
          gap: 0.5,
        }}
      >
        {/* Social Media Icons (White Icons on Colored Background) */}
        {[Facebook, Instagram, LinkedIn, Close, MusicNote].map(
          (Icon, index) => (
            <IconButton
              key={index}
              size="small"
              sx={{
                color: "#fff",
                border: "1px solid #fff",
                borderRadius: "50%",
                width: 30,
                height: 30,
                p: 0,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          )
        )}
      </Box>
    </Card>
  );
};

export default Template6;
