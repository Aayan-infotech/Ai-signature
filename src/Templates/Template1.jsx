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
import { Button } from "@mui/material";

const Template1 = ({ data }) => {
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
    shouldShowOnlineMeeting,
    getButtonStyles,
    getButtonIcon,
    getSchedulingProviderName,
    onlineMeeting,
    shouldShowSocialButtons,
    socialButtons,
    banner,
    shouldShowBanner,
    getBannerStyles,
    handleBannerClick,
    customButton,
    shouldShowCustomButton,
    getCustomButtonStyles,
    getCustomButtonArrow,
    handleCustomButtonClick,
      uploadBanner,
    shouldShowUploadBanner,
    getUploadBannerStyles,
    handleUploadBannerClick,
  } = useSignatureData(data);

  const socialIcons = [
    { Icon: Instagram, color: getSocialColor("#E4405F"), label: "instagram" },
    { Icon: Facebook, color: getSocialColor("#1877F2"), label: "facebook" },
    { Icon: LinkedIn, color: getSocialColor("#0077B5"), label: "linkedin" },
    { Icon: XIcon, color: getSocialColor("#000000"), label: "twitter" },
  ];

  console.log("socialButtons", socialButtons);
  return (
    <Card
      className="shadow-sm border-0 p-3 d-flex m-auto ms-5 w-100"
      style={{ maxWidth: "500px" }}
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
      <Row>
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
            <Box sx={{ border: "1px solid #BDBDBD", height: "150px" }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, ...styles.name }}>
                {data.name}
              </Typography>
              <Typography variant="body2" sx={{ ...styles.title }}>
                {data.title}
                {data.title && data.company && ", "}
                <span style={styles.company}>{data.company}</span>
              </Typography>

              {/* Contact */}
              <Box sx={{ mt: 1, mb: 1 }}>
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

              {/* Social */}
              <Box sx={{ display: "flex", gap: `${styles.social.space}px` }}>
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
      <Row>
        <Col md={6}>
          {shouldShowCustomButton && (
            <Box
              sx={{
                my: 2,
                textAlign: customButton.alignment || "left",
                display: "flex",
                justifyContent:
                  customButton.alignment === "center"
                    ? "center"
                    : customButton.alignment === "right"
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              {customButton.type === "Simple link" ? (
                <a
                  href={customButton.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={getCustomButtonStyles()}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                >
                  {customButton.buttonText}
                  {getCustomButtonArrow()}
                </a>
              ) : (
                <Button
                  variant="contained"
                  href={customButton.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ...getCustomButtonStyles(),
                    textTransform: "none",
                    "&:hover": {
                      opacity: 0.9,
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  {customButton.buttonText}
                  {getCustomButtonArrow()}
                </Button>
              )}
            </Box>
          )}
        </Col>
        <Col md={6}>
          {shouldShowOnlineMeeting && (
            <Box sx={{ my: 2, textAlign: onlineMeeting.align || "left" }}>
              <a
                href={onlineMeeting.schedulerUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={getButtonStyles()}
                onMouseEnter={(e) => {
                  if (onlineMeeting.buttonType !== "Simple") {
                    e.target.style.opacity = "0.8";
                    e.target.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (onlineMeeting.buttonType !== "Simple") {
                    e.target.style.opacity = "1";
                    e.target.style.transform = "translateY(0)";
                  }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {getButtonIcon()}
                  <span>{onlineMeeting.buttonText || "Book a meeting"}</span>
                </Box>
              </a>

              {/* Provider badge */}
              {onlineMeeting.showProviderBadge !== false && (
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mt: 0.5,
                    color: "#666",
                    fontSize: "10px",
                  }}
                >
                  Powered by {getSchedulingProviderName()}
                </Typography>
              )}
            </Box>
          )}
        </Col>
      </Row>

      {/* Social Buttons Section */}
      {shouldShowSocialButtons &&
        socialButtons.links &&
        socialButtons.links.length > 0 && (
          <Box sx={{ my: 2 }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                justifyContent: socialButtons.align || "flex-start",
              }}
            >
              {socialButtons.links.map((button) => (
                <Button
                  key={button.platform}
                  variant="contained"
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: button.color,
                    color: "white",

                    textTransform: "none",
                    borderRadius:
                      socialButtons.shape === "square"
                        ? 0
                        : socialButtons.shape === "rounded_sm"
                        ? "4px"
                        : "50px",
                    border:
                      socialButtons.style === "Stroke"
                        ? "2px solid white"
                        : "none",
                    boxShadow:
                      socialButtons.style === "Stroke"
                        ? `0 0 0 2px ${button.color}`
                        : "none",
                    minWidth: "auto",
                    px: 2,
                    py: 1,
                    fontSize: "12px",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: button.color,
                      opacity: 0.9,
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {button.text}
                </Button>
              ))}
            </Box>
          </Box>
        )}
      {/* Quote */}
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
      <div className="row">
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
          {/* Image Gallery */}
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
      {/* Disclaimer */}
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

       {shouldShowUploadBanner && (
        <Box sx={{ mb: 3 }}>
          <img
            src={uploadBanner.imageUrl}
            alt="Uploaded banner"
            style={getUploadBannerStyles()}
            onClick={handleUploadBannerClick}
            onError={(e) => {
              console.error("Failed to load uploaded banner image");
              e.target.style.display = "none";
            }}
          />
        </Box>
      )}
      {shouldShowBanner && (
        <Box sx={{ mb: 2, mt: 1 }}>
          {banner.type === "predesigned" &&
          banner.predesigned?.selectedBanner ? (
            <img
              src={banner.predesigned.selectedBanner.img}
              alt="Predesigned banner"
              style={getBannerStyles()}
              onClick={handleBannerClick}
              onError={(e) => {
                console.error("Failed to load banner image");
                e.target.style.display = "none";
              }}
            />
          ) : banner.type === "custom" && banner.custom?.imageUrl ? (
            <img
              src={banner.custom.imageUrl}
              alt="Custom banner"
              style={getBannerStyles()}
              onClick={handleBannerClick}
              onError={(e) => {
                console.error("Failed to load custom banner image");
                e.target.style.display = "none";
              }}
            />
          ) : (
            <Box
              sx={{
                ...getBannerStyles(),
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dashed #ddd",
                color: "#999",
              }}
            >
              <Typography variant="body2">
                Banner preview not available
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Card>
  );
};

export default Template1;
