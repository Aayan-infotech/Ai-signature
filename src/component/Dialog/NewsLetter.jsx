import React, { useState, useEffect } from "react";
import CustomDialog from "./CustomDialog";
import {
  TextField,
  Typography,
  Box,
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
  EmailOutlined,
  EditOutlined,
  AlternateEmail,
  SendOutlined,
} from "@mui/icons-material";

// Map of predefined colors for visual display
const colorMap = {
  black: "#000000",
  purple: "#800080",
  blue: "#00BFFF",
  green: "#008000",
  yellow: "#FFD700",
  red: "#DC143C",
};

// Map of available icon options
const iconMap = {
  envelope: { component: EmailOutlined, label: "Envelope" },
  pencil: { component: EditOutlined, label: "Pencil" },
  at: { component: AlternateEmail, label: "At Symbol" },
  plane: { component: SendOutlined, label: "Paper Plane" },
  none: { component: null, label: "None" },
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

const JoinNewsletterModal = ({ open, onClose, onSave, initialData }) => {
  // Default data structure
  const defaultData = {
    enabled: true,
    title: "Subscribe for free:",
    text: "e.g. Get the best marketing tips",
    linkUrl: "https://",
    style: {
      icon: "envelope",
      iconSize: "M",
      iconColor: "black",
      fontColor: "dark",
      fontSize: 3,
      alignment: "left",
    },
  };

  // State for form data
  const [formData, setFormData] = useState(defaultData);
  const [errors, setErrors] = useState({});

  // Initialize with initialData when modal opens
  useEffect(() => {
    if (open) {
      setFormData(defaultData);
      setErrors({});
    }
  }, [open, initialData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title?.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.linkUrl?.trim() || formData.linkUrl === "https://") {
      newErrors.linkUrl = "Valid newsletter link is required";
    } else if (!formData.linkUrl.startsWith("https://")) {
      newErrors.linkUrl = "Link must start with https://";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      console.log("Saving newsletter data:", formData);
      onSave(formData, "newsletter");
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

  const handleIconSize = (event, newSize) => {
    if (newSize !== null) {
      handleStyleChange("iconSize", newSize);
    }
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      handleStyleChange("alignment", newAlignment);
    }
  };

  const hasValidLink = formData.linkUrl && formData.linkUrl !== "https://";

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Join our Newsletter"
      onSave={handleSave}
      saveText="Add"
      maxWidth="md"
    >
      <Box sx={{ p: 2 }}>
        {!hasValidLink && (
          <Alert severity="info" sx={{ mb: 3 }}>
            Update the newsletter link to enable the subscription in your
            signature.
          </Alert>
        )}

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Newsletter Details
        </Typography>

        {/* Title Field */}
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          error={!!errors.title}
          helperText={errors.title || "Main heading for your newsletter"}
          sx={{ mb: 3 }}
        />

        {/* Text Field */}
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={formData.text}
          onChange={(e) => handleInputChange("text", e.target.value)}
          helperText="Optional description or value proposition"
          sx={{ mb: 3 }}
        />

        {/* Link URL Field */}
        <TextField
          label="Newsletter Signup Link"
          fullWidth
          margin="normal"
          value={formData.linkUrl}
          onChange={(e) => handleInputChange("linkUrl", e.target.value)}
          error={!!errors.linkUrl}
          helperText={errors.linkUrl || "Paste your newsletter signup URL"}
          sx={{ mb: 4 }}
        />

        <Divider sx={{ mb: 4 }} />

        <Typography variant="h6" gutterBottom>
          Style Settings
        </Typography>

        {/* Icon Selection Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "100px" }}>Icon</Typography>
          <RadioGroup
            row
            name="icon-select"
            value={formData.style.icon}
            onChange={(e) => handleStyleChange("icon", e.target.value)}
          >
            {Object.keys(iconMap).map((iconName) => {
              const { component: IconComponent, label } = iconMap[iconName];
              return (
                <FormControlLabel
                  key={iconName}
                  value={iconName}
                  control={
                    <Radio
                      size="small"
                      icon={
                        iconName === "none" ? (
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              border: "1px solid #ccc",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <IconComponent fontSize="small" />
                        )
                      }
                      checkedIcon={
                        iconName === "none" ? (
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              border: "2px solid #1976d2",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <IconComponent fontSize="small" />
                        )
                      }
                    />
                  }
                  label={label}
                  sx={{ mr: 2 }}
                />
              );
            })}
          </RadioGroup>
        </Stack>

        {/* Icon Size Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "100px" }}>Icon size</Typography>
          <ToggleButtonGroup
            value={formData.style.iconSize}
            exclusive
            onChange={handleIconSize}
            aria-label="icon size"
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

        {/* Icon Color Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "100px" }}>Icon color</Typography>
          <ColorRadioGroup
            selectedValue={formData.style.iconColor}
            onChange={(e) => handleStyleChange("iconColor", e.target.value)}
            colorOptions={colorMap}
            name="icon-color"
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
            <Typography variant="h6" sx={getPreviewTitleStyles(formData.style)}>
              {formData.title}
            </Typography>

            {formData.text &&
              formData.text !== "e.g. Get the best marketing tips" && (
                <Typography
                  variant="body2"
                  sx={getPreviewTextStyles(formData.style)}
                >
                  {formData.text}
                </Typography>
              )}

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
                sx={getPreviewLinkStyles(formData.style)}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "0.8";
                  e.target.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.textDecoration = "none";
                }}
              >
                {formData.style.icon !== "none" && (
                  <Box sx={getPreviewIconStyles(formData.style)}>
                    {getPreviewIcon(formData.style)}
                  </Box>
                )}
                Subscribe Now
              </Box>
            </Box>
          </Box>
          {!hasValidLink && (
            <Alert severity="warning" sx={{ mt: 2 }}>
              Newsletter link required to activate subscription
            </Alert>
          )}
        </Box>
      </Box>
    </CustomDialog>
  );
};

// Helper functions for preview styling
const getPreviewStyles = (style) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  textAlign: style.alignment,
});

const getPreviewTitleStyles = (style) => {
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
    fontWeight: 600,
    marginBottom: "4px",
  };
};

const getPreviewTextStyles = (style) => {
  const fontSizeMap = {
    1: "10px",
    2: "12px",
    3: "14px",
    4: "16px",
    5: "18px",
  };

  const colorMap = {
    dark: "#000000",
    light: "#666666",
  };

  return {
    fontSize: fontSizeMap[style.fontSize],
    color: colorMap[style.fontColor],
    fontStyle: "italic",
  };
};

const getPreviewLinkStyles = (style) => {
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
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    fontWeight: 500,
    color: colorMap[style.fontColor],
    fontSize: fontSizeMap[style.fontSize],
    cursor: "pointer",
    transition: "all 0.3s ease",
  };
};

const getPreviewIconStyles = (style) => {
  const sizeMap = {
    S: { fontSize: "16px" },
    M: { fontSize: "20px" },
    L: { fontSize: "24px" },
  };

  const colorMap = {
    black: "#000000",
    purple: "#800080",
    blue: "#00BFFF",
    green: "#008000",
    yellow: "#FFD700",
    red: "#DC143C",
  };

  return {
    ...sizeMap[style.iconSize],
    color: colorMap[style.iconColor] || "#000000",
  };
};

const getPreviewIcon = (style) => {
  const IconComponent = iconMap[style.icon]?.component;
  if (!IconComponent) return null;

  const sizeMap = {
    S: "small",
    M: "medium",
    L: "large",
  };

  return <IconComponent fontSize={sizeMap[style.iconSize]} />;
};

export default JoinNewsletterModal;
