import React from "react";
import { Card, Image } from "react-bootstrap";
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
  Phone,
  Language,
  MailOutline,
  LocationOnOutlined,
  MusicNote,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { useSignatureData } from "../hooks/useSignatureData";

const Template5 = ({ data = {} }) => {
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

  const {
    name,
    title,
    company,
    phone,
    mobile,
    website,
    email,
    address,
    image,
  } = data;

  const formatUrl = (url) => {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  const socialIcons = [
    { Icon: Instagram, color: getSocialColor("#E4405F"), label: "instagram" },
    { Icon: Facebook, color: getSocialColor("#1877F2"), label: "facebook" },
    { Icon: LinkedIn, color: getSocialColor("#0077B5"), label: "linkedin" },
    { Icon: XIcon, color: getSocialColor("#000000"), label: "twitter" },
  ];

  return (
    <Card
      className="shadow-sm border-0 p-3 d-flex m-auto w-100"
      style={{
        maxWidth: "500px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "10px",
      }}
    >
      {/* ===== Signature Section ===== */}
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

      {/* ===== Profile Image ===== */}
      <div className="row">
        <div className="col-lg-8">
          {image && (
            <Box
              sx={{
                width: "100px",
                height: "100px",
                mb: 2,
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <Image
                src={image}
                fluid
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          )}

          {/* ===== Name, Title, Company ===== */}
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {name || "Your Name"}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {title && company ? `${title}, ${company}` : title || company || ""}
          </Typography>

          {/* ===== Contact Details ===== */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.8,
              mb: 2,
            }}
          >
            {phone && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone fontSize="small" color="action" />
                <Typography variant="body2">Phone: {phone}</Typography>
              </Box>
            )}

            {mobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone fontSize="small" color="action" />
                <Typography variant="body2">Mobile: {mobile}</Typography>
              </Box>
            )}

            {website && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Language fontSize="small" color="action" />
                <Typography variant="body2">
                  Website:{" "}
                  <MUILink
                    href={formatUrl(website)}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: "none",
                      color: "#1976d2",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {website}
                  </MUILink>
                </Typography>
              </Box>
            )}

            {email && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MailOutline fontSize="small" color="action" />
                <Typography variant="body2">Email: {email}</Typography>
              </Box>
            )}

            {address && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnOutlined fontSize="small" color="action" />
                <Typography variant="body2">Address: {address}</Typography>
              </Box>
            )}
          </Box>

          {/* ===== Social Media Icons ===== */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 1 }}>
            {socialIcons.map(({ Icon, color, label }) => {
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
                      backgroundColor: socialUrl ? color : "#ccc",
                      color: "#fff",
                      padding: "4px",
                      "& .MuiSvgIcon-root": {
                        fontSize: styles.social.size,
                      },
                      "&:hover": {
                        backgroundColor: socialUrl
                          ? `${color}cc`
                          : "rgba(0,0,0,0.1)",
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
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-12">
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
                           width:"100%"
                        }}
                      >
                        <img
                          src={getYoutubeThumbnail(youtubeVideo.videoId)}
                          alt="YouTube thumbnail"
                          height={90}
                          style={{
                            borderRadius: "4px",
                            border: "1px solid #ddd",
                            width: "100%",
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
                             width:"100%"
                          }}
                        >
                          <img
                            src={getYoutubeThumbnail(youtubeVideo.videoId)}
                            alt="YouTube thumbnail"
                            height={80}
                            style={{
                              borderRadius: "4px",
                              border: "1px solid #ddd",
                              width: "100%",
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
            <div className="col-lg-12">
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
        </div>
      </div>

      {/* 🔹 NEW: Video and Image Gallery Section */}

      {/* ===== Quote Section ===== */}
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

      {/* ===== Disclaimer Section ===== */}
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
            mt: 1,
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

export default Template5;
