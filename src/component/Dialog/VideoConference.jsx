import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Stack,
  Slider,
  Grid,
  Button
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is accessible

// --- Provider Data ---
const VIDEO_PROVIDERS = [
  { name: "Zoom", icon: "", defaultText: "Meet me on Zoom" },
  { name: "Google Meet", icon: "", defaultText: "Join my Meet" },
  { name: "Microsoft Teams", icon: "", defaultText: "Join Teams meeting" },
];

/**
 * Renders the Video conference form content.
 */
const VideoConferenceModal = ({ open, onClose }) => {
  // --- State Management (Defaults set to match the image) ---
  const [selectedProvider, setSelectedProvider] = useState("Zoom");
  const [buttonText, setButtonText] = useState("Meet me on Zoom");
  const [shape, setShape] = useState("square"); // Matches the selected shape
  const [size, setSize] = useState(60); // Mid-point for the slider
  const [link, setLink] = useState("");

  // Update button text when provider changes, keeping it consistent with the image
  const handleProviderChange = (providerName) => {
    setSelectedProvider(providerName);
    const provider = VIDEO_PROVIDERS.find(p => p.name === providerName);
    setButtonText(provider ? provider.defaultText : "");
  };

  // --- Handlers ---
  const handleSave = () => {
    console.log("Saving video conference button:", {
      provider: selectedProvider,
      buttonText,
      shape,
      size,
      link,
    });
    // The "Add" button is visually disabled in the image, suggesting the link is required.
    onClose();
  };

  // --- Rendering Functions ---

  const renderProviderSelection = () => (
    <Grid container spacing={2}>
      {VIDEO_PROVIDERS.map((provider) => (
        <Grid item xs={3} key={provider.name}>
          <Box
            onClick={() => handleProviderChange(provider.name)}
            sx={{
              p: 1.5,
              borderRadius: 1,
              border: 1,
              borderColor: selectedProvider === provider.name ? "primary.main" : "grey.300",
              cursor: "pointer",
              textAlign: "center",
              transition: "border 0.2s",
            }}
          >
            {/* Placeholder for Icon - In a real app, this would be an actual image or SVG */}
            {/* <Box sx={{ width: 40, height: 40, margin: '0 auto', mb: 0.5 }}>
              {provider.icon}
            </Box>  */}
            <Typography variant="body2" fontWeight="medium">
              {provider.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  const renderButtonCustomization = () => (
    <Box mt={3}>
      <Typography variant="body1" fontWeight="bold" mb={2}>
        Add a {selectedProvider} button
      </Typography>

      {/* Button Text */}
      <Box mb={3}>
        <Typography variant="body2" color="text.secondary" mb={0.5}>
          Button text
        </Typography>
        <TextField
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          fullWidth
          size="small"
          variant="outlined"
        />
      </Box>

      {/* Shape */}
      <Box mb={3}>
        <Typography variant="body2" color="text.secondary" mb={0.5}>
          Shape
        </Typography>
        <Stack direction="row" spacing={2}>
          {["square", "rounded_sm", "rounded"].map((s, index) => (
            <Box
              key={s}
              onClick={() => setShape(s)}
              sx={{
                width: 50,
                height: 25,
                border: 1,
                borderColor: shape === s ? "primary.main" : "grey.400",
                borderRadius: index === 0 ? 0 : index === 1 ? "4px" : "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: 'relative',
                bgcolor: 'white',
              }}
            >
                {/* Visual indicator for the selected shape - checkmark not used, 
                    using color/border to indicate selection. 
                    The image shows a checked box for 'square'. We use border/color.
                */}
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Size Slider */}
      <Box mb={3}>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Size
        </Typography>
        <Slider
          value={size}
          onChange={(e, newValue) => setSize(newValue)}
          valueLabelDisplay="off"
          min={0}
          max={100}
        />
      </Box>

      {/* Link Input */}
      <Box mb={3}>
        <TextField
          value={link}
          onChange={(e) => setLink(e.target.value)}
          fullWidth
          size="medium"
          variant="outlined"
          placeholder="Link"
          InputProps={{
            startAdornment: (
              <LinkIcon sx={{ color: "action.active", mr: 1 }} />
            ),
            sx: { paddingLeft: 0 },
          }}
        />
      </Box>
    </Box>
  );

  // The 'Add' button is visually disabled (grayed out) in the image, likely because the Link field is required/empty.
  const isAddDisabled = !link; 

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Video conference"
      onSave={handleSave}
      saveText="Add"
      cancelText="Cancel"
      maxWidth="sm" // Wider to fit the 4-column grid
    >
      <Stack spacing={3}>
        {renderProviderSelection()}
        {renderButtonCustomization()}
      </Stack>

      {/* Override DialogActions to apply the disabled style to the 'Add' button */}
      <Box sx={{ p: 2, pt: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
            variant="contained" 
            onClick={handleSave} 
            disabled={isAddDisabled}
            sx={{
                bgcolor: isAddDisabled ? '#ccc' : 'primary.main', 
                color: isAddDisabled ? 'rgba(0, 0, 0, 0.26)' : 'white',
                '&.Mui-disabled': {
                    bgcolor: '#ccc', 
                    color: 'rgba(0, 0, 0, 0.26)',
                }
            }}
        >
          Add
        </Button>
      </Box>
    </CustomDialog>
  );
};

export default VideoConferenceModal;