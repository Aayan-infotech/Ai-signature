import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import {
  Box,
  Typography,
  Link as MUILink,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, MusicNote } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { useSignatureData } from "../hooks/useSignatureData";

const Template4 = ({ data }) => {
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
    shouldShowVideo,
    youtubeVideo,
    getYoutubeThumbnail,
    greenFooter,
    getGreenFooterIcon,
    shouldShowGreenFooter,
    getImageBorderRadius,
    imageGallery,
    shouldShowImageGallery,
  } = useSignatureData(data);

  const socialIcons = [
    { Icon: Instagram, color: getSocialColor("#E4405F"), label: "instagram" },
    { Icon: Facebook, color: getSocialColor("#1877F2"), label: "facebook" },
    { Icon: LinkedIn, color: getSocialColor("#0077B5"), label: "linkedin" },
    { Icon: XIcon, color: getSocialColor("#000000"), label: "twitter" },
    { Icon: MusicNote, color: getSocialColor("#000000"), label: "music" },
  ];

  return (
    <Card
      className="shadow-sm border-0 p-4 d-flex m-auto w-100"
      style={{
        maxWidth: "500px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "10px",
      }}
    >
      {/* Signature Section */}

      {/* Main Layout */}
      <Row className="align-items-start">
        <Col xs={4}>
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
                  variant="body2"
                  sx={{
                    fontFamily: getFontFamily(displayData.fontStyle),
                    fontSize: `${displayData.size}px`,
                    mb: 2,
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

          <Image
            src={data.image}
            roundedCircle
            fluid
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              border: "3px solid #f0f0f0",
            }}
          />
        </Col>

        <Col xs={8}>
          <Box sx={{ pl: 2 }}>
            {/* Name, Title, Company */}
            <Box sx={{ textAlign: "left", mb: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.2,
                  ...styles.name,
                }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  color: "#666",
                  ...styles.title,
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: "#333",
                  ...styles.company,
                }}
              >
                {data.company}
              </Typography>
            </Box>

            {/* Contact Info */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 0.6 }}>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.9rem", ...styles.details }}
              >
                {data.phone}
              </Typography>
            </Box>

            {data.mobile && (
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.6 }}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.9rem", ...styles.details }}
                >
                  {data.mobile}
                </Typography>
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center", mb: 0.6 }}>
              <MUILink
                href={`https://${data.website?.replace("/", ".")}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  color: "#1976d2",
                  "&:hover": { textDecoration: "underline" },
                  ...styles.details,
                }}
              >
                {data.website}
              </MUILink>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 0.6 }}>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.9rem", ...styles.details }}
              >
                {data.email}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.9rem", ...styles.details }}
              >
                {data.address}
              </Typography>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
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
                        color: socialUrl ? color : "#ccc",
                        backgroundColor: "#f5f5f5",
                        padding: "4px",
                        "& .MuiSvgIcon-root": {
                          fontSize: styles.social.size,
                        },
                        "&:hover": {
                          backgroundColor: socialUrl ? "#e0e0e0" : "#f5f5f5",
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
        </Col>
      </Row>

      {/* 🔹 NEW: Video and Image Gallery Section */}
      <div className="row mt-3">
        <div className="col-6">
          {shouldShowVideo && (
            <Box sx={{ my: 1 }}>
              {youtubeVideo.styleType === "compact" ? (
                <div
                  className={`d-flex flex-column align-items-${youtubeVideo.align} gap-2`}
                >
                  <a
                    href={youtubeVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                  >
                    <img
                      src={getYoutubeThumbnail(youtubeVideo.videoId)}
                      alt="YouTube thumbnail"
                      width={120}
                      height={90}
                      style={{
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                      }}
                      onError={(e) => {
                        // Fallback if thumbnail doesn't exist
                        e.target.src = getYoutubeThumbnail(
                          youtubeVideo.videoId,
                          "default"
                        );
                      }}
                    />
                  </a>
                  {youtubeVideo.title && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: youtubeVideo.color || "#4a4a4a",
                        fontSize: `${youtubeVideo.fontSize || 14}px`,
                        fontWeight: 500,
                        maxWidth: "120px",
                      }}
                    >
                      {youtubeVideo.title}
                    </Typography>
                  )}
                </div>
              ) : (
                <div
                  className={`d-flex flex-column align-items-${youtubeVideo.align} gap-2`}
                >
                  <Box sx={{ border: "1px solid #e0e0e0", px: 0.8, py: 1 }}>
                    <a
                      href={youtubeVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      <img
                        src={getYoutubeThumbnail(youtubeVideo.videoId)}
                        alt="YouTube thumbnail"
                        width={100}
                        height={80}
                        style={{
                          borderRadius: "4px",
                          border: "1px solid #ddd",
                        }}
                        onError={(e) => {
                          // Fallback if thumbnail doesn't exist
                          e.target.src = getYoutubeThumbnail(
                            youtubeVideo.videoId,
                            "default"
                          );
                        }}
                      />
                    </a>
                    {youtubeVideo.title && (
                      <Typography
                        className="ms-2"
                        variant="caption"
                        sx={{
                          color: youtubeVideo.color || "#4a4a4a",
                          fontSize: `${youtubeVideo.fontSize || 14}px`,
                          fontWeight: 500,
                          maxWidth: "120px",
                        }}
                      >
                        {youtubeVideo.title}
                      </Typography>
                    )}
                  </Box>
                </div>
              )}
            </Box>
          )}
        </div>
        <div className="col-lg-6">
          {/* 🔹 NEW: Image Gallery */}
          {shouldShowImageGallery && (
            <Box sx={{ my: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: `${imageGallery.spaceBetween || 20}px`,
                  justifyContent: "flex-start",
                }}
              >
                {imageGallery.images.map((img, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      width: imageGallery.imageSize || 50,
                      height: imageGallery.imageSize || 50,
                      overflow: "hidden",
                      border: "1px solid #e0e0e0",
                      borderRadius: getImageBorderRadius(imageGallery.shape),
                      cursor:
                        imageGallery.applyLink && imageGallery.link
                          ? "pointer"
                          : "default",
                    }}
                    onClick={() => {
                      if (imageGallery.applyLink && imageGallery.link) {
                        window.open(
                          imageGallery.link,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }
                    }}
                  >
                    <img
                      src={img}
                      alt={`Gallery image ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: getImageBorderRadius(imageGallery.shape),
                      }}
                    />
                  </Box>
                ))}
              </Box>
              {imageGallery.galleryTitle && (
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    fontSize: "12px",
                    color: "#333",
                  }}
                >
                  {imageGallery.galleryTitle}
                </Typography>
              )}
            </Box>
          )}
        </div>
      </div>

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
        <Box sx={{ mb: 1 }}>
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

      {/* 🔹 NEW: Green Footer Section */}
      {shouldShowGreenFooter && (
        <Box
          sx={{
            mt: 2,
            pt: 2,
            borderTop: "1px solid #e0e0e0",
            textAlign: greenFooter.align || "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:
                greenFooter.align === "center"
                  ? "center"
                  : greenFooter.align === "right"
                  ? "flex-end"
                  : "flex-start",
              gap: 1,
            }}
          >
            {greenFooter.icon && greenFooter.icon !== "none" && (
              <Typography
                sx={{
                  fontSize: `${greenFooter.fontSize || 14}px`,
                  color: greenFooter.color || "#57c84d",
                }}
              >
                {getGreenFooterIcon(greenFooter.icon)}
              </Typography>
            )}
            <Typography
              variant="body2"
              sx={{
                color: greenFooter.color || "#57c84d",
                fontSize: `${greenFooter.fontSize || 14}px`,
                fontStyle: "italic",
                lineHeight: 1.4,
              }}
            >
              {greenFooter.text}
            </Typography>
          </Box>
        </Box>
      )}
    </Card>
  );
};

export default Template4;