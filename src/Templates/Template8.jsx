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
        <div className="col-lg-12">
          {/* Signature / Signoff */}
          {displayData.type !== "none" && (
            <Box sx={{ p: 3, pb: 0 }}>
              {displayData.type === "custom" && displayData.imageData ? (
                <Box sx={{ textAlign: displayData.alignment }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: getFontFamily(displayData.fontStyle),
                      fontSize: `${displayData.size}px`,
                      color: displayData.color,
                      mb: 1,
                    }}
                  >
                    {displayData.signOff}
                  </Typography>
                  <img
                    src={displayData.imageData}
                    alt="Custom signature"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                </Box>
              ) : (
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: getFontFamily(displayData.fontStyle),
                    fontSize: `${displayData.size}px`,
                    mb: 1,
                    color: displayData.color,
                    textAlign: displayData.alignment,
                  }}
                >
                  {displayData.signOff}
                  {displayData.type === "signature" && displayData.signAs && (
                    <Typography
                      component="div"
                      sx={{
                        fontFamily: getFontFamily(displayData.fontStyle),
                        fontSize: `${displayData.size}px`,
                        color: displayData.color,
                        mt: 0.5,
                      }}
                    >
                      {displayData.signAs}
                    </Typography>
                  )}
                </Typography>
              )}
            </Box>
          )}

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
              xs={4}
              className="d-flex align-items-center justify-content-center p-2"
            >
              <Image
                src={data.image}
                className={styles.image.shape}
                fluid
                alt="Profile"
                style={{
                  width: styles.image.size,
                  height: styles.image.size,
                  objectFit: "cover",
                }}
              />
            </Col>

            {/* Name and Title Column */}
            <Col xs={8} className="p-2">
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#eee",
                    textTransform: "uppercase",
                    fontFamily: styles.title.fontFamily,
                    fontSize: `${styles.title.fontSize}px`,
                    lineHeight: styles.title.lineHeight,
                  }}
                >
                  {data.title}
                  {data.title && data.company && ", "}
                  <span style={{ color: "#eee" }}>{data.company}</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.2,
                    fontFamily: styles.name.fontFamily,
                    fontSize: `${styles.name.fontSize}px`,
                  }}
                >
                  {data.name}
                </Typography>
              </Box>
            </Col>
          </Row>

          {/* Contact Info */}
          <Box sx={{ p: 3, pt: 2 }}>
            {/* Contact Details */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  fontFamily: styles.details.fontFamily,
                  fontSize: `${styles.details.fontSize}px`,
                  color: styles.details.color,
                }}
              >
                {data.phone}
                {data.phone && data.website && " | "}
                {data.website && (
                  <a
                    href={`https://${data.website}`}
                    style={{
                      color: styles.details.color,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    {data.website}
                  </a>
                )}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: styles.details.fontFamily,
                  fontSize: `${styles.details.fontSize}px`,
                  color: styles.details.color,
                }}
              >
                {data.email}
                {data.email && data.address && " | "}
                {data.address}
              </Typography>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: `${styles.social.space}px` }}>
              {socialIcons.map(({ Icon, color, label }) => {
                const socialUrl = socialLinks[label];
                return (
                  <IconButton
                    key={label}
                    size="small"
                    aria-label={label}
                    onClick={() =>
                      socialUrl &&
                      window.open(socialUrl, "_blank", "noopener,noreferrer")
                    }
                    sx={{
                      color: socialUrl ? color : "#ccc",
                      padding: "4px",
                      "& .MuiSvgIcon-root": {
                        fontSize: styles.social.size,
                      },
                      "&:hover": {
                        backgroundColor: socialUrl
                          ? "rgba(255,255,255,0.1)"
                          : "transparent",
                      },
                    }}
                    disabled={!socialUrl}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Box>
          </Box>

          {/* Quote Section */}
          {shouldShowQuote && (
            <Box
              sx={{ my: 1, p: 2, backgroundColor: "#f8f9fa", borderRadius: 1 }}
            >
              <Typography
                variant="body1"
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
          {shouldShowDisclaimer && (
            <Box sx={{ mt: 1, mb: 2, p: 2 }}>
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
      
      </div>
    </Card>
  );
};

export default Template8;
