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