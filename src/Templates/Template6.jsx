import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import {
  Box,
  Typography,
  Link as MUILink,
  IconButton,
  Tooltip,
} from "@mui/material";
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
import { useSignatureData } from "../hooks/useSignatureData";

const Template6 = ({ data }) => {
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

  const socialIcons = [
    { Icon: Instagram, color: getSocialColor("#E4405F"), label: "instagram" },
    { Icon: Facebook, color: getSocialColor("#1877F2"), label: "facebook" },
    { Icon: LinkedIn, color: getSocialColor("#0077B5"), label: "linkedin" },
    { Icon: Close, color: getSocialColor("#000000"), label: "twitter" },
    { Icon: MusicNote, color: getSocialColor("#000000"), label: "tiktok" },
  ];

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100"
      style={{ maxWidth: "500px", border: "1px solid #ddd" }}
    >
      <Box sx={{ p: 3 }}>
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
                variant="h5"
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

        {/* Default Kind Regards Signature if no custom signature */}
        {displayData.type === "none" && (
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
        )}

        <Row className="align-items-start">
          {/* Profile Image Column */}
          <Col xs={3} style={{ flexShrink: 0 }}>
            <Image
              src={data.image}
              fluid
              alt="Profile"
              style={{
                width: styles.image.size,
                height: styles.image.size,
                objectFit: "cover",
                borderRadius: styles.image.shape === "rounded" ? "50%" : "3px",
              }}
            />
          </Col>

          {/* Name, Title, and Contact Details Column */}
          <Col xs={9}>
            <Box>
              {/* Name and Title */}
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#333", ...styles.name }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                sx={{ mb: 2, ...styles.title }}
              >
                {data.title}
                {data.title && data.company && ", "}
                <span style={styles.company}>{data.company}</span>
              </Typography>

              {/* Contact Details with Icons */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {/* Phone */}
                {data.phone && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Phone fontSize="small" color="action" />
                    <Typography variant="body3" sx={{ ...styles.details }}>
                      {data.phone}
                    </Typography>
                  </Box>
                )}

                {/* Phone 2 */}
                {data.phone2 && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Phone fontSize="small" color="action" />
                    <Typography variant="body3" sx={{ ...styles.details }}>
                      {data.phone2}
                    </Typography>
                  </Box>
                )}

                {/* Website */}
                {data.website && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Language fontSize="small" color="action" />
                    <MUILink
                      href={`https://${data.website}`}
                      variant="body3"
                      underline="none"
                      color="text.primary"
                      sx={{
                        ...styles.details,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {data.website}
                    </MUILink>
                  </Box>
                )}

                {/* Email */}
                {data.email && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <MailOutline fontSize="small" color="action" />
                    <Typography variant="body3" sx={{ ...styles.details }}>
                      {data.email}
                    </Typography>
                  </Box>
                )}

                {/* Address/Location */}
                {data.address && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOnOutlined fontSize="small" color="action" />
                    <Typography variant="body3" sx={{ ...styles.details }}>
                      {data.address}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Col>
        </Row>

        {/* Quote */}
        {shouldShowQuote && (
          <Box
            sx={{ my: 3, p: 2, backgroundColor: "#f8f9fa", borderRadius: 1 }}
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

        {/* Disclaimer */}
        {shouldShowDisclaimer && (
          <Box sx={{ mb: 3 }}>
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
      </Box>

      {/* Social Media Footer Bar */}
      <Box
        sx={{
          backgroundColor: "#546e8c",
          width: "100%",
          p: 1.5,
          display: "flex",
          justifyContent: "flex-end",
          gap: 0.5,
        }}
      >
        {/* Social Media Icons with functionality from Template1 */}
        {socialIcons.map(({ Icon, color, label }) => {
          const socialUrl = socialLinks[label];
          return (
            <Tooltip key={label} title={socialUrl || `Add ${label} URL`}>
              <IconButton
                size="small"
                aria-label={label}
                onClick={() =>
                  socialUrl &&
                  window.open(socialUrl, "_blank", "noopener,noreferrer")
                }
                sx={{
                  color: socialUrl ? "#fff" : "rgba(255,255,255,0.5)",
                  border: `1px solid ${
                    socialUrl ? "#fff" : "rgba(255,255,255,0.3)"
                  }`,
                  borderRadius: "50%",
                  width: 30,
                  height: 30,
                  p: 0,
                  "&:hover": {
                    backgroundColor: socialUrl
                      ? "rgba(255, 255, 255, 0.1)"
                      : "transparent",
                  },
                }}
                disabled={!socialUrl}
              >
                <Icon fontSize="small" />
              </IconButton>
            </Tooltip>
          );
        })}
      </Box>
    </Card>
  );
};

export default Template6;
