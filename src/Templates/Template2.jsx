import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import {
  Box,
  Typography,
  Link as MUILink,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { useSignatureData } from "../hooks/useSignatureData";

const Template2 = ({ data }) => {
  // 🔹 Reuse all the logic from the hook
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
    { Icon: XIcon, color: getSocialColor("#000000"), label: "twitter" },
  ];

  return (
    <Card
      className="shadow-sm border-0 p-3 d-flex m-auto ms-5 w-100"
      style={{ maxWidth: "600px" }} // (example: UI difference allowed)
    >
      {/* 🔹 Signature or Signoff Section (unchanged UI) */}
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

      {/* 🔹 Template-specific UI below — unchanged */}
      <Row>
        <Col xs={4}>
          <Image
            src={data.image}
            className={styles.image.shape}
            style={{
              width: styles.image.size,
              height: styles.image.size,
              borderRadius: "8px",
              objectFit: "cover",
            }}
            alt="Profile"
          />
        </Col>

        <Col xs={8}>
          <Typography variant="h6" sx={{ fontWeight: 700, ...styles.name }}>
            {data.name}
          </Typography>

          <Typography variant="body2" sx={{ ...styles.title }}>
            {data.title}
            {data.title && data.company && ", "}
            <span style={styles.company}>{data.company}</span>
          </Typography>

          {/* Contact Info */}
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2" sx={{ ...styles.details }}>
              {data.phone}
              {data.phone && data.website && " | "}
              {data.website && (
                <MUILink
                  href={`https://${data.website}`}
                  sx={{
                    ...styles.details,
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {data.website}
                </MUILink>
              )}
            </Typography>
            <Typography variant="body2" sx={{ ...styles.details }}>
              {data.email}
              {data.email && data.address && " | "}
              {data.address}
            </Typography>
          </Box>

          {/* Social icons */}
          <Box sx={{ display: "flex", gap: `${styles.social.space}px`, mt: 1 }}>
            {socialIcons.map(({ Icon, color, label }) => {
              const socialUrl = socialLinks[label];
              return (
                <Tooltip key={label} title={socialUrl || `Add ${label} URL`}>
                  <IconButton
                    size="small"
                    onClick={() =>
                      socialUrl &&
                      window.open(socialUrl, "_blank", "noopener,noreferrer")
                    }
                    sx={{
                      color: socialUrl ? color : "#ccc",
                      "& .MuiSvgIcon-root": {
                        fontSize: styles.social.size,
                      },
                    }}
                    disabled={!socialUrl}
                  >
                    <Icon />
                  </IconButton>
                </Tooltip>
              );
            })}
          </Box>
        </Col>
      </Row>

      {/* Quote and Disclaimer (unchanged UI) */}
      {shouldShowQuote && (
        <Box sx={{ mt: 3, p: 2, backgroundColor: "#f1f3f5", borderRadius: 1 }}>
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

      {shouldShowDisclaimer && (
        <Box sx={{ mt: 3 }}>
          {disclaimerStyle.decorativeLine && (
            <Box
              sx={{
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${disclaimerStyle.color}, transparent)`,
                mb: 1,
              }}
            />
          )}
          <Typography
            variant="body2"
            sx={{
              color: disclaimerStyle.color || "#4a4a4a",
              fontSize: `${disclaimerStyle.fontSize || 13}px`,
              textAlign: disclaimerStyle.align || "left",
              lineHeight: 1.4,
              fontStyle: "italic",
            }}
          >
            {disclaimerStyle.text}
          </Typography>
        </Box>
      )}
    </Card>
  );
};

export default Template2;
