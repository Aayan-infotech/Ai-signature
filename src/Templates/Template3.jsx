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

const Template3 = ({ data }) => {
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
      className="shadow-sm border-0 p-3 d-flex m-auto ms-5 w-100"
      style={{ maxWidth: "600px", fontFamily: "Arial, sans-serif" }}
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

      {/* Main Layout */}
      <Row className="align-items-center">
        <Col xs={3}>
          <Image
            src={data.image}
            roundedCircle
            fluid
            alt="Profile"
            style={{ width: "100px", height: "100px" }}
          />
        </Col>
        <Col xs={9}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.25rem",
                      ...styles.name,
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.9rem", ...styles.title }}
                  >
                    {data.title}
                    {data.title && data.company && ", "}
                    <span style={styles.company}>{data.company}</span>
                  </Typography>
                </Box>
                {/* Social Icons */}
                <Box sx={{ mt: 1 }}>
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
                          onClick={() =>
                            socialUrl &&
                            window.open(
                              socialUrl,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
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
                          <Icon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    );
                  })}
                </Box>
              </Box>

              <Box
                sx={{
                  border: "1px solid #BDBDBD",
                  width: "100%",
                  my: 1,
                }}
              />

              {/* Contact Info */}
              <Box sx={{ mt: 1, mb: 1 }}>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={styles.details}
                >
                  Phone: {data.phone} | Mobile: {data.mobile}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={styles.details}
                >
                  Website:{" "}
                  <MUILink
                    href={`https://${data.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                      ...styles.details,
                    }}
                  >
                    {data.website}
                  </MUILink>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={styles.details}
                >
                  Email: {data.email}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={styles.details}
                >
                  Address: {data.address}
                </Typography>
              </Box>

              <Box
                sx={{
                  border: "1px solid #BDBDBD",
                  width: "100%",
                  my: 1,
                }}
              />
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

export default Template3;
