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
  Close,
  MusicNote,
} from "@mui/icons-material";
import { useSignatureData } from "../hooks/useSignatureData";

const Template10 = ({ data }) => {
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
    {
      Icon: Instagram,
      color: "#fff",
      backgroundColor: "#E4405F",
      label: "instagram",
    },
    {
      Icon: Facebook,
      color: "#fff",
      backgroundColor: "#1877F2",
      label: "facebook",
    },
    {
      Icon: LinkedIn,
      color: "#fff",
      backgroundColor: "#0077B5",
      label: "linkedin",
    },
    { Icon: Close, color: "#fff", backgroundColor: "#000000", label: "x" },
    {
      Icon: MusicNote,
      color: "#fff",
      backgroundColor: "#000000",
      label: "tiktok",
    },
  ];

  // Helper component for the contact details list
  const ContactDetail = ({ label, value, link }) => (
    <Box sx={{ mb: 0.5, display: "flex" }}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
          color: "primary.main",
          minWidth: "70px",
          mr: 1,
          fontFamily: styles.details.fontFamily,
          fontSize: `${styles.details.fontSize}px`,
        }}
      >
        {label}
      </Typography>
      {link ? (
        <MUILink
          href={link}
          variant="body2"
          underline="none"
          color={styles.details.color}
          sx={{
            fontFamily: styles.details.fontFamily,
            fontSize: `${styles.details.fontSize}px`,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {value}
        </MUILink>
      ) : (
        <Typography
          variant="body2"
          color={styles.details.color}
          sx={{
            fontFamily: styles.details.fontFamily,
            fontSize: `${styles.details.fontSize}px`,
          }}
        >
          {value}
        </Typography>
      )}
    </Box>
  );

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto ms-5 w-100"
      style={{ maxWidth: "600px", padding: "20px" }}
    >
      {/* Signature / Signoff */}
      {displayData.type !== "none" && (
        <Box sx={{ mb: 3 }}>
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

      {/* Main 3-Column Content Block */}
      <Row className="align-items-center justify-content-between g-4">
        {/* Left Column: Name, Title, and Social Media Icons */}
        <Col
          xs={4}
          className="d-flex flex-column align-items-center text-center"
        >
          <Box>
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
                mb: 2,
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
          </Box>

          {/* Social Media Icons (Colored Circles) */}
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {socialIcons.map(({ Icon, color, backgroundColor, label }) => {
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
                      backgroundColor: socialUrl ? backgroundColor : "#ccc",
                      color: color,
                      "&:hover": {
                        backgroundColor: socialUrl ? backgroundColor : "#ccc",
                        opacity: 0.8,
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: styles.social.size,
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
        </Col>

        {/* Center Column: Profile Image */}
        <Col xs={3} className="d-flex justify-content-center">
          <Image
            src={data.image}
            fluid
            alt="Profile"
            style={{
              width: styles.image.size,
              height: styles.image.size,
              objectFit: "cover",
              borderRadius:
                styles.image.shape === "rounded-2"
                  ? "5px"
                  : styles.image.shape === "rounded-circle"
                  ? "50%"
                  : "0px",
            }}
          />
        </Col>

        {/* Right Column: Contact Details */}
        <Col xs={5}>
          <Box>
            {data.phone && (
              <ContactDetail
                label="Phone"
                value={data.phone}
                link={`tel:${data.phone}`}
              />
            )}
            {data.website && (
              <ContactDetail
                label="Website"
                value={data.website}
                link={`https://${data.website}`}
              />
            )}
            {data.email && (
              <ContactDetail
                label="Email"
                value={data.email}
                link={`mailto:${data.email}`}
              />
            )}
            {data.address && (
              <ContactDetail label="Address" value={data.address} />
            )}
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

export default Template10;
