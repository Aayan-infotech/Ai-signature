import React, { useState, useEffect } from "react";
import CustomDialog from "./CustomDialog";
import {
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
  Stack,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  Alert,
} from "@mui/material";
import {
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
} from "@mui/icons-material";

// Map of predefined colors for visual display
const colorMap = {
  black: "#000000",
  purple: "#800080",
  green: "#008000",
  blue: "#00BFFF",
  yellow: "#FFD700",
  red: "#DC143C",
};

// Helper function to get contrast color for text (moved outside component)
const getContrastColor = (hexcolor) => {
  if (!hexcolor) return "#FFFFFF";
  const hex = hexcolor.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#FFFFFF";
};

// Helper component for the Color Radio Group
const ColorRadioGroup = ({ selectedValue, onChange, colorOptions, name }) => (
  <RadioGroup row name={name} value={selectedValue} onChange={onChange}>
    {Object.keys(colorOptions).map((colorName) => {
      const colorValue = colorOptions[colorName];
      return (
        <FormControlLabel
          key={colorName}
          value={colorName}
          control={
            <Radio
              size="small"
              sx={{
                color: colorValue,
                "&.Mui-checked": {
                  color: colorValue,
                },
              }}
            />
          }
          label=""
        />
      );
    })}
  </RadioGroup>
);

// Helper functions for preview styling (moved outside component)
const getPreviewStyles = (style) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  textAlign: style.alignment,
});

const getPreviewIntroductionStyles = (style) => {
  const fontSizeMap = {
    1: "12px",
    2: "14px",
    3: "16px",
    4: "18px",
    5: "20px",
  };

  const colorMap = {
    dark: "#000000",
    light: "#666666",
  };

  return {
    fontSize: fontSizeMap[style.fontSize],
    color: colorMap[style.fontColor],
    fontWeight: 500,
    marginBottom: "4px",
  };
};

const getPreviewButtonStyles = (style) => {
  const sizeStyles = {
    S: { padding: "6px 12px", fontSize: "11px" },
    M: { padding: "8px 16px", fontSize: "12px" },
    L: { padding: "10px 20px", fontSize: "13px" },
  };

  const colorMap = {
    black: "#000000",
    purple: "#800080",
    green: "#008000",
    blue: "#00BFFF",
    yellow: "#FFD700",
    red: "#DC143C",
  };

  const backgroundColor = colorMap[style.buttonColor] || "#000000";
  const color = getContrastColor(backgroundColor);

  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: sizeStyles[style.buttonSize]?.padding || "8px 16px",
    fontSize: sizeStyles[style.buttonSize]?.fontSize || "12px",
    backgroundColor,
    color,
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
  };
};

