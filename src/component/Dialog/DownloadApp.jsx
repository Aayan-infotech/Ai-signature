import React, { useState, useEffect } from "react";
import CustomDialog from "./CustomDialog";
import {
  TextField,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Divider,
  Alert,
} from "@mui/material";
import {
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
} from "@mui/icons-material";

const AppDownloadModal = ({ open, onClose, onSave, initialData }) => {
  // Default data structure
  const defaultData = {
    enabled: true,
    title: "Download our app",
    googlePlayLink: "https://play.google.com/store/apps/details?id=APP_ID",
    appStoreLink: "https://itunes.apple.com/us/app/APP_NAME",
    style: {
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
      setFormData(initialData || defaultData);
      setErrors({});
    }
  }, [open, initialData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title?.trim()) {
      newErrors.title = "Title is required";
    }

    if (formData.googlePlayLink === defaultData.googlePlayLink) {
      newErrors.googlePlayLink = "Please update the Google Play Store link";
    }

    if (formData.appStoreLink === defaultData.appStoreLink) {
      newErrors.appStoreLink = "Please update the App Store link";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData, "appDownload");
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

  const hasValidLinks =
    formData.googlePlayLink !== defaultData.googlePlayLink &&
    formData.appStoreLink !== defaultData.appStoreLink;

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Download App Configuration"
      onSave={handleSave}
      saveText="Add"
      maxWidth="md"
    >
      <Box sx={{ p: 2 }}>
        {!hasValidLinks && (
          <Alert severity="info" sx={{ mb: 3 }}>
            Update the app store links below to enable the download buttons in
            your signature.
          </Alert>
        )}

        <Typography variant="h6" gutterBottom>
          App Information
        </Typography>

        {/* Title Field */}
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          error={!!errors.title}
          helperText={errors.title}
          sx={{ mb: 3 }}
        />

        {/* Google Play Field */}
        <TextField
          label="Google Play Store Link"
          fullWidth
          margin="normal"
          value={formData.googlePlayLink}
          onChange={(e) => handleInputChange("googlePlayLink", e.target.value)}
          error={!!errors.googlePlayLink}
          helperText={
            errors.googlePlayLink || "Paste your app's Google Play Store URL"
          }
          sx={{ mb: 2 }}
        />

        {/* App Store Field */}
        <TextField
          label="App Store Link"
          fullWidth
          margin="normal"
          value={formData.appStoreLink}
          onChange={(e) => handleInputChange("appStoreLink", e.target.value)}
          error={!!errors.appStoreLink}
          helperText={errors.appStoreLink || "Paste your app's App Store URL"}
          sx={{ mb: 4 }}
        />

        <Divider sx={{ mb: 4 }} />

        <Typography variant="h6" gutterBottom>
          Style Settings
        </Typography>

        {/* Font Color Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "100px" }}>Font color</Typography>
          <RadioGroup
            row
            value={formData.style.fontColor}
            onChange={(e) => handleStyleChange("fontColor", e.target.value)}
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

        {/* Font Size Control (Slider) */}
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

        {/* Alignment Control (Toggle Button Group) */}
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
        <Box sx={{ mt: 4, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}>
          <Typography variant="subtitle2" gutterBottom>
            Preview:
          </Typography>
          <Box sx={getPreviewStyles(formData.style)}>
            <Typography variant="h6" sx={getPreviewTitleStyles(formData.style)}>
              {formData.title}
            </Typography>
            <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {formData.googlePlayLink !== defaultData.googlePlayLink && (
                <Box sx={getPreviewButtonStyles()}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <span>📱</span>
                    Google Play
                  </Box>
                </Box>
              )}
              {formData.appStoreLink !== defaultData.appStoreLink && (
                <Box sx={getPreviewButtonStyles()}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <span>📱</span>
                    App Store
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </CustomDialog>
  );
};

// Helper functions for preview styling
const getPreviewStyles = (style) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
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
    marginBottom: "8px",
  };
};

const getPreviewButtonStyles = () => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "6px 12px",
  borderRadius: "6px",
  backgroundColor: "white",
  border: "1px solid #ddd",
  fontSize: "12px",
});

export default AppDownloadModal;
