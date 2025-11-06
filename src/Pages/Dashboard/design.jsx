import React, { useState, useMemo } from "react";
import {
  Typography,
  Box,
  Badge,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  TextField,
  Slider,
  Tabs,
  Tab,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  CropSquare as CropSquareIcon,
  CropDin as CropDinIcon,
  PanoramaFishEye as PanoramaFishEyeIcon,
  AlignHorizontalLeft as AlignHorizontalLeftIcon,
  AlignHorizontalRight as AlignHorizontalRightIcon,
  AlignVerticalTop as AlignVerticalTopIcon,
  AlignVerticalBottom as AlignVerticalBottomIcon,
  Call as CallIcon,
  HorizontalRule,
  Circle as CircleIcon,
  Square as SquareIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import { Facebook } from "lucide-react";
import { useSignature } from "../../hooks/useSignature";

// Font options constant
const FONT_OPTIONS = [
  "Roboto",
  "Open Sans",
  "Georgia",
  "Palatino",
  "Lucida Sans",
  "Times New Roman",
  "Courier New",
];

// Section Header Component
const SectionHeader = ({ title, showBadge = true }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    {showBadge && (
      <Badge
        badgeContent="Pro"
        color="primary"
        overlap="circular"
        sx={{ mr: 2 }}
      />
    )}
  </Box>
);

// Reusable Row Component
const SettingRow = ({ label, children }) => (
  <Box
    sx={{
      mt: 3,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {label}
    </Typography>
    {children}
  </Box>
);

// Color Picker Component
const ColorPicker = ({ value, onChange }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ cursor: "pointer" }}
    />
    <TextField
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ width: 100 }}
    />
  </Box>
);

// Slider with Input Component
const SliderWithInput = ({
  value,
  onChange,
  min,
  max,
  step = 1,
  width = 200,
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 2, width }}>
    <Slider
      value={value}
      onChange={(e, newValue) => onChange(newValue)}
      min={min}
      max={max}
      step={step}
      sx={{ flex: 1 }}
    />
    <TextField
      size="small"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      inputProps={{
        min,
        max,
        type: "number",
        step,
      }}
      sx={{ width: 60 }}
    />
  </Box>
);

