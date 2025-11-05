import React, { useState } from "react";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is imported correctly
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
} from "@mui/material";
import { 
  FormatAlignLeft, 
  FormatAlignCenter, 
  FormatAlignRight,
  EmailOutlined, // Envelope icon
  EditOutlined, // Pencil icon
  AlternateEmail, // @ symbol icon
  SendOutlined, // Paper plane icon
  // Note: The empty circle/None icon can be represented by 'None' state
} from "@mui/icons-material";

// Utility function to simulate data saving
const handleSaveNewsletterData = (data) => {
  console.log("Newsletter Data to be saved:", data);
  alert("Simulated Save Newsletter! Check the console for data.");
};

// Map of predefined colors for visual display (Icon and Font colors)
const colorMap = {
  black: "#000000",
  purple: "#800080",
  blue: "#00BFFF", 
  green: "#008000",
  yellow: "#FFD700",
  red: "#DC143C",
  custom: "transparent", // Placeholder for the custom color circle
};

// Map of available icon options
const iconMap = {
  envelope: EmailOutlined,
  pencil: EditOutlined,
  at: AlternateEmail,
  plane: SendOutlined,
  none: 'None', // String to represent no icon
};

// Helper component for the Color Radio Group (re-used from previous modal)
const ColorRadioGroup = ({ selectedValue, onChange, colorOptions, name }) => (
    <RadioGroup
      row
      name={name}
      value={selectedValue}
      onChange={onChange}
    >
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
                  '&.Mui-checked': {
                    color: colorValue,
                  },
                  ...(colorName === 'custom' && { 
                    border: '1px solid grey', 
                    borderRadius: '50%',
                    width: '20px', 
                    height: '20px',
                    margin: '2px',
                  }),
                }} 
              />
            }
            label={''}
          />
        );
      })}
    </RadioGroup>
  );


const JoinNewsletterModal = ({ open, onClose }) => {
  // --- State for Data Fields ---
  const [title, setTitle] = useState("Subscribe for free:");
  const [text, setText] = useState("e.g. Get the best marketing tips");
  const [linkUrl, setLinkUrl] = useState("https://");
  
  // --- State for Style Fields ---
  // Icon and its style
  const [icon, setIcon] = useState("envelope"); // Default to envelope icon
  const [iconSize, setIconSize] = useState("M"); // Default to Medium
  const [iconColor, setIconColor] = useState("black"); // Default to black
  
  // Font style
  const [fontColor, setFontColor] = useState("dark"); // Default to dark font
  const [fontSize, setFontSize] = useState(3); 
  const [alignment, setAlignment] = useState("left");

  const handleSave = () => {
    const data = {
      title,
      text,
      linkUrl,
      style: {
        icon,
        iconSize,
        iconColor,
        fontColor,
        fontSize,
        alignment,
      },
    };
    handleSaveNewsletterData(data);
    onClose();
  };

  const handleIconSize = (event, newSize) => {
    if (newSize !== null) {
      setIconSize(newSize);
    }
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
      title="Join our Newsletter"
      onSave={handleSave} 
      saveText="Add"
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Enter your newsletter details
        </Typography>

        {/* Title Field */}
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Text Field */}
        <TextField
          label="Text"
          fullWidth
          margin="normal"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Link URL Field */}
        <TextField
          label="Link Url"
          fullWidth
          margin="normal"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
          sx={{ mb: 4 }}
        />
        
        <Divider sx={{ mb: 4 }} />
        
        <Typography variant="h6" gutterBottom>
          Style
        </Typography>

        {/* --- Icon Selection Control --- */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: '90px' }}>**Icon**</Typography>
          <RadioGroup
            row
            name="icon-select"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          >
            {Object.keys(iconMap).map((iconName) => {
              const IconComponent = iconMap[iconName];
              return (
                <FormControlLabel
                  key={iconName}
                  value={iconName}
                  control={
                    <Radio 
                      size="small"
                      icon={iconName === 'none' ? <Box sx={{ width: 15, height: 15, border: '1px solid grey', borderRadius: '50%' }} /> : <IconComponent fontSize="small" />}
                      checkedIcon={iconName === 'none' ? <Box sx={{ width: 15, height: 15, border: '1px solid black', borderRadius: '50%' }} /> : <IconComponent fontSize="small" />}
                    />
                  }
                  label={iconName === 'none' ? 'None' : ''}
                />
              );
            })}
          </RadioGroup>
        </Stack>

        {/* --- Icon Size Control --- */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: '90px' }}>**Icon size**</Typography>
          <ToggleButtonGroup
            value={iconSize}
            exclusive
            onChange={handleIconSize}
            aria-label="icon size"
            size="small"
          >
            <ToggleButton value="S" aria-label="small">S</ToggleButton>
            <ToggleButton value="M" aria-label="medium">M</ToggleButton>
            <ToggleButton value="L" aria-label="large">L</ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        {/* --- Icon Color Control --- */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: '90px' }}>**Icon color**</Typography>
          <ColorRadioGroup
            selectedValue={iconColor}
            onChange={(e) => setIconColor(e.target.value)}
            colorOptions={colorMap}
            name="icon-color"
          />
        </Stack>
        
        {/* --- Font Color Control --- */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: '90px' }}>**Font color**</Typography>
          <RadioGroup
            row
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
            name="font-color"
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
              label="🎨" // Custom/Other option
            />
          </RadioGroup>
        </Stack>
        
        {/* --- Font Size Control (Slider) --- */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: '90px' }}>**Font size**</Typography>
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

        {/* --- Alignment Control (Toggle Button Group) --- */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Typography sx={{ minWidth: '90px' }}>**Alignment**</Typography>
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

export default JoinNewsletterModal;