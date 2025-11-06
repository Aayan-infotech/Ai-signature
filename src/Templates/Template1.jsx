import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, MusicNote } from "@mui/icons-material";

const Template1 = ({ data }) => {
  // Helper function to get value with fallback
  const getValue = (designValue, parentValue, defaultValue = "") => {
    return designValue || parentValue || defaultValue;
  };

  const { design = {}, fontFamily, fontSize, lineSpacing } = data;

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
    { Icon: Instagram, color: getSocialColor("#E4405F"), label: "Instagram" },
    { Icon: Facebook, color: getSocialColor("#1877F2"), label: "Facebook" },
    { Icon: LinkedIn, color: getSocialColor("#0077B5"), label: "LinkedIn" },
    { Icon: MusicNote, color: getSocialColor("#000000"), label: "TikTok" },
  ];

  console.log("styles in template ", styles);

  return (
    <Card
      className="shadow-sm border-0 p-3 d-flex m-auto w-100"
      style={{ maxWidth: "500px" }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Pacifico', cursive",
          mb: 1,
          color: getValue(design.color, "#000000"),
        }}
      >
        Kind regards,
      </Typography>

      <Row className="">
        <Col
          xs={3}
         className={`d-flex align-items-${styles.image.position}`}
        >
          <Image
            src={data.image}
            className={styles.image.shape}
            style={{ width: styles.image.size , height: styles.image.size }}
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
                {socialIcons.map(({ Icon, color, label }) => (
                  <IconButton
                    key={label}
                    size="small"
                    aria-label={label}
                    sx={{
                      color,
                      padding: "4px",
                      "& .MuiSvgIcon-root": {
                        fontSize: styles.social.size,
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Col>
      </Row>
    </Card>
  );
};

export default Template1;
