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
        <Box sx={{ mb: 2 }}>
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

export default Template5;
