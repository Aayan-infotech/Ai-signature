import React, { useState } from "react";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Box,
  Stack,
  Slider,
  Tooltip,
} from "@mui/material";
// Importing icons for the Feedback options
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import CircleIcon from "@mui/icons-material/Circle"; // Using Circle to represent the 'circle' icon selection
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is accessible

// --- Color Data ---
const ICON_COLORS = [
  "black", // Selected in image
  "#9c27b0", // Purple
  "#4caf50", // Green
  "#03a9f4", // Light Blue
  "#ffeb3b", // Yellow
  "#f44336", // Red
];

const FONT_COLORS = [
  "black", // Selected in image
  "white",
  "grey",
];

// --- Icon Options ---
const ICON_OPTIONS = [
  { value: "circle", Icon: CircleIcon },
  { value: "star", Icon: StarIcon },
  { value: "heart", Icon: FavoriteIcon },
  { value: "comment", Icon: ChatBubbleIcon },
  { value: "like", Icon: ThumbUpIcon },
  { value: "none", Icon: null },
];

/**
 * Renders the Give us Feedback form content.
 */
const GiveUsFeedbackModal = ({ open, onClose }) => {
  // --- State Management (Defaults set to match the image) ---
  const [title, setTitle] = useState("Rate my services:");
  const [linkText, setLinkText] = useState("How was your overall experience with me?");
  const [linkUrl, setLinkUrl] = useState("https://");
  const [icon, setIcon] = useState("circle"); // Matches the selected circle icon
  const [iconSize, setIconSize] = useState("M"); // Matches the selected size
  const [iconColor, setIconColor] = useState("black"); // Matches the selected icon color
  const [fontColor, setFontColor] = useState("black"); // Matches the selected font color
  const [fontSize, setFontSize] = useState(50); // Setting a mid-point value for the slider
  const [alignment, setAlignment] = useState("left"); // Matches the selected alignment

  // --- Handlers ---
  const handleSave = () => {
    console.log("Saving feedback link settings:", {
      title,
      linkText,
      linkUrl,
      icon,
      iconSize,
      iconColor,
      fontColor,
      fontSize,
      alignment,
    });
    onClose();
  };

  // --- Rendering Functions ---

  const renderColorPalette = (palette, currentColor, setColorFn) => (
    <RadioGroup row value={currentColor} onChange={(e) => setColorFn(e.target.value)}>
      {palette.map((colorValue) => (
        <Tooltip title={colorValue} key={colorValue}>
          <FormControlLabel
            value={colorValue}
            control={<Radio sx={{ display: "none" }} />}
            label={
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: colorValue,
                  border: 2,
                  borderColor:
                    currentColor === colorValue ? "primary.main" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  p: 0.25,
                }}
              >
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: colorValue,
                    border: 1,
                    borderColor: colorValue === "white" ? "grey.400" : colorValue,
                  }}
                />
              </Box>
            }
          />
        </Tooltip>
      ))}
    </RadioGroup>
  );

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Give us Feedback"
      onSave={handleSave}
      saveText="Add"
      cancelText="Cancel"
      maxWidth="sm"
    >
      <Stack spacing={3}>
        {/* Feedback Details */}
        <Box>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Enter your feedback details
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Title
          </Typography>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            size="small"
            variant="standard"
          />
          <Typography variant="body2" color="text.secondary" mt={2}>
            Link Text
          </Typography>
          <TextField
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            fullWidth
            size="small"
            variant="standard"
          />
          <Typography variant="body2" color="text.secondary" mt={2}>
            Link Url
          </Typography>
          <TextField
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            fullWidth
            size="small"
            variant="standard"
            placeholder="https://"
          />
        </Box>

        {/* Styles Section */}
        <Box>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Styles
          </Typography>

          {/* Icon */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Icon
            </Typography>
            <RadioGroup
              row
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            >
              {ICON_OPTIONS.map(({ value, Icon }) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio sx={{ display: "none" }} />}
                  label={
                    <Box
                      sx={{
                        p: 0.5,
                        border: 1,
                        borderColor: icon === value ? "primary.main" : "transparent",
                        borderRadius: "50%",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: icon === value ? "primary.main" : "action.active",
                      }}
                    >
                      {Icon ? <Icon fontSize="medium" /> : "None"}
                    </Box>
                  }
                />
              ))}
            </RadioGroup>
          </Box>

          {/* Icon Size */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Icon size
            </Typography>
            <RadioGroup
              row
              value={iconSize}
              onChange={(e) => setIconSize(e.target.value)}
            >
              {["S", "M", "L"].map((s) => (
                <FormControlLabel
                  key={s}
                  value={s}
                  control={<Radio sx={{ display: "none" }} />}
                  label={
                    <Box
                      sx={{
                        px: 2,
                        py: 1,
                        border: 1,
                        borderColor: iconSize === s ? "primary.main" : "grey.300",
                        borderRadius: 1,
                        bgcolor: iconSize === s ? "white" : "grey.50",
                        color: "text.primary",
                        cursor: "pointer",
                        minWidth: "40px",
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

          {/* Icon Color */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Icon color
            </Typography>
            {renderColorPalette(ICON_COLORS, iconColor, setIconColor)}
          </Box>

          {/* Font Color */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Font color
            </Typography>
            {renderColorPalette(FONT_COLORS, fontColor, setFontColor)}
          </Box>

          {/* Font Size */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Font size
            </Typography>
            <Slider
              value={fontSize}
              onChange={(e, newValue) => setFontSize(newValue)}
              valueLabelDisplay="off"
              min={0}
              max={100}
              sx={{ width: '90%' }} // Adjust width to visually match the image
            />
          </Box>

          {/* Alignment */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Alignment
            </Typography>
            <RadioGroup
              row
              value={alignment}
              onChange={(e) => setAlignment(e.target.value)}
            >
              {[
                { value: "left", Icon: FormatAlignLeftIcon },
                { value: "center", Icon: FormatAlignCenterIcon },
                { value: "right", Icon: FormatAlignRightIcon },
              ].map(({ value, Icon }) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio sx={{ display: "none" }} />}
                  label={
                    <Box
                      sx={{
                        px: 1,
                        py: 1,
                        border: 1,
                        borderColor:
                          alignment === value ? "primary.main" : "grey.300",
                        borderRadius: 1,
                        bgcolor: alignment === value ? "white" : "grey.50",
                        cursor: "pointer",
                        minWidth: "40px",
                        textAlign: "center",
                      }}
                    >
                      <Icon color={alignment === value ? "primary" : "action"} />
                    </Box>
                  }
                />
              ))}
            </RadioGroup>
          </Box>

        </Box>
      </Stack>
    </CustomDialog>
  );
};

export default GiveUsFeedbackModal;