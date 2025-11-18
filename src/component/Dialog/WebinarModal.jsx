// In JoinOurWebinarModal.jsx
import React, { useState, useContext, useEffect } from "react";
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
// Importing icons for the Webinar options
import CircleIcon from "@mui/icons-material/Circle";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import MonitorIcon from "@mui/icons-material/Monitor";
import MicIcon from "@mui/icons-material/Mic";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import TvIcon from "@mui/icons-material/Tv";
import LaptopIcon from "@mui/icons-material/Laptop";
import CustomDialog from "./CustomDialog";
import { useSignature } from "../../hooks/useSignature";

// --- Color Data ---
const ICON_COLORS = [
  "black", // Selected in image
  "#9c27b0", // Purple
  "#4caf50", // Green
  "#03a9f4", // Light Blue
  "#ffeb3b", // Yellow
  "#f44336", // Red
  "custom", // White/Outline
];

const FONT_COLORS = [
  "black", // Selected in image
  "white",
  "custom",
];

// --- Icon Options ---
const ICON_OPTIONS = [
  { value: "circle", Icon: CircleIcon },
  { value: "desktop_windows", Icon: DesktopWindowsIcon },
  { value: "monitor_grid", Icon: MonitorIcon },
  { value: "mic", Icon: MicIcon },
  { value: "tv", Icon: TvIcon },
  { value: "laptop", Icon: LaptopIcon },
  { value: "none", Icon: null },
];

/**
 * Renders the Join Our Webinar form content.
 */
const JoinOurWebinarModal = ({ open, onClose }) => {
  const { webinar, updateWebinar } = useSignature();

  // Initialize state from context
  const [title, setTitle] = useState(webinar.title || "Join our webinar:");
  const [linkText, setLinkText] = useState(
    webinar.linkText || "How to make an awesome website"
  );
  const [linkUrl, setLinkUrl] = useState(webinar.linkUrl || "https://");
  const [icon, setIcon] = useState(webinar.icon || "circle");
  const [iconSize, setIconSize] = useState(webinar.iconSize || "M");
  const [iconColor, setIconColor] = useState(webinar.iconColor || "black");
  const [fontColor, setFontColor] = useState(webinar.fontColor || "black");
  const [fontSize, setFontSize] = useState(webinar.fontSize || 50);
  const [alignment, setAlignment] = useState(webinar.alignment || "left");
  const [customIconColor, setCustomIconColor] = useState("#000000");
  const [customFontColor, setCustomFontColor] = useState("#000000");

  // Update local state when context changes
  useEffect(() => {
    if (webinar) {
      setTitle(webinar.title || "Join our webinar:");
      setLinkText(webinar.linkText || "How to make an awesome website");
      setLinkUrl(webinar.linkUrl || "https://");
      setIcon(webinar.icon || "circle");
      setIconSize(webinar.iconSize || "M");
      setIconColor(webinar.iconColor || "black");
      setFontColor(webinar.fontColor || "black");
      setFontSize(webinar.fontSize || 50);
      setAlignment(webinar.alignment || "left");
    }
  }, [webinar, open]);

  // --- Handlers ---
  const handleSave = () => {
    const webinarData = {
      enabled: true,
      title,
      linkText,
      linkUrl,
      icon,
      iconSize,
      iconColor,
      fontColor,
      fontSize,
      alignment,
    };

    console.log("Saving webinar link settings:", webinarData);
    updateWebinar(webinarData);
    onClose();
  };

  // --- Rendering Functions ---

  const renderColorPalette = (
    palette,
    currentColor,
    setColorFn,
    customColor,
    setCustomColor
  ) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <RadioGroup
        row
        value={currentColor}
        onChange={(e) => {
          const val = e.target.value;
          setColorFn(val);

          if (val !== "custom") return;
          // When switching to custom, use last picked custom color or default
          setColorFn(customColor || "#000000");
        }}
      >
        {palette.map((colorValue) => (
          <Tooltip title={colorValue} key={colorValue}>
            <FormControlLabel
              value={colorValue === "custom" ? "custom" : colorValue}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor:
                      colorValue === "custom"
                        ? customColor || "transparent"
                        : colorValue,
                    border: 2,
                    borderColor:
                      currentColor === colorValue ||
                      (colorValue === "custom" && currentColor === customColor)
                        ? "primary.main"
                        : "grey.400",
                    cursor: "pointer",
                  }}
                />
              }
            />
          </Tooltip>
        ))}
      </RadioGroup>

      {/* Show input only if custom is selected */}
      {palette.includes("custom") && currentColor === customColor && (
        <input
          type="color"
          value={customColor}
          onChange={(e) => {
            setCustomColor(e.target.value);
            setColorFn(e.target.value);
          }}
          style={{ width: 35, height: 35, border: "none", padding: 0 }}
        />
      )}
    </Box>
  );

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Join our webinar"
      onSave={handleSave}
      saveText="Add"
      cancelText="Cancel"
      maxWidth="sm"
      disableSave={!linkUrl} // Disable save if no URL provided
    >
      <Stack spacing={3}>
        {/* Webinar Details */}
        <Box>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Enter your webinar details
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
            error={!linkUrl}
            helperText={!linkUrl ? "URL is required" : ""}
          />
        </Box>

        {/* Styles Section */}
        <Box>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Style
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
                        borderColor:
                          icon === value ? "primary.main" : "transparent",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color:
                          icon === value ? "primary.main" : "action.active",
                        width: 40,
                        height: 40,
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
                        borderColor:
                          iconSize === s ? "primary.main" : "grey.300",
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
            {renderColorPalette(
              ICON_COLORS,
              iconColor,
              setIconColor,
              customIconColor,
              setCustomIconColor
            )}
          </Box>

          {/* Font Color */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Font color
            </Typography>
            {renderColorPalette(
              FONT_COLORS,
              fontColor,
              setFontColor,
              customFontColor,
              setCustomFontColor
            )}
          </Box>

          {/* Font Size */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Font size
            </Typography>
            <Slider
              value={fontSize}
              onChange={(e, newValue) => setFontSize(newValue)}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value}px`}
              min={10}
              max={30}
              sx={{ width: "90%" }}
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
                      <Icon
                        color={alignment === value ? "primary" : "action"}
                      />
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

export default JoinOurWebinarModal;
