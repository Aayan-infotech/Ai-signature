import React, { useState } from "react";
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
} from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is accessible

// --- Social Button Data ---
// Removed TikTok, added a custom link option
const SOCIAL_LINKS_DATA = [
  {
    name: "LinkedIn",
    text: "Lets connect!",
    color: "#0077B5",
    icon: "",
    defaultUrl: "www.linkedin.com/profile",
  },
  {
    name: "YouTube",
    text: "Watch on YouTube",
    color: "#FF0000",
    icon: "",
    defaultUrl: "www.youtube.com/user/",
  },
  {
    name: "Instagram",
    text: "View my feed",
    color: "#E1306C",
    icon: "",
    defaultUrl: "www.instagram.com/username",
  },
  {
    name: "Twitter",
    text: "See my tweets",
    color: "#000000",
    icon: "",
    defaultUrl: "www.twitter.com/profile",
  },
  {
    name: "Facebook",
    text: "Add me on FB",
    color: "#4267B2",
    icon: "",
    defaultUrl: "www.facebook.com/profile",
  },
  {
    name: "Pinterest",
    text: "Follow on Pinterest",
    color: "#E60023",
    icon: "",
    defaultUrl: "www.pinterest.com/user",
  },
  {
    name: "Behance",
    text: "View my portfolio",
    color: "#0057FF",
    icon: "",
    defaultUrl: "www.behance.net/username",
  },
  {
    name: "Dribbble",
    text: "Connect to Dribbble",
    color: "#EA4C89",
    icon: "",
    defaultUrl: "www.dribbble.com/username",
  },
  {
    name: "Threads",
    text: "Follow on Threads",
    color: "#000000",
    icon: "",
    defaultUrl: "https://www.threads.net/@user.name",
  },
  // Added Custom Link option
  {
    name: "Custom",
    text: "Custom link button with text",
    color: "#6c757d", // A neutral color for custom link
    icon: "",
    defaultUrl: "https://my.custom.link.com",
    isCustom: true,
  },
];

/**
 * Renders the Social Buttons form content.
 * It uses the CustomDialog component for the modal structure.
 */
const SocialButtonsScheduler = ({ open, onClose }) => {
  // --- State Management (Defaults set to match the image) ---
  const [links, setLinks] = useState(
    SOCIAL_LINKS_DATA.map((link) => ({
      ...link,
      url: link.defaultUrl,
      isActive: true, // Assuming all are initially active
    }))
  );
  const [style, setStyle] = useState("Stroke"); // Matches the selected option in the image
  const [shape, setShape] = useState("rounded_sm"); // Matches the selected option in the image

  // --- Handlers ---
  const handleUrlChange = (name, newUrl) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.name === name ? { ...link, url: newUrl } : link
      )
    );
  };

  const handleSave = () => {
    console.log("Saving social button settings:", { links, style, shape });
    onClose();
  };

  // --- Rendering Functions ---

  const renderSocialLinkRow = (link) => (
    <Box
      key={link.name}
      display="flex"
      alignItems="center"
      mb={1}
      sx={{ opacity: link.isActive ? 1 : 0.5 }}
    >
      {/* Social Button Preview (Styling to match the image) */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: link.color,
          color: "white",
          textTransform: "none",
          minWidth: "220px",
          height: "30px",
          mr: 2,
          "&:hover": { backgroundColor: link.color, opacity: 0.9 },
        }}
        startIcon={link.isCustom ? null : link.icon} // Placeholder for the actual icon
      >
        {link.text}
      </Button>
      {/* URL Text Field */}
      <TextField
        value={link.url}
        onChange={(e) => handleUrlChange(link.name, e.target.value)}
        fullWidth
        size="small"
        variant="outlined"
        placeholder={link.defaultUrl}
        sx={{
          "& .MuiOutlinedInput-input": {
            padding: "6px 14px",
            height: "auto",
          },
        }}
      />
    </Box>
  );

  const renderButtonsStyle = () => (
    <Box mt={3}>
      <Typography variant="body1" fontWeight="bold" gutterBottom>
        Buttons style
      </Typography>

     <Box sx={{display:"flex" , flexDirection:"row" , gap:"30px" , alignItems:"center"}}>
      <Box >
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
                    bgcolor: style === s ? "white" : "grey.50",
                    color: "text.primary",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    minWidth: "60px",
                    textAlign: "center",
                  }}
                >
                  {s}
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </Box>

      {/* Shape */}
      <Box >
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
                      index === 0 ? 0 : index === 1 ? "4px" : "50px", // Visual representation of the shape
                    backgroundColor: shape === s ? "white" : "grey.50",
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
      title="Social buttons"
      onSave={handleSave}
      saveText="Add" // Matches the "Add" button in the image
      cancelText="Cancel"
      maxWidth="md" // Increased max-width for the list layout
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Choose your badges:
          </Typography>
          {links.map(renderSocialLinkRow)}
        </Box>

        <Divider />

        {renderButtonsStyle()}
      </Stack>
    </CustomDialog>
  );
};

export default SocialButtonsScheduler;
