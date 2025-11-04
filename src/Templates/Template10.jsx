import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Close, // Using Close for 'X' (Twitter/X)
  MusicNote, // For TikTok icon
} from "@mui/icons-material";

const Template10 = ({ data }) => {

  // Helper component for the contact details list
  const ContactDetail = ({ label, value, link }) => (
    <Box sx={{ mb: 0.5, display: "flex" }}>
      <Typography
        variant="body3"
        sx={{ fontWeight: 600, color: "primary.main", minWidth: "70px", mr: 1 }}
      >
        {label}
      </Typography>
      {link ? (
        <MUILink
          href={link}
          variant="body3"
          underline="none"
          color="text.primary"
        >
          {value}
        </MUILink>
      ) : (
        <Typography variant="body3" color="text.primary">
          {value}
        </Typography>
      )}
    </Box>
  );

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100"
      style={{ maxWidth: "600px", padding: "20px" }}
    >
      {/* 1. Kind Regards Signature */}
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Pacifico', cursive",
          mb: 3,
          color: "#000",
        }}
      >
        Kind regards.
      </Typography>

      {/* 2. Main 3-Column Content Block */}
      <Row className="align-items-center justify-content-between g-4">
        {/* Left Column: Name, Title, and Social Media Icons */}
        <Col
          xs={4}
          className="d-flex flex-column align-items-center text-center"
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#333", mb: 0.5 }}
            >
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {data.title}, {data.company}
            </Typography>
          </Box>

          {/* Social Media Icons (Colored Circles) */}
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {/* Facebook */}
            <IconButton
              size="small"
              sx={{
                backgroundColor: "#3b5998",
                color: "#fff",
                "&:hover": { backgroundColor: "#2d4373" },
              }}
            >
              <Facebook fontSize="small" />
            </IconButton>
            {/* Instagram */}
            <IconButton
              size="small"
              sx={{
                backgroundColor: "#e4405f",
                color: "#fff",
                "&:hover": { backgroundColor: "#c82a44" },
              }}
            >
              <Instagram fontSize="small" />
            </IconButton>
            {/* LinkedIn */}
            <IconButton
              size="small"
              sx={{
                backgroundColor: "#0077b5",
                color: "#fff",
                "&:hover": { backgroundColor: "#005582" },
              }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>
            {/* X (Twitter) */}
            <IconButton
              size="small"
              sx={{
                backgroundColor: "#000000",
                color: "#fff",
                "&:hover": { backgroundColor: "#222" },
              }}
            >
              <Close fontSize="small" />
            </IconButton>
            {/* TikTok */}
            <IconButton
              size="small"
              sx={{
                backgroundColor: "#000000",
                color: "#fff",
                "&:hover": { backgroundColor: "#222" },
              }}
            >
              <MusicNote fontSize="small" />
            </IconButton>
          </Box>
        </Col>

        {/* Center Column: Profile Image */}
        <Col xs={3} className="d-flex justify-content-center">
          <Image
            src={data.image}
            fluid
            alt="Profile"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Col>

        {/* Right Column: Contact Details */}
        <Col xs={5}>
          <Box>
            <ContactDetail
              label="Phone"
              value={data.phone}
              link={`tel:${data.phone}`}
            />
            <ContactDetail
              label="Mobile"
              value={data.phone2}
              link={`tel:${data.phone2}`}
            />
            <ContactDetail
              label="Website"
              value={data.website}
              link={`https://${data.website}`}
            />
            <ContactDetail
              label="Email"
              value={data.email}
              link={`mailto:${data.email}`}
            />
            <ContactDetail label="Address" value={data.address} />
          </Box>
        </Col>
      </Row>
    </Card>
  );
};

export default Template10;
