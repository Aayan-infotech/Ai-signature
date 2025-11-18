// In VideoConferenceModal.jsx
import React, { useState, useContext, useEffect } from "react";
import {
  Typography,
  Box,
  TextField,
  Stack,
  Slider,
  Grid,
  Button,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import CustomDialog from "./CustomDialog";
import { useSignature } from "../../hooks/useSignature";

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
  const { videoConference, updateVideoConference } = useSignature();

  // Initialize state from context
  const [selectedProvider, setSelectedProvider] = useState(
    videoConference.provider || "Zoom"
  );
  const [buttonText, setButtonText] = useState(
    videoConference.buttonText || "Meet me on Zoom"
  );
  const [shape, setShape] = useState(videoConference.shape || "square");
  const [size, setSize] = useState(videoConference.size || 60);
  const [link, setLink] = useState(videoConference.link || "");

  // Update local state when context changes
  useEffect(() => {
    if (videoConference) {
      setSelectedProvider(videoConference.provider || "Zoom");
      setButtonText(videoConference.buttonText || "Meet me on Zoom");
      setShape(videoConference.shape || "square");
      setSize(videoConference.size || 60);
      setLink(videoConference.link || "");
    }
  }, [videoConference, open]);

  // Update button text when provider changes
  const handleProviderChange = (providerName) => {
    setSelectedProvider(providerName);
    const provider = VIDEO_PROVIDERS.find((p) => p.name === providerName);
    setButtonText(provider ? provider.defaultText : "");
  };

  // --- Handlers ---
  const handleSave = () => {
    const videoConferenceData = {
      enabled: true,
      provider: selectedProvider,
      buttonText,
      shape,
      size,
      link,
    };

    console.log("Saving video conference button:", videoConferenceData);
    updateVideoConference(videoConferenceData);
    onClose();
  };

  // --- Rendering Functions ---

  const renderProviderSelection = () => (
    <Grid container spacing={2}>
      {VIDEO_PROVIDERS.map((provider) => (
        <Grid item xs={4} key={provider.name}>
          <Box
            onClick={() => handleProviderChange(provider.name)}
            sx={{
              p: 1.5,
              borderRadius: 1,
              border: 1,
              borderColor:
                selectedProvider === provider.name
                  ? "primary.main"
                  : "grey.300",
              cursor: "pointer",
              textAlign: "center",
              transition: "border 0.2s",
              backgroundColor:
                selectedProvider === provider.name ? "#f0f8ff" : "white",
            }}
          >
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
                border: 2,
                borderColor: shape === s ? "primary.main" : "grey.400",
                borderRadius: index === 0 ? 0 : index === 1 ? "4px" : "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
                bgcolor: "white",
                transition: "border-color 0.2s",
              }}
            />
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
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}px`}
          min={10}
          max={40}
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
          error={!link}
          helperText={!link ? "Link is required" : ""}
          InputProps={{
            startAdornment: <LinkIcon sx={{ color: "action.active", mr: 1 }} />,
            sx: { paddingLeft: 0 },
          }}
        />
      </Box>
    </Box>
  );

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Video conference"
      onSave={handleSave}
      saveText="Add"
      cancelText="Cancel"
      maxWidth="sm"
      disableSave={!link} // Disable save if no link provided
    >
      <Stack spacing={3}>
        {renderProviderSelection()}
        {renderButtonCustomization()}
      </Stack>
    </CustomDialog>
  );
};

export default VideoConferenceModal;
