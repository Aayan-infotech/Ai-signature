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
  Phone, // For phone icon
  Language, // For website icon
  MailOutline, // For email icon
  LocationOnOutlined, // For location icon
  Close, // Using Close for 'X' (Twitter/X)
  MusicNote, // For TikTok icon
} from "@mui/icons-material";
import { useSignatureData } from "../hooks/useSignatureData";

const Template7 = ({ data }) => {
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
    { Icon: Close, color: getSocialColor("#000000"), label: "twitter" },
    { Icon: MusicNote, color: getSocialColor("#000000"), label: "tiktok" },
  ];
  console.log(styles.image);

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100 p-3"
      style={{ maxWidth: "500px" }}
    >
      {/* Signature / Signoff */}

      <Row>
        {/* Left Column: Name, Title, Contact Details, Social Media */}
        <Col xs={7}>
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
          <Box>
            {/* Name and Title */}
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#333", mb: 0.5, ...styles.name }}
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
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 2 }}
            >
              {/* Phone Numbers (on one line) */}
              {(data.phone || data.phone2) && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {data.phone && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Phone fontSize="small" color="action" />
                      <Typography variant="body3" sx={{ ...styles.details }}>
                        {data.phone}
                      </Typography>
                    </Box>
                  )}
                  {data.phone2 && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Phone fontSize="small" color="action" />
                      <Typography variant="body3" sx={{ ...styles.details }}>
                        {data.phone2}
                      </Typography>
                    </Box>
                  )}
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

        {/* Right Column: Profile Image and Default Signature */}
        <Col xs={5}>
          {/* Social Media Icons (Left-aligned, circular, with border) */}
          <Box sx={{ display: "flex", gap: 0.5 }}>
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
                      color: socialUrl ? "#555" : "#ccc",
                      border: `1px solid ${socialUrl ? "#ccc" : "#eee"}`,
                      borderRadius: "50%",
                      width: 30,
                      height: 30,
                      p: 0,
                      "& .MuiSvgIcon-root": {
                        fontSize: styles.social.size,
                      },
                      "&:hover": {
                        backgroundColor: socialUrl
                          ? "rgba(0, 0, 0, 0.05)"
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
          <div
            className={`d-flex flex-column h-100 justify-content-${styles.image.position}`}
          >
            {/* Default Kind Regards Signature if no custom signature */}
            {displayData.type === "none" && (
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Pacifico', cursive",
                  mb: 2,
                  color: "#000",
                }}
              >
                Kind regards.
              </Typography>
            )}
            <div className={`d-flex `}>
              <Image
                src={data.image}
                className={styles.image.shape}
                fluid
                alt="Profile"
                style={{
                  width: styles.image.size,
                  height: styles.image.size,
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
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

      {/* Quote */}
      {shouldShowQuote && (
        <Box
          sx={{
            my: 2,
            p: 2,
            backgroundColor: "#f8f9fa",
            borderRadius: 1,
          }}
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

      {/* 🔹 NEW: Green Footer Section */}
      {shouldShowGreenFooter && (
        <Box
          sx={{
            mt: 2,
           
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

      {/* Disclaimer */}
      {shouldShowDisclaimer && (
        <Box sx={{ mt: 3, mb: 2 }}>
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

export default Template7;
