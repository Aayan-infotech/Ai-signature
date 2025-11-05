import React, { useState } from "react";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is in the same directory or properly imported
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
} from "@mui/material";
import { FormatAlignLeft, FormatAlignCenter, FormatAlignRight } from "@mui/icons-material";

// Utility function to simulate data saving
const handleSaveData = (data) => {
  console.log("Data to be saved:", data);
  alert("Simulated Save! Check the console for data.");
};

const AppDownloadModal = ({ open, onClose }) => {
  // State for form data
  const [title, setTitle] = useState("Download our app");
  const [googlePlayLink, setGooglePlayLink] = useState(
    "https://play.google.com/store/apps/details?id=APP_ID"
  );
  const [appStoreLink, setAppStoreLink] = useState(
    "https://itunes.apple.com/us/app/APP_NAME"
  );
  // State for style controls
  const [fontColor, setFontColor] = useState("dark"); // 'dark', 'light', or 'custom'
  const [fontSize, setFontSize] = useState(3); // Slider value 1-5
  const [alignment, setAlignment] = useState("left"); // 'left', 'center', 'right'

  const handleSave = () => {
    const data = {
      title,
      googlePlayLink,
      appStoreLink,
      style: {
        fontColor,
        fontSize,
        alignment,
      },
    };
    handleSaveData(data); // Call the prop function to send data
    onClose();
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Download our app" // The title for the modal
      onSave={handleSave} // The save handler
      saveText="Add" // Changing the save button text to "Add" as per the image
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Add app title & links
        </Typography>

        {/* Title Field */}
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 3 }}
        />

        {/* Google Play Field */}
        <TextField
          label="Google Play"
          fullWidth
          margin="normal"
          value={googlePlayLink}
          onChange={(e) => setGooglePlayLink(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* App Store Field */}
        <TextField
          label="App Store"
          fullWidth
          margin="normal"
          value={appStoreLink}
          onChange={(e) => setAppStoreLink(e.target.value)}
          sx={{ mb: 4 }}
        />

        <Divider sx={{ mb: 4 }} />
        
        <Typography variant="h6" gutterBottom>
          Style
        </Typography>

        {/* Font Color Control */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: '90px' }}>Font color</Typography>
          <RadioGroup
            row
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          >
            <FormControlLabel
              value="dark"
              control={<Radio sx={{ color: 'black' }} size="small" />}
              label=""
            />
            <FormControlLabel
              value="light"
              control={<Radio sx={{ color: 'lightgrey' }} size="small" />}
              label=""
            />
            <FormControlLabel
              value="custom"
              control={<Radio size="small" />}
              label="🎨" // Using an emoji to represent a color picker/custom option
            />
          </RadioGroup>
        </Stack>

        {/* Font Size Control (Slider) */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: '90px' }}>Font size</Typography>
          <Slider
            value={fontSize}
            onChange={(e, newValue) => setFontSize(newValue)}
            step={1}
            min={1}
            max={5}
            marks
            sx={{ width: 'auto', flexGrow: 1, m: 0 }}
          />
        </Stack>

        {/* Alignment Control (Toggle Button Group) */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: '90px' }}>Alignment</Typography>
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

export default AppDownloadModal;