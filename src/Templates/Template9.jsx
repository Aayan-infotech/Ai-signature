import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton, Tooltip } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Language,
  MailOutline,
  LocationOnOutlined,
  Close,
  MusicNote,
} from "@mui/icons-material";
import { useSignatureData } from "../hooks/useSignatureData";

const Template9 = ({ data }) => {
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

  // Social icon mapping
  const socialIcons = [
    { Icon: Instagram, color: getSocialColor("#E4405F"), label: "instagram" },
    { Icon: Facebook, color: getSocialColor("#1877F2"), label: "facebook" },
    { Icon: LinkedIn, color: getSocialColor("#0077B5"), label: "linkedin" },
    { Icon: Close, color: getSocialColor("#000000"), label: "x" },
    { Icon: MusicNote, color: getSocialColor("#000000"), label: "tiktok" },
  ];

  // Helper component to render an icon with a link/text
  const IconLink = ({ Icon, text, link, color }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Icon fontSize="small" sx={{ color: color || "action.active" }} />
      {link ? (
        <MUILink
          href={link.startsWith("http") ? link : `https://${link}`}
          variant="body2"
          underline="none"
          color="text.primary"
          sx={{
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {text}
        </MUILink>
      ) : (
        <Typography variant="body2" color="text.primary">
          {text}
        </Typography>
      )}
    </Box>
  );

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100 ms-5 p-3"
      style={{ maxWidth: "600px" }}
    >
      {/* Signature / Signoff */}
      {displayData.type !== "none" && (
        <Box sx={{ mb: 2 }}>
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

      {/* Image, Name, and Title Block */}
      <Row className="align-items-start gx-4" style={{ marginBottom: "20px" }}>
        {/* Image Column */}
        <Col xs="auto" style={{ paddingLeft: 0, flexShrink: 0 }}>
          <Image
            src={data.image}
            fluid
            alt="Profile"
            style={{
              width: styles.image.size,
              height: styles.image.size,
              objectFit: "cover",
              borderRadius: styles.image.shape === "rounded-2" ? "5px" : 
                          styles.image.shape === "rounded-circle" ? "50%" : "0px",
            }}
          />
        </Col>

        {/* Name and Title Column */}
        <Col>
          <Typography
            variant="h6"
            sx={{ 
              fontWeight: 600, 
              color: styles.name.color, 
              mb: 0.5,
              fontFamily: styles.name.fontFamily,
              fontSize: `${styles.name.fontSize}px`,
              lineHeight: styles.name.lineHeight,
            }}
          >
            {data.name}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{
              color: styles.title.color,
              fontFamily: styles.title.fontFamily,
              fontSize: `${styles.title.fontSize}px`,
              lineHeight: styles.title.lineHeight,
            }}
          >
            {data.title}
            {data.title && data.company && ", "}
            <span style={styles.company}>{data.company}</span>
          </Typography>
        </Col>
      </Row>

      {/* Two-Column Layout for Contact & Social */}
      <Row className="gx-5">
        {/* Left Column: Contact Details */}
        <Col xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {/* Phone */}
            {data.phone && (
              <IconLink 
                Icon={Phone} 
                text={data.phone}
                sx={{
                  fontFamily: styles.details.fontFamily,
                  fontSize: `${styles.details.fontSize}px`,
                  color: styles.details.color,
                }}
              />
            )}

            {/* Website */}
            {data.website && (
              <IconLink
                Icon={Language}
                text={data.website}
                link={data.website}
                sx={{
                  fontFamily: styles.details.fontFamily,
                  fontSize: `${styles.details.fontSize}px`,
                  color: styles.details.color,
                }}
              />
            )}

            {/* Email */}
            {data.email && (
              <IconLink
                Icon={MailOutline}
                text={data.email}
                link={`mailto:${data.email}`}
                sx={{
                  fontFamily: styles.details.fontFamily,
                  fontSize: `${styles.details.fontSize}px`,
                  color: styles.details.color,
                }}
              />
            )}

            {/* Address */}
            {data.address && (
              <IconLink 
                Icon={LocationOnOutlined} 
                text={data.address}
                sx={{
                  fontFamily: styles.details.fontFamily,
                  fontSize: `${styles.details.fontSize}px`,
                  color: styles.details.color,
                }}
              />
            )}
          </Box>
        </Col>

        {/* Right Column: Social Media Links */}
        <Col xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {socialIcons.map(({ Icon, color, label }) => {
              const socialUrl = socialLinks[label];
              if (!socialUrl) return null;
              
              return (
                <Tooltip key={label} title={socialUrl} placement="right">
                  <Box 
                    sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 1,
                      cursor: "pointer",
                      "&:hover": { opacity: 0.8 }
                    }}
                    onClick={() => window.open(socialUrl, "_blank", "noopener,noreferrer")}
                  >
                    <Icon fontSize="small" sx={{ color }} />
                    <Typography 
                      variant="body2" 
                      sx={{
                        fontFamily: styles.details.fontFamily,
                        fontSize: `${styles.details.fontSize}px`,
                        color: styles.details.color,
                      }}
                    >
                      {socialUrl.replace(/^https?:\/\/(www\.)?/, '')}
                    </Typography>
                  </Box>
                </Tooltip>
              );
            })}
          </Box>
        </Col>
      </Row>

      {/* Quote Section */}
      {shouldShowQuote && (
        <Box sx={{ my: 3, p: 2, backgroundColor: "#f8f9fa", borderRadius: 1 }}>
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
        <Box sx={{ mt: 3 }}>
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
    </Card>
  );
};

export default Template9;