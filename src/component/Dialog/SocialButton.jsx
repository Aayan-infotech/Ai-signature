import React, { useState, useEffect } from "react";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Box,
  Divider,
  Stack,
  Button,
  Checkbox,
  IconButton,
  Slider,
} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomDialog from "./CustomDialog";

// Social Button Data
const SOCIAL_LINKS_DATA = [
  {
    name: "LinkedIn",
    text: "Let's connect!",
    color: "#0077B5",
    icon: "",
    defaultUrl: "https://www.linkedin.com/in/yourprofile",
    platform: "linkedin",
  },
  {
    name: "YouTube",
    text: "Watch on YouTube",
    color: "#FF0000",
    icon: "",
    defaultUrl: "https://www.youtube.com/user/",
    platform: "youtube",
  },
  {
    name: "Instagram",
    text: "View my feed",
    color: "#E1306C",
    icon: "",
    defaultUrl: "https://www.instagram.com/username",
    platform: "instagram",
  },
  {
    name: "Twitter",
    text: "See my tweets",
    color: "#000000",
    icon: "",
    defaultUrl: "https://www.twitter.com/profile",
    platform: "twitter",
  },
  {
    name: "Facebook",
    text: "Add me on FB",
    color: "#4267B2",
    icon: "",
    defaultUrl: "https://www.facebook.com/profile",
    platform: "facebook",
  },
  {
    name: "Custom",
    text: "Visit my website",
    color: "#6c757d",
    icon: "",
    defaultUrl: "https://my.custom.link.com",
    isCustom: true,
    platform: "custom",
  },
];

