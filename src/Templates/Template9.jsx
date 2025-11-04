import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink } from "@mui/material";
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

const Template9 = ({ data }) => {


  // Helper component to render an icon with a link/text
  const IconLink = ({ Icon, text, link, color }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Icon fontSize="small" sx={{ color: color || "action.active" }} />
      <MUILink
        href={
          link
            ? link.startsWith("http")
              ? link
              : `https://${link}`
            : undefined
        }
        variant="body2"
        underline="none"
        color="text.primary"
      >
        {text}
      </MUILink>
    </Box>
  );

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100 p-3"
      style={{ maxWidth: "600px" }}
    >
      {/* 1. Kind Regards Signature */}
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

      {/* 2. Image, Name, and Title Block */}
      <Row className="align-items-start gx-4" style={{ marginBottom: "20px" }}>
        {/* Image Column */}
        <Col xs="auto" style={{ paddingLeft: 0, flexShrink: 0 }}>
          {/* Image is rectangular in the source image */}
          <Image
            src={data.image}
            fluid
            alt="Profile"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Col>

        {/* Name and Title Column */}
        <Col>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#333", mb: 0.5 }}
          >
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.title}, {data.company}
          </Typography>
        </Col>
      </Row>

      {/* 3. Two-Column Layout for Contact & Social */}
      <Row className="gx-5">
        {/* Left Column: Contact Details */}
        <Col xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {/* Phone Numbers (on one line) */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconLink Icon={Phone} text={data.phone} />
              <Typography variant="body2">
                {data.phone2 || data.phone}
              </Typography>
            </Box>

            {/* Website */}
            <IconLink
              Icon={Language}
              text={data.website}
              link={data.website}
            />

            {/* Email and Location (on one line) */}
            <Box sx={{ display: "flex", alignItems: "start",flexDirection:"column" ,  gap: 1 }}>
              <IconLink
                Icon={MailOutline}
                text={data.email}
                link={`mailto:${data.email}`}
              />
              <IconLink Icon={LocationOnOutlined} text={data.address} />
            </Box>
          </Box>
        </Col>

        {/* Right Column: Social Media Links */}
        <Col xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <IconLink
              Icon={Facebook}
              text={data.facebookLink}
              link={`https://${data.facebookLink}`}
              color="#1877F2"
            />
            <IconLink
              Icon={Instagram}
              text={data.instagramLink}
              link={`https://${data.instagramLink}`}
              color="#E4405F"
            />
            <IconLink
              Icon={LinkedIn}
              text={data.linkedinLink}
              link={`https://${data.linkedinLink}`}
              color="#0077B5"
            />
            <IconLink
              Icon={Close}
              text={data.xLink}
              link={`https://${data.xLink}`}
              color="#000000"
            />
            <IconLink
              Icon={MusicNote}
              text={data.tiktokLink}
              link={`https://${data.tiktokLink}`}
              color="#000000"
            />
          </Box>
        </Col>
      </Row>
    </Card>
  );
};

export default Template9;