const PostJobOfferModal = ({ open, onClose, onSave, initialData }) => {
  // Default data structure
  const defaultData = {
    enabled: true,
    introduction: "We are looking for:",
    positionLink: "https://",
    buttonText: "WE ARE HIRING",
    style: {
      buttonColor: "black",
      fontColor: "dark",
      buttonSize: "M",
      fontSize: 3,
      alignment: "left",
    },
  };

  // State for form data
  const [formData, setFormData] = useState(defaultData);
  const [errors, setErrors] = useState({});

  // Button text options
  const buttonTextOptions = [
    "WE ARE HIRING",
    "APPLY NOW",
    "VIEW JOB",
    "LEARN MORE",
    "JOIN OUR TEAM",
  ];

  // Initialize with initialData when modal opens
  useEffect(() => {
    if (open) {
      setFormData(initialData || defaultData);
      setErrors({});
    }
  }, [open, initialData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.introduction?.trim()) {
      newErrors.introduction = "Introduction is required";
    }

    if (
      !formData.positionLink?.trim() ||
      formData.positionLink === "https://"
    ) {
      newErrors.positionLink = "Valid position link is required";
    } else if (!formData.positionLink.startsWith("https://")) {
      newErrors.positionLink = "Link must start with https://";
    }

    if (!formData.buttonText?.trim()) {
      newErrors.buttonText = "Button text is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData, "job");
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleStyleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      style: {
        ...prev.style,
        [field]: value,
      },
    }));
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      handleStyleChange("alignment", newAlignment);
    }
  };

  const handleButtonSize = (event, newSize) => {
    if (newSize !== null) {
      handleStyleChange("buttonSize", newSize);
    }
  };

  const hasValidLink =
    formData.positionLink && formData.positionLink !== "https://";

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Post a Job Offer"
      onSave={handleSave}
      saveText="Add"
      maxWidth="md"
    >
      <Box sx={{ p: 2 }}>
        {!hasValidLink && (
          <Alert severity="info" sx={{ mb: 3 }}>
            Update the position link to enable the job offer button in your
            signature.
          </Alert>
        )}

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Enter job description
        </Typography>

        {/* Introduction Field */}
        <TextField
          label="Introduction"
          fullWidth
          margin="normal"
          value={formData.introduction}
          onChange={(e) => handleInputChange("introduction", e.target.value)}
          error={!!errors.introduction}
          helperText={
            errors.introduction ||
            "e.g., 'We are looking for:', 'Join our team:', etc."
          }
          sx={{ mb: 3 }}
        />

        {/* Link Field */}
        <TextField
          label="Link To Position Page"
          fullWidth
          margin="normal"
          value={formData.positionLink}
          onChange={(e) => handleInputChange("positionLink", e.target.value)}
          error={!!errors.positionLink}
          helperText={
            errors.positionLink || "Paste the URL to your job posting"
          }
          sx={{ mb: 3 }}
        />

        {/* Button Text Dropdown */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
          <Typography sx={{ minWidth: "100px" }}>Button text</Typography>
          <Select
            value={formData.buttonText}
            onChange={(e) => handleInputChange("buttonText", e.target.value)}
            fullWidth
            size="small"
            error={!!errors.buttonText}
          >
            {buttonTextOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Stack>

        <Divider sx={{ mb: 4 }} />

        <Typography variant="h6" gutterBottom>
          Style Settings
        </Typography>

        {/* Button Color Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "100px" }}>Button color</Typography>
          <ColorRadioGroup
            selectedValue={formData.style.buttonColor}
            onChange={(e) => handleStyleChange("buttonColor", e.target.value)}
            colorOptions={colorMap}
            name="button-color"
          />
        </Stack>

        {/* Font Color Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "100px" }}>Font color</Typography>
          <RadioGroup
            row
            value={formData.style.fontColor}
            onChange={(e) => handleStyleChange("fontColor", e.target.value)}
            name="font-color"
          >
            <FormControlLabel
              value="dark"
              control={<Radio size="small" />}
              label="Dark"
            />
            <FormControlLabel
              value="light"
              control={<Radio size="small" />}
              label="Light"
            />
          </RadioGroup>
        </Stack>

        {/* Button Size Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "100px" }}>Button size</Typography>
          <ToggleButtonGroup
            value={formData.style.buttonSize}
            exclusive
            onChange={handleButtonSize}
            aria-label="button size"
            size="small"
          >
            <ToggleButton value="S" aria-label="small">
              S
            </ToggleButton>
            <ToggleButton value="M" aria-label="medium">
              M
            </ToggleButton>
            <ToggleButton value="L" aria-label="large">
              L
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        {/* Font Size Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "100px" }}>Font size</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Slider
              value={formData.style.fontSize}
              onChange={(e, newValue) =>
                handleStyleChange("fontSize", newValue)
              }
              step={1}
              min={1}
              max={5}
              marks={[
                { value: 1, label: "S" },
                { value: 2, label: "M" },
                { value: 3, label: "L" },
                { value: 4, label: "XL" },
                { value: 5, label: "XXL" },
              ]}
              valueLabelDisplay="auto"
            />
          </Box>
        </Stack>

        {/* Alignment Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "100px" }}>Alignment</Typography>
          <ToggleButtonGroup
            value={formData.style.alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            size="small"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeft />
            </ToggleButton>
            <ToggleButton value="center" aria-label="center aligned">
              <FormatAlignCenter />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRight />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        {/* Preview Section */}
        <Box
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            Preview:
          </Typography>
          <Box sx={getPreviewStyles(formData.style)}>
            <Typography
              variant="body1"
              sx={getPreviewIntroductionStyles(formData.style)}
            >
              {formData.introduction}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent:
                  formData.style.alignment === "center"
                    ? "center"
                    : formData.style.alignment === "right"
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              <Box
                sx={getPreviewButtonStyles(formData.style)}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "0.9";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {formData.buttonText}
              </Box>
            </Box>
          </Box>
          {!hasValidLink && (
            <Alert severity="warning" sx={{ mt: 2 }}>
              Position link required to activate button
            </Alert>
          )}
        </Box>
      </Box>
    </CustomDialog>
  );
};

export default PostJobOfferModal;
