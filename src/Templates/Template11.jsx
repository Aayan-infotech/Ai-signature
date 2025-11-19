import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import {
  Box,
  Typography,
  Link as MUILink,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Close,
  MusicNote,
} from "@mui/icons-material";
import { useSignatureData } from "../hooks/useSignatureData";

const Template11 = ({ data }) => {
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
    feedback,
    shouldShowFeedback,
    getFeedbackIcon,
    getFeedbackStyles,
    handleFeedbackClick,
    videoConference,
    shouldShowVideoConference,
    getVideoConferenceStyles,
    getVideoConferenceIcon,
    handleVideoConferenceClick,
    webinar,
    shouldShowWebinar,
    getWebinarIcon,
    getWebinarStyles,
    handleWebinarClick,
    shouldShowAppDownload,
    getAppDownloadButtonStyles,
    appDownload,
    getAppDownloadStyles,
    getAppDownloadTitleStyles,
    shouldShowJobOffer,
    getJobOfferStyles,
    getJobOfferIntroductionStyles,
    jobOffer,
    getJobOfferButtonStyles,
    handleJobOfferClick,
    getNewsletterIcon,
    handleNewsletterClick,
    getNewsletterLinkStyles,
    newsletter,
    getNewsletterTextStyles,
    getNewsletterStyles,
    getNewsletterTitleStyles,
    shouldShowNewsletter,
    shouldShowCustomHtml,
    renderCustomHtml,
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
      className="shadow-sm border-0 d-flex m-auto ms-5 w-100"
      style={{ maxWidth: "600px", border: "1px solid #ddd", padding: 0 }}
    >
      {/* Banner Section */}
      {shouldShowBanner && (
        <Box sx={{ mb: 2 }}>
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

      {/* Upload Banner Section */}
      {shouldShowUploadBanner && (
        <Box sx={{ mb: 2 }}>
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

      <Box sx={{ p: 3, pb: 0 }}>
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
      </Box>

      {/* Action Buttons Row */}
      <Box sx={{ p: 3, pt: 0 }}>
        <Row className="mb-2">
          <Col md={6}>
            {shouldShowVideoConference && (
              <Box sx={{ my: 1 }}>
                <Button
                  variant="contained"
                  href={videoConference.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={getVideoConferenceStyles()}
                  onClick={handleVideoConferenceClick}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {getVideoConferenceIcon()}
                    <span>{videoConference.buttonText}</span>
                  </Box>
                </Button>
              </Box>
            )}
          </Col>
          <Col md={6}>
            {shouldShowOnlineMeeting && (
              <Box sx={{ my: 1, textAlign: onlineMeeting.align || "left" }}>
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

        {/* Webinar & Feedback Section */}
        <Row className="mb-2">
          <Col md={6}>
            {shouldShowWebinar && (
              <Box sx={{ my: 1 }}>
                <Box sx={{ textAlign: webinar.alignment || "left" }}>
                  {webinar.title && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: webinar.fontColor || "black",
                        fontSize: `${(webinar.fontSize || 50) / 5 + 10}px`,
                        mb: 1,
                      }}
                    >
                      {webinar.title}
                    </Typography>
                  )}
                  <a
                    href={webinar.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={getWebinarStyles()}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = "1";
                    }}
                  >
                    {getWebinarIcon()}
                    {webinar.linkText}
                  </a>
                </Box>
              </Box>
            )}
          </Col>
          <Col md={6}>
            {shouldShowFeedback && (
              <Box
                sx={{
                  my: 1,
                  textAlign: feedback.alignment || "left",
                  display: "flex",
                  justifyContent:
                    feedback.alignment === "center"
                      ? "center"
                      : feedback.alignment === "right"
                      ? "flex-end"
                      : "flex-start",
                }}
              >
                <Box sx={{ textAlign: feedback.alignment || "left" }}>
                  {feedback.title && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: feedback.fontColor || "black",
                        fontSize: `${(feedback.fontSize || 50) / 5 + 10}px`,
                        mb: 1,
                      }}
                    >
                      {feedback.title}
                    </Typography>
                  )}
                  <a
                    href={feedback.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={getFeedbackStyles()}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = "1";
                    }}
                  >
                    {getFeedbackIcon()}
                    {feedback.linkText}
                  </a>
                </Box>
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
      </Box>

      <Box sx={{ pl: 2, pb: 0 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-4">
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
              <div className="col-8">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    mb: 3,
                  }}
                >
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
                  {data.phone && (
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: styles.details.fontFamily,
                        fontSize: `${styles.details.fontSize}px`,
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
                      }}
                    >
                      W{" "}
                      <MUILink
                        href={`https://${data.website}`}
                        underline="none"
                        sx={{
                          color: "#fff",
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
                      }}
                    >
                      A {data.address}
                    </Typography>
                  )}
                </Box>
              </div>
            </div>
            <Box
              sx={{
                backgroundColor: accentColor,
                width: "100%",
                p: 2,
                color: "#fff",
                mt: 2,
              }}
            >
              {/* Custom Button & Job Offer Section */}
              <Row className="mt-2">
                <Col md={6}>
                  {shouldShowJobOffer && (
                    <Box sx={getJobOfferStyles()}>
                      <Typography
                        variant="body1"
                        sx={getJobOfferIntroductionStyles()}
                      >
                        {jobOffer.introduction}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent:
                            jobOffer.style?.alignment === "center"
                              ? "center"
                              : jobOffer.style?.alignment === "right"
                              ? "flex-end"
                              : "flex-start",
                        }}
                      >
                        <a
                          href={jobOffer.positionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={getJobOfferButtonStyles()}
                          onMouseEnter={(e) => {
                            e.target.style.opacity = "0.9";
                            e.target.style.transform = "translateY(-1px)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.opacity = "1";
                            e.target.style.transform = "translateY(0)";
                          }}
                          onClick={handleJobOfferClick}
                        >
                          {jobOffer.buttonText}
                        </a>
                      </Box>
                    </Box>
                  )}
                </Col>
                <Col md={6}>
                  {shouldShowCustomButton && (
                    <Box
                      sx={{
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
              </Row>

              {/* App Download & Newsletter Section */}
              <Row className="mt-2">
                <Col md={8}>
                  {shouldShowAppDownload && (
                    <Box sx={getAppDownloadStyles()}>
                      <Typography variant="h6" sx={getAppDownloadTitleStyles()}>
                        {appDownload.title}
                      </Typography>

                      <Box
                        sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                      >
                        {/* Google Play Button */}
                        {appDownload.googlePlayLink &&
                          appDownload.googlePlayLink !==
                            "https://play.google.com/store/apps/details?id=APP_ID" && (
                            <a
                              href={appDownload.googlePlayLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={getAppDownloadButtonStyles("google")}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#e9ecef";
                                e.target.style.transform = "translateY(-1px)";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#f8f9fa";
                                e.target.style.transform = "translateY(0)";
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-google-play"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                                </svg>
                                Google Play
                              </Box>
                            </a>
                          )}

                        {/* App Store Button */}
                        {appDownload.appStoreLink &&
                          appDownload.appStoreLink !==
                            "https://itunes.apple.com/us/app/APP_NAME" && (
                            <a
                              href={appDownload.appStoreLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={getAppDownloadButtonStyles("apple")}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#e9ecef";
                                e.target.style.transform = "translateY(-1px)";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#f8f9fa";
                                e.target.style.transform = "translateY(0)";
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-apple"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                </svg>
                                App Store
                              </Box>
                            </a>
                          )}
                      </Box>
                    </Box>
                  )}
                </Col>
                <Col md={4}>
                  {shouldShowNewsletter && (
                    <Box sx={getNewsletterStyles()}>
                      <Typography variant="h6" sx={getNewsletterTitleStyles()}>
                        {newsletter.title}
                      </Typography>

                      {newsletter.text &&
                        newsletter.text !==
                          "e.g. Get the best marketing tips" && (
                          <Typography
                            variant="body2"
                            sx={getNewsletterTextStyles()}
                          >
                            {newsletter.text}
                          </Typography>
                        )}

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent:
                            newsletter.style?.alignment === "center"
                              ? "center"
                              : newsletter.style?.alignment === "right"
                              ? "flex-end"
                              : "flex-start",
                        }}
                      >
                        <a
                          href={newsletter.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={getNewsletterLinkStyles()}
                          onMouseEnter={(e) => {
                            e.target.style.opacity = "0.8";
                            e.target.style.textDecoration = "underline";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.opacity = "1";
                            e.target.style.textDecoration = "none";
                          }}
                          onClick={handleNewsletterClick}
                        >
                          {getNewsletterIcon()}
                          Subscribe Now
                        </a>
                      </Box>
                    </Box>
                  )}
                  <Box sx={{ display: "flex", gap: 0.5, mt: 2 }}>
                    {socialIcons.map(({ Icon, label }) => {
                      const socialUrl = socialLinks[label];
                      return (
                        <Tooltip
                          key={label}
                          title={socialUrl || `Add ${label} URL`}
                        >
                          <IconButton
                            size="small"
                            onClick={() =>
                              socialUrl &&
                              window.open(
                                socialUrl,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                            sx={{
                              color: "#fff",
                              backgroundColor: socialUrl
                                ? "rgba(255, 255, 255, 0.1)"
                                : "rgba(255, 255, 255, 0.05)",
                              padding: "4px",
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
                </Col>
              </Row>

              {/* Video and Image Gallery Section */}
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
                                border: "1px solid rgba(255,255,255,0.3)",
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
                                color: "#fff",
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
                          <Box
                            sx={{
                              border: "1px solid rgba(255,255,255,0.3)",
                              px: 0.8,
                              py: 1,
                            }}
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
                                width={100}
                                height={80}
                                style={{
                                  borderRadius: "4px",
                                  border: "1px solid rgba(255,255,255,0.3)",
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
                                  color: "#fff",
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
                  {/* Social Media Icons (White Icons on Colored Background) */}

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
                              border: "1px solid rgba(255,255,255,0.3)",
                              borderRadius: getImageBorderRadius(
                                imageGallery.shape
                              ),
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
                                borderRadius: getImageBorderRadius(
                                  imageGallery.shape
                                ),
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
                            color: "#fff",
                          }}
                        >
                          {imageGallery.galleryTitle}
                        </Typography>
                      )}
                    </Box>
                  )}
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Box>

      {/* Quote Section */}
      {shouldShowQuote && (
        <Box sx={{ my: 1, p: 2, backgroundColor: "#f8f9fa", borderRadius: 1 }}>
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

      {/* Green Footer Section */}
      {shouldShowGreenFooter && (
        <Box
          sx={{
            mt: 2,
            textAlign: greenFooter.align || "left",
            p: 2,
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

      {/* Custom HTML Section */}
      {shouldShowCustomHtml && renderCustomHtml()}
    </Card>
  );
};

export default Template11;