// Tab Content Component for individual customization
const CustomizationTab = ({
  fontField,
  colorField,
  fontSizeField,
  formValue,
  onUpdate,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      flexDirection: "column",
      width: "100%",
      px: 2,
    }}
  >
    {/* Font Selection */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Font
      </Typography>
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <Select
          value={formValue[fontField] || ""}
          onChange={(e) => onUpdate(fontField, e.target.value)}
        >
          {FONT_OPTIONS.map((font) => (
            <MenuItem key={font} value={font}>
              {font}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>

    {/* Color Selection */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Color
      </Typography>
      <ColorPicker
        value={formValue[colorField]}
        onChange={(value) => onUpdate(colorField, value)}
      />
    </Box>

    {/* Font Scale */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Font scale
      </Typography>
      <SliderWithInput
        value={formValue[fontSizeField]}
        onChange={(value) => onUpdate(fontSizeField, value)}
        min={8}
        max={24}
      />
    </Box>
  </Box>
);

export default function Design() {
  const { formData, updateFormData, updateDesignFormData } = useSignature();
  const [tabValue, setTabValue] = useState(0);
  const [showCustomization, setShowCustomization] = useState(false);

  // Get design values
  const designValues = useMemo(() => formData.design || {}, [formData.design]);
  console.log(designValues);

  // Update global font
  const handleGlobalFontChange = (font) => {
    updateFormData({ fontFamily: font });
    updateDesignFormData({ font });
  };

  // Update design field
  const updateDesignField = (field, value) => {
    updateDesignFormData({ [field]: value });
  };

  // Handlers
  const handleToggleChange = (name) => (event, newValue) => {
    if (newValue !== null) {
      updateDesignField(name, newValue);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const customizationTabs = [
    {
      label: "Name",
      fontField: "nameFont",
      colorField: "nameColor",
      fontSizeField: "nameFontSize",
    },
    {
      label: "Title",
      fontField: "titleFont",
      colorField: "titleColor",
      fontSizeField: "titleFontSize",
    },
    {
      label: "Company",
      fontField: "companyFont",
      colorField: "companyColor",
      fontSizeField: "companyFontSize",
    },
    {
      label: "Details",
      fontField: "detailsFont",
      colorField: "detailsColor",
      fontSizeField: "detailsSize",
    },
  ];

  return (
    <Box>
      {/* Style Section */}
      <SectionHeader title="Style" />
      <Box sx={{ mt: 1 }}>
        {/* Customization Toggle */}
        <Box sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Customize each detail individually
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            gutterBottom
            sx={{ textAlign: "end", cursor: "pointer", fontWeight: 500 }}
            onClick={() => setShowCustomization(!showCustomization)}
          >
            {showCustomization ? "Hide" : "Show"}
          </Typography>
        </Box>

        {/* Customization Tabs */}
        {showCustomization && (
          <Box
            sx={{ mb: 2, display: "flex", flexDirection: "row", gap: "10px" }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              orientation="vertical"
              variant="scrollable"
              sx={{ borderRight: 1, borderColor: "divider", minWidth: "100px" }}
            >
              {customizationTabs.map((tab) => (
                <Tab key={tab.label} label={tab.label} />
              ))}
            </Tabs>

            {customizationTabs.map(
              (tab, index) =>
                tabValue === index && (
                  <CustomizationTab
                    key={tab.label}
                    fontField={tab.fontField}
                    colorField={tab.colorField}
                    fontSizeField={tab.fontSizeField}
                    formValue={designValues}
                    onUpdate={updateDesignField}
                  />
                )
            )}
          </Box>
        )}
      </Box>
      <hr />
      {/* Images Section */}
      <Box sx={{ mt: 3 }}>
        <SectionHeader title="Images" />

        {/* Shape */}
        <SettingRow label="Shape">
          <ToggleButtonGroup
            value={designValues.imageShape || "rounded-2"} // Changed from "shape" to "imageShape"
            exclusive
            onChange={handleToggleChange("imageShape")} // Changed from "shape" to "imageShape"
            aria-label="shape"
          >
            <ToggleButton value="rounded-2" aria-label="square">
              <CropSquareIcon />
            </ToggleButton>
            <ToggleButton value="rounded-4" aria-label="rounded">
              <CropDinIcon />
            </ToggleButton>
            <ToggleButton value="rounded-circle" aria-label="circle">
              {" "}
              {/* Fixed circle value */}
              <PanoramaFishEyeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </SettingRow>

        {/* Size */}
        <SettingRow label="Size">
          <ToggleButtonGroup
            value={designValues.imageSize || "100px"} // Changed from "size" to "imageSize"
            exclusive
            onChange={handleToggleChange("imageSize")} // Changed from "size" to "imageSize"
            aria-label="size"
          >
            <ToggleButton value="80px" aria-label="small">
              <Typography sx={{ fontSize: "12px", mb: 0 }}>s</Typography>
            </ToggleButton>
            <ToggleButton value="100px" aria-label="medium">
              <Typography sx={{ fontSize: "16px", mb: 0 }}>S</Typography>
            </ToggleButton>
            <ToggleButton value="120px" aria-label="large">
              <Typography sx={{ fontSize: "20px", mb: 0 }}>S</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </SettingRow>

        {/* Position */}
        <SettingRow label="Position">
          <ToggleButtonGroup
            value={designValues.imagePosition || "start"} // Changed from "position" to "imagePosition"
            exclusive
            onChange={handleToggleChange("imagePosition")} // Changed from "position" to "imagePosition"
            aria-label="position"
          >
            <ToggleButton value="start" aria-label="left">
              <AlignHorizontalLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="center">
              <AlignHorizontalRightIcon />
            </ToggleButton>
            <ToggleButton value="end" aria-label="top">
              <AlignVerticalTopIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </SettingRow>
      </Box>
      <hr />
      {/* Details Section */}
      <Box sx={{ mt: 3 }}>
        <SectionHeader title="Details" />

        {/* Label */}
        <SettingRow label="Label">
          <ToggleButtonGroup
            value={designValues.label || "left"}
            exclusive
            onChange={handleToggleChange("label")}
            aria-label="label"
          >
            <ToggleButton value="left" aria-label="text">
              <Typography sx={{ color: "primary.main", mb: 0 }}>
                Phone
              </Typography>
            </ToggleButton>
            <ToggleButton value="center" aria-label="letter">
              <Typography sx={{ mb: 0 }}>P</Typography>
            </ToggleButton>
            <ToggleButton value="right" aria-label="icon">
              <CallIcon style={{ height: "20px" }} />
            </ToggleButton>
            <ToggleButton value="none" aria-label="none">
              <Typography sx={{ mb: 0 }}>None</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </SettingRow>

        {/* Direction */}
        <SettingRow label="Direction">
          <ToggleButtonGroup
            value={designValues.direction || "left"}
            exclusive
            onChange={handleToggleChange("direction")}
            aria-label="direction"
          >
            <ToggleButton value="left" aria-label="horizontal">
              <HorizontalRule style={{ height: "20px" }} />
            </ToggleButton>
            <ToggleButton value="center" aria-label="vertical">
              <HorizontalRule
                style={{ height: "20px", transform: "rotate(90deg)" }}
              />
            </ToggleButton>
          </ToggleButtonGroup>
        </SettingRow>

        {/* Separator */}
        <SettingRow label="Separator">
          <ToggleButtonGroup
            value={designValues.separator || "left"}
            exclusive
            onChange={handleToggleChange("separator")}
            aria-label="separator"
          >
            <ToggleButton value="left" aria-label="line">
              <HorizontalRule
                style={{ height: "20px", transform: "rotate(90deg)" }}
              />
            </ToggleButton>
            <ToggleButton value="center" aria-label="circle">
              <CircleIcon style={{ height: "20px" }} />
            </ToggleButton>
            <ToggleButton value="right" aria-label="square">
              <SquareIcon style={{ height: "20px" }} />
            </ToggleButton>
            <ToggleButton value="none" aria-label="none">
              <Typography sx={{ mb: 0 }}>None</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </SettingRow>
      </Box>
      <hr />
      {/* Social Icons Section */}
      <Box sx={{ mt: 3 }}>
        <SectionHeader title="Social Icons" />

        {/* Fill */}
        <SettingRow label="Fill">
          <ToggleButtonGroup
            value={designValues.socialFill || "left"}
            exclusive
            onChange={handleToggleChange("socialFill")}
            aria-label="social fill"
          >
            <ToggleButton value="left" aria-label="filled">
              <FacebookIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="outlined">
              <Facebook style={{ border: "1px solid #212529" }} />
            </ToggleButton>
            <ToggleButton value="right" aria-label="plain">
              <Facebook />
            </ToggleButton>
          </ToggleButtonGroup>
        </SettingRow>

        {/* Size */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Size
          </Typography>
          <SliderWithInput
            value={designValues.socialSize || 16}
            onChange={(value) => updateDesignField("socialSize", value)}
            min={8}
            max={48}
          />
        </Box>

        {/* Space Between */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Space Between
          </Typography>
          <SliderWithInput
            value={designValues.socialSpace || 8}
            onChange={(value) => updateDesignField("socialSpace", value)}
            min={0}
            max={32}
          />
        </Box>

        {/* Color Mode */}
        <SettingRow label="Color">
          <ToggleButtonGroup
            color="primary"
            value={designValues.socialColorMode || "web"}
            exclusive
            onChange={handleToggleChange("socialColorMode")}
            aria-label="color mode"
          >
            <ToggleButton value="web">Original</ToggleButton>
            <ToggleButton value="android">Custom</ToggleButton>
          </ToggleButtonGroup>
        </SettingRow>

        {/* Custom Color Picker */}
        {designValues.socialColorMode === "android" && (
          <SettingRow label="Custom Color">
            <ColorPicker
              value={designValues.socialCustomColor || "#1877F2"}
              onChange={(value) =>
                updateDesignField("socialCustomColor", value)
              }
            />
          </SettingRow>
        )}
      </Box>
    </Box>
  );
}
