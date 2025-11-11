import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import Tooltip from "@mui/material/Tooltip";

const Template1 = ({ data }) => {
  // Helper function to get value with fallback
  const getValue = (designValue, parentValue, defaultValue = "") => {
    return designValue || parentValue || defaultValue;
  };

  const {
    design = {},
    fontFamily,
    fontSize,
    lineSpacing,
    socialLinks = {},
    styledSignedOff,
    disclaimerStyle,
    quoteStyle,
  } = data;

  console.log("Template1 styledSignedOff:", styledSignedOff);

  const getDisplayData = () => {
    // Check the type field first
    if (!styledSignedOff || !styledSignedOff.type) {
      // Default fallback
      return {
        type: "none",
        signOff: "Kind regards,",
        fontStyle: "cursive",
        size: 20,
        alignment: "left",
        color: "#000000",
      };
    }

    const { type } = styledSignedOff;

    // Return data based on the active type
    if (type === "signature" && styledSignedOff.signature) {
      const sig = styledSignedOff.signature;
      return {
        type: sig.isCustom ? "custom" : "signature",
        signOff: sig.signOff,
        signAs: sig.signAs,
        fontStyle: sig.fontStyle,
        size: sig.size,
        alignment: sig.alignment,
        color: sig.color,
        imageData: sig.imageData,
        isCustom: sig.isCustom,
      };
    } else if (type === "signoff" && styledSignedOff.signoff) {
      const soff = styledSignedOff.signoff;
      return {
        type: "signoff",
        signOff: soff.signOff,
        fontStyle: soff.fontStyle,
        size: soff.size,
        alignment: soff.alignment,
        color: soff.color,
      };
    } else if (type === "custom" && styledSignedOff.signature) {
      const sig = styledSignedOff.signature;
      return {
        type: "custom",
        signOff: sig.signOff,
        signAs: sig.signAs,
        fontStyle: "custom",
        size: sig.size,
        alignment: sig.alignment,
        color: sig.color,
        imageData: sig.imageData,
        isCustom: true,
      };
    }

    // Fallback
    return {
      type: "none",
      signOff: "Kind regards,",
      fontStyle: "cursive",
      size: 20,
      alignment: "left",
      color: "#000000",
    };
  };

  const displayData = getDisplayData();

  // Check if disclaimer should be shown
  const shouldShowDisclaimer = disclaimerStyle && disclaimerStyle.type;

  const shouldShowQuote = quoteStyle && quoteStyle.category;

  // Pre-compute style values with fallbacks
  const styles = {
    name: {
      fontFamily: getValue(design.nameFont, fontFamily, "Roboto"),
      fontSize: getValue(design.nameFontSize, fontSize, 13),
      color: getValue(design.nameColor, "#45668E"),
      lineHeight: getValue(design.nameLineSpacing, lineSpacing, 1),
    },
    title: {
      fontFamily: getValue(design.titleFont, fontFamily, "Roboto"),
      fontSize: getValue(design.titleFontSize, fontSize, 13),
      color: getValue(design.titleColor, "#000000"),
      lineHeight: getValue(design.titleLineSpacing, lineSpacing, 1),
    },
    company: {
      fontFamily: getValue(design.companyFont, fontFamily, "Roboto"),
      fontSize: getValue(design.companyFontSize, fontSize, 13),
      color: getValue(design.companyColor, "#000000"),
    },
    details: {
      fontFamily: getValue(design.detailsFont, fontFamily, "Roboto"),
      fontSize: getValue(design.detailsSize, fontSize, 13),
      color: getValue(design.detailsColor, "#000000"),
    },
    social: {
      size: getValue(design.socialSize, 16),
      colorMode: getValue(design.socialColorMode, "web"),
      customColor: getValue(design.socialCustomColor, "#1877F2"),
    },
    image: {
      shape: getValue(design.imageShape, "rounded-2"),
      size: getValue(design.imageSize, "100px"),
      position: getValue(design.imagePosition, "left"),
    },
  };

  // Social icon colors
  const getSocialColor = (originalColor) => {
    return styles.social.colorMode === "web"
      ? originalColor
      : styles.social.customColor;
  };

  const socialIcons = [
    { Icon: Instagram, color: getSocialColor("#E4405F"), label: "instagram" },
    { Icon: Facebook, color: getSocialColor("#1877F2"), label: "facebook" },
    { Icon: LinkedIn, color: getSocialColor("#0077B5"), label: "linkedin" },
    { Icon: XIcon, color: getSocialColor("#000000"), label: "twitter" },
  ];

  // Map font styles to actual font families
  const getFontFamily = (fontStyle) => {
    const fontMap = {
      cursive: "'Dancing Script', cursive",
      handwritten: "'Caveat', cursive",
      formal: "'Playfair Display', serif",
      modern: "'Raleway', sans-serif",
      custom: "'Dancing Script', cursive", // Default for custom
    };
    return fontMap[fontStyle] || fontMap.cursive;
  };

  console.log("Social links in template:", socialLinks);

  return (
    <Card
      className="shadow-sm border-0 p-3 d-flex m-auto w-100"
      style={{ maxWidth: "500px" }}
    >
      {/* Styled Sign-off Section - Only show if type is not 'none' */}
      {displayData.type !== "none" && (
        <Box sx={{ mb: 2 }}>
          {/* For custom signature with image */}
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
            /* For signature and signoff types */
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

      <Row className="">
        <Col xs={3} className={`d-flex align-items-${styles.image.position}`}>
          <Image
            src={data.image}
            className={styles.image.shape}
            style={{ width: styles.image.size, height: styles.image.size }}
            alt="Profile"
          />
        </Col>
        <Col xs={9}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box
              sx={{
                border: "1px solid #BDBDBD",
                height: "150px",
              }}
            />
            <Box>
              {/* Name */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  ...styles.name,
                }}
              >
                {data.name}
              </Typography>

              {/* Title and Company */}
              <Typography
                variant="body2"
                sx={{
                  ...styles.title,
                }}
              >
                {data.title}
                {data.title && data.company && ", "}
                <span
                  style={{
                    fontFamily: styles.company.fontFamily,
                    fontSize: styles.company.fontSize,
                    color: styles.company.color,
                  }}
                >
                  {data.company}
                </span>
              </Typography>

              {/* Contact Details */}
              <Box sx={{ mt: 1, mb: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    ...styles.details,
                  }}
                >
                  {data.phone}
                  {data.phone && data.website && " | "}
                  {data.website && (
                    <MUILink
                      href={`https://${data.website}`}
                      sx={{
                        ...styles.details,
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {data.website}
                    </MUILink>
                  )}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    ...styles.details,
                  }}
                >
                  {data.email}
                  {data.email && data.address && " | "}
                  {data.address}
                </Typography>
              </Box>

              {/* Social Icons */}
              <Box
                sx={{ display: "flex", gap: `${design.socialSpace || 8}px` }}
              >
                {socialIcons.map(({ Icon, color, label }) => {
                  const socialUrl = socialLinks[label];

                  return (
                    <Tooltip
                      key={label}
                      title={socialUrl || `Add ${label} URL`}
                    >
                      <IconButton
                        size="small"
                        aria-label={label}
                        onClick={() => {
                          if (socialUrl) {
                            window.open(
                              socialUrl,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }
                        }}
                        sx={{
                          color: socialUrl ? color : "#ccc",
                          padding: "4px",
                          "& .MuiSvgIcon-root": {
                            fontSize: styles.social.size,
                          },
                          "&:hover": {
                            backgroundColor: socialUrl
                              ? "rgba(0,0,0,0.1)"
                              : "transparent",
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
            </Box>
          </Box>
        </Col>
      </Row>
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
    </Card>
  );
};

export default Template1;