const SocialButtonsScheduler = ({
  open,
  onClose,
  onSave,
  initialData = {},
}) => {
  // Initialize state with existing data or defaults
  const [links, setLinks] = useState([]);
  const [style, setStyle] = useState(initialData.style || "Stroke");
  const [shape, setShape] = useState(initialData.shape || "rounded_sm");
  const [enabled, setEnabled] = useState(initialData.enabled || false);
  const [size, setSize] = useState(initialData.size || 80);

  // Initialize links when component mounts or initialData changes
  useEffect(() => {
    if (open) {
      const initializedLinks = SOCIAL_LINKS_DATA.map((link) => {
        const existingLink = initialData.links?.find(
          (l) => l.platform === link.platform
        );
        return {
          ...link,
          url: existingLink?.url || link.defaultUrl,
          isActive: existingLink?.isActive ?? true,
          platform: link.platform,
        };
      });
      setLinks(initializedLinks);
      setEnabled(initialData.enabled || false);
      setStyle(initialData.style || "Stroke");
      setShape(initialData.shape || "rounded_sm");
    }
  }, [open, initialData]);

  const handleUrlChange = (platform, newUrl) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.platform === platform ? { ...link, url: newUrl } : link
      )
    );
  };

  const handleToggleActive = (platform) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.platform === platform
          ? { ...link, isActive: !link.isActive }
          : link
      )
    );
  };

  const handleRemoveLink = (platform) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.platform === platform
          ? { ...link, isActive: false, url: "" }
          : link
      )
    );
  };

  // In SocialButtonsModal - replace the handleSave function
  const handleSave = () => {
    // Filter out inactive links and prepare data for saving
    const activeLinks = links.filter(
      (link) => link.isActive && link.url && link.url.trim() !== ""
    );

    const socialButtonsData = {
      enabled: enabled && activeLinks.length > 0,
      links: activeLinks,
      style,
      shape,
      size
    };

    console.log("Final social buttons data to save:", socialButtonsData);

    if (onSave) {
      onSave(socialButtonsData, "social"); // Pass type parameter
    } else {
      console.error("onSave function is not provided");
    }
    onClose();
  };

  const renderSocialLinkRow = (link) => (
    <Box
      key={link.platform}
      display="flex"
      alignItems="center"
      mb={2}
      sx={{
        opacity: link.isActive ? 1 : 0.5,
        transition: "all 0.3s ease",
        p: 1,
        borderRadius: 1,
        bgcolor: link.isActive ? "transparent" : "grey.50",
      }}
    >
      {/* Drag Handle */}
      <DragIndicatorIcon sx={{ color: "grey.400", mr: 1, cursor: "grab" }} />

      {/* Active Toggle */}
      <Checkbox
        checked={link.isActive}
        onChange={() => handleToggleActive(link.platform)}
        size="small"
      />

      {/* Social Button Preview */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: link.color,
          color: "white",
          textTransform: "none",
          minWidth: "200px",
          height: "36px",
          mr: 2,
          borderRadius:
            shape === "square" ? 0 : shape === "rounded_sm" ? "4px" : "50px",
          border: style === "Stroke" ? "2px solid white" : "none",
          boxShadow: style === "Stroke" ? `0 0 0 2px ${link.color}` : "none",
          "&:hover": {
            backgroundColor: link.color,
            opacity: 0.9,
            transform: "translateY(-1px)",
          },
        }}
      >
        {link.text}
      </Button>

      {/* URL Input */}
      <TextField
        value={link.url}
        onChange={(e) => handleUrlChange(link.platform, e.target.value)}
        fullWidth
        size="small"
        variant="outlined"
        placeholder={link.defaultUrl}
        disabled={!link.isActive}
        sx={{
          mr: 1,
          "& .MuiOutlinedInput-input": {
            padding: "8px 14px",
            height: "auto",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: link.isActive ? "white" : "grey.100",
          },
        }}
      />

      {/* Delete Button */}
      <IconButton
        size="small"
        onClick={() => handleRemoveLink(link.platform)}
        disabled={!link.isActive}
        sx={{
          color: "grey.500",
          "&:hover": { color: "error.main" },
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );

  const renderButtonsStyle = () => (
    <Box mt={3}>
      <Typography variant="body1" fontWeight="bold" gutterBottom>
        Buttons Style
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary" mb={0.5}>
            Style
          </Typography>
          <RadioGroup
            row
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            {["Fill", "Stroke", "Text"].map((s) => (
              <FormControlLabel
                key={s}
                value={s}
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <Box
                    sx={{
                      px: 2,
                      py: 0.5,
                      border: 1,
                      borderColor: style === s ? "primary.main" : "grey.300",
                      borderRadius: 1,
                      bgcolor: style === s ? "primary.light" : "grey.50",
                      color:
                        style === s ? "primary.contrastText" : "text.primary",
                      cursor: "pointer",
                      textTransform: "capitalize",
                      minWidth: "60px",
                      textAlign: "center",
                      fontWeight: style === s ? "bold" : "normal",
                    }}
                  >
                    {s}
                  </Box>
                }
              />
            ))}
          </RadioGroup>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" mb={0.5}>
            Shape
          </Typography>
          <RadioGroup
            row
            value={shape}
            onChange={(e) => setShape(e.target.value)}
          >
            {["square", "rounded_sm", "rounded"].map((s, index) => (
              <FormControlLabel
                key={s}
                value={s}
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <Box
                    sx={{
                      width: 40,
                      height: 20,
                      border: 1,
                      borderColor: shape === s ? "primary.main" : "grey.300",
                      borderRadius:
                        index === 0 ? 0 : index === 1 ? "4px" : "50px",
                      backgroundColor: shape === s ? "primary.main" : "grey.50",
                      display: "inline-block",
                      cursor: "pointer",
                      p: 0.5,
                    }}
                  />
                }
              />
            ))}
          </RadioGroup>
        </Box>

   
      </Box>
    </Box>
  );

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Social Buttons"
      onSave={handleSave}
      saveText="Save Changes"
      cancelText="Cancel"
      maxWidth="md"
    >
      <Stack spacing={3}>
        {/* Enable/Disable Toggle */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" fontWeight="bold">
            Enable Social Buttons
          </Typography>
          <Checkbox
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            color="primary"
          />
        </Box>

        <Typography variant="body2" color="text.secondary">
          Customize your social media buttons. Toggle visibility, edit URLs, and
          customize appearance.
        </Typography>

        {enabled && (
          <>
            <Box>
              <Typography variant="body1" fontWeight="bold" gutterBottom>
                Configure Social Links
              </Typography>
              {links.map(renderSocialLinkRow)}
            </Box>

            <Divider />

            {renderButtonsStyle()}

            {/* Preview Section */}
            <Box mt={2}>
              <Typography variant="body1" fontWeight="bold" gutterBottom>
                Preview
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {links
                  .filter((link) => link.isActive && link.url)
                  .map((link) => (
                    <Button
                      key={link.platform}
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: link.color,
                        color: "white",
                        textTransform: "none",
                        borderRadius:
                          shape === "square"
                            ? 0
                            : shape === "rounded_sm"
                            ? "4px"
                            : "50px",
                        border: style === "Stroke" ? "2px solid white" : "none",
                        boxShadow:
                          style === "Stroke"
                            ? `0 0 0 2px ${link.color}`
                            : "none",
                        minWidth: "auto",
                        px: 2,
                      }}
                    >
                      {link.text}
                    </Button>
                  ))}
              </Box>
            </Box>
          </>
        )}
      </Stack>
    </CustomDialog>
  );
};

export default SocialButtonsScheduler;
