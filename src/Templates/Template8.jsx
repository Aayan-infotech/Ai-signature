import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Close,
  MusicNote,
} from "@mui/icons-material";
import { useSignatureData } from "../hooks/useSignatureData";

const Template8 = ({ data }) => {
  const {
    styles,
    displayData,
    socialLinks,
    getSocialColor,
    getFontFamily,
    shouldShowDisclaimer,
    shouldShowQuote,
    disclaimerStyle,
    quoteStyle,
  } = useSignatureData(data);

  // Header color (defaults gracefully)
  const accentColor = styles?.accentColor || "#3A5BA0";

  // Social icon mapping
  const socialIcons = [
    { Icon: Instagram, color: getSocialColor("#E4405F"), label: "instagram" },
    { Icon: Facebook, color: getSocialColor("#1877F2"), label: "facebook" },
    { Icon: LinkedIn, color: getSocialColor("#0077B5"), label: "linkedin" },
    { Icon: Close, color: getSocialColor("#000000"), label: "x" },
    { Icon: MusicNote, color: getSocialColor("#000000"), label: "tiktok" },
  ];

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100"
      style={{ maxWidth: "500px", padding: 0 }}
    >
      <div className="row gy-4">
        <div className="col-lg-9">
          {/* Kind Regards */}
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

          {/* Blue Header Section */}
          <Row
            className="g-0 align-items-center"
            style={{
              backgroundColor: accentColor,
              margin: 0,
              padding: 0,
            }}
          >
            {/* Image Column */}
            <Col
              xs={3}
              className="d-flex align-items-center justify-content-center p-2"
            >
              <Image
                src={displayData.image}
                fluid
                alt="Profile"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </Col>

            {/* Name and Title Column */}
            <Col xs={9} className="p-2">
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#eee",
                    textTransform: "uppercase",
                    fontFamily: getFontFamily(),
                  }}
                >
                  {data.title}, {data.company}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.2,
                    fontFamily: getFontFamily(),
                  }}
                >
                  {data.name}
                </Typography>
              </Box>
            </Col>
          </Row>

          {/* Contact Info */}
          <Box sx={{ p: 3, pt: 2 }}>
            {/* Phone Numbers */}
            <Typography variant="body2" sx={{ mb: 1 }}>
              {data.phone}
              {data.phone2 && `  |  ${data.phone2}`}
            </Typography>

            {/* Website */}
            {data.website && (
              <Typography variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
                {data.website}
              </Typography>
            )}

            {/* Email and Address */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 0.5,
                mb: 2,
              }}
            >
              {data.email && (
                <Typography variant="body2" color="text.primary">
                  {data.email}
                </Typography>
              )}

              {data.address && (
                <Typography variant="body2" color="text.primary">
                  {data.address}
                </Typography>
              )}
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialIcons.map(({ Icon, color, label }) => {
                const href = socialLinks[label];
                if (!href) return null;
                return (
                  <IconButton
                    key={label}
                    size="small"
                    sx={{ color }}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                );
              })}
            </Box>
          </Box>

          {/* Quote Section */}
          {shouldShowQuote && quoteStyle?.text && (
            <Box
              sx={{
                my: 2,
                p: 2,
                backgroundColor: "#f8f9fa",
                borderRadius: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: quoteStyle.color || "#4a4a4a",
                  fontSize: `${quoteStyle.fontSize || 14}px`,
                  textAlign: quoteStyle.align || "left",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  fontFamily: "'Georgia', serif",
                }}
              >
                {quoteStyle.text}
              </Typography>
            </Box>
          )}

          {/* Disclaimer Section */}
          {shouldShowDisclaimer && disclaimerStyle?.text && (
            <Box sx={{ mt: 3, mb: 2 }}>
              {disclaimerStyle.decorativeLine && (
                <Box
                  sx={{
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${disclaimerStyle.color}, transparent)`,
                    mb: 2,
                  }}
                />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: disclaimerStyle.color || "#4a4a4a",
                  fontSize: `${disclaimerStyle.fontSize || 14}px`,
                  textAlign: disclaimerStyle.align || "left",
                  lineHeight: 1.4,
                  fontStyle: "italic",
                }}
              >
                {disclaimerStyle.text}
              </Typography>
              {disclaimerStyle.decorativeLine && (
                <Box
                  sx={{
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${disclaimerStyle.color}, transparent)`,
                    mt: 2,
                  }}
                />
              )}
            </Box>
          )}
        </div>
        <div className="col-lg-3"></div>
      </div>
    </Card>
  );
};

export default Template8;
