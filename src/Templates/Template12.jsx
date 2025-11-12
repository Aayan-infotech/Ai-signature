import React from "react";
import {
  Card,
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
import { Image } from "react-bootstrap";
import { useSignatureData } from "../hooks/useSignatureData";

const Template12 = ({ data }) => {
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

  const accentColor = "#546e7a"; // Slate Blue/Grey from the image

  // Social icon mapping
  const socialIcons = [
    { Icon: Instagram, label: "instagram" },
    { Icon: Facebook, label: "facebook" },
    { Icon: LinkedIn, label: "linkedin" },
    { Icon: Close, label: "x" },
    { Icon: MusicNote, label: "tiktok" },
  ];

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto ms-5 w-100 flex-column justify-content-start align-items-start"
      style={{ maxWidth: "600px" }}
    >
      <div className="row">
        <div className="col-lg-12">
          <Box sx={{ p: 3, pb: 2, textAlign: "center" }}>
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
                      style={{
                        maxWidth: "200px",
                        height: "auto",
                        margin: "0 auto",
                      }}
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

            {/* Name and Title Block (Centered) */}
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

            {/* Profile Image (Centered) */}
            <Image
              src={data.image}
              fluid
              alt="Profile"
              style={{
                width: styles.image.size,
                height: styles.image.size,
                objectFit: "cover",
                margin: "0 auto",
                display: "block",
                borderRadius:
                  styles.image.shape === "rounded-2"
                    ? "5px"
                    : styles.image.shape === "rounded-circle"
                    ? "50%"
                    : "0px",
              }}
            />
          </Box>

          {/* Colored Contact/Social Block */}
          <Box
            sx={{
              backgroundColor: accentColor,
              width: "100%",
              p: 2,
              color: "#fff",
              textAlign: "center",
            }}
          >
            {/* Contact Details with Monograms (Horizontal layout) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                mb: 2,
              }}
            >
              {data.phone && (
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: styles.details.fontFamily,
                    fontSize: `${styles.details.fontSize}px`,
                    fontWeight: 600,
                  }}
                >
                  P {data.phone}
                </Typography>
              )}
              {data.website && (
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: styles.details.fontFamily,
                    fontSize: `${styles.details.fontSize}px`,
                    fontWeight: 600,
                  }}
                >
                  W{" "}
                  <MUILink
                    href={`https://${data.website}`}
                    underline="none"
                    sx={{
                      color: "#fff",
                      fontWeight: 400,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {data.website}
                  </MUILink>
                </Typography>
              )}
              {data.email && (
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: styles.details.fontFamily,
                    fontSize: `${styles.details.fontSize}px`,
                    fontWeight: 600,
                  }}
                >
                  E {data.email}
                </Typography>
              )}
              {data.address && (
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: styles.details.fontFamily,
                    fontSize: `${styles.details.fontSize}px`,
                    fontWeight: 600,
                  }}
                >
                  A {data.address}
                </Typography>
              )}
            </Box>

            {/* Social Media Icons (Centered) */}
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}
            >
              {socialIcons.map(({ Icon, label }) => {
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
                        color: "#fff",
                        backgroundColor: socialUrl
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(255, 255, 255, 0.05)",
                        "&:hover": {
                          backgroundColor: socialUrl
                            ? "rgba(255, 255, 255, 0.2)"
                            : "rgba(255, 255, 255, 0.05)",
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
            <Box sx={{ mt: 1, p: 2 }}>
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

export default Template12;
