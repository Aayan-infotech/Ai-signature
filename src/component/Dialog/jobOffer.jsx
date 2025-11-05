import React, { useState } from "react";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is imported correctly
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
} from "@mui/material";
import {
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
} from "@mui/icons-material";

// Utility function to simulate data saving
const handleSaveJobOfferData = (data) => {
  console.log("Job Offer Data to be saved:", data);
  alert("Simulated Save Job Offer! Check the console for data.");
};

// Map of predefined colors for visual display - NOW INCLUDING GREEN
const colorMap = {
  black: "#000000",
  purple: "#800080",
  green: "#008000", // <-- ADDED GREEN
  blue: "#00BFFF",
  yellow: "#FFD700",
  red: "#DC143C",
  custom: "transparent", // Placeholder for the custom color circle
};

// Helper component for the Color Radio Group (defined here for completeness)
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
                ...(colorName === "custom" && {
                  border: "1px solid grey",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  margin: "2px",
                }),
              }}
            />
          }
          label={""} // No label text, just the radio button
        />
      );
    })}
  </RadioGroup>
);

const PostJobOfferModal = ({ open, onClose }) => {
  // --- State for Data Fields ---
  const [introduction, setIntroduction] = useState("We are looking for:");
  const [positionLink, setPositionLink] = useState("https://");
  const [buttonText, setButtonText] = useState("WE ARE HIRING");

  // --- State for Style Fields ---
  // Defaulting to black, as it's the first option and appears selected in the image
  const [buttonColor, setButtonColor] = useState("black");
  const [fontColor, setFontColor] = useState("dark");
  // Defaulting to Medium (M), as it appears selected in the image
  const [buttonSize, setButtonSize] = useState("M");
  const [fontSize, setFontSize] = useState(3);
  // Defaulting to Left, as it appears selected in the image
  const [alignment, setAlignment] = useState("left");

  const handleSave = () => {
    const data = {
      introduction,
      positionLink,
      buttonText,
      style: {
        buttonColor,
        fontColor,
        buttonSize,
        fontSize,
        alignment,
      },
    };
    handleSaveJobOfferData(data); // Call the prop function to send data
    onClose();
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleButtonSize = (event, newSize) => {
    if (newSize !== null) {
      setButtonSize(newSize);
    }
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Post a job offer"
      onSave={handleSave}
      saveText="Add" // Button text as per the image
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Enter job description
        </Typography>

        {/* Introduction Field */}
        <TextField
          label="Introduction"
          fullWidth
          margin="normal"
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Link Field */}
        <TextField
          label="Link To Position Page"
          fullWidth
          margin="normal"
          value={positionLink}
          onChange={(e) => setPositionLink(e.target.value)}
          sx={{ mb: 3 }}
        />

        {/* Button Text Dropdown (Select) */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
          <Typography sx={{ minWidth: "90px" }}>Button text</Typography>
          <Select
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            fullWidth
            size="small"
          >
            {/* Mock Menu Items */}
            <MenuItem value={"WE ARE HIRING"}>WE ARE HIRING</MenuItem>
            <MenuItem value={"APPLY NOW"}>APPLY NOW</MenuItem>
            <MenuItem value={"VIEW JOB"}>VIEW JOB</MenuItem>
          </Select>
        </Stack>

        <Divider sx={{ mb: 4 }} />

        <Typography variant="h6" gutterBottom>
          Style
        </Typography>

        {/* Button Color Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "90px" }}>**Button color**</Typography>
          <ColorRadioGroup
            selectedValue={buttonColor}
            onChange={(e) => setButtonColor(e.target.value)}
            colorOptions={colorMap}
            name="button-color"
          />
        </Stack>

        {/* Font Color Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "90px" }}>**Font color**</Typography>
          <RadioGroup
            row
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
            name="font-color"
          >
            <FormControlLabel
              value="dark"
              control={<Radio sx={{ color: "black" }} size="small" />}
              label=""
            />
            <FormControlLabel
              value="light"
              control={<Radio sx={{ color: "lightgrey" }} size="small" />}
              label=""
            />
            <FormControlLabel
              value="custom"
              control={<Radio size="small" />}
              label="🎨" // Custom/Other option
            />
          </RadioGroup>
        </Stack>

        {/* Button Size Control (Toggle Button Group) */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "90px" }}>**Button size**</Typography>
          <ToggleButtonGroup
            value={buttonSize}
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

        {/* Font Size Control (Slider) */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "90px" }}>**Font size**</Typography>
          <Slider
            value={fontSize}
            onChange={(e, newValue) => setFontSize(newValue)}
            step={1}
            min={1}
            max={5}
            marks
            sx={{ width: "auto", flexGrow: 1, m: 0 }}
          />
        </Stack>

        {/* Alignment Control (Toggle Button Group) */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: "90px" }}>**Alignment**</Typography>
          <ToggleButtonGroup
            value={alignment}
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
      </Box>
    </CustomDialog>
  );
};

export default PostJobOfferModal;
