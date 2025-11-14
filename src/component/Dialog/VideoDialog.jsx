import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSignature } from "../../hooks/useSignature";

const YouTubeVideoDialog = ({ open, onClose, onSave }) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [styleType, setStyleType] = useState("compact");
  const [fontColor, setFontColor] = useState("#4a4a4a");
  const [fontSize, setFontSize] = useState(14);
  const [alignment, setAlignment] = useState("left");
  const { youtubeVideo, updateYoutubeVideo } = useSignature();

  const [formData, setFormData] = useState({
    url: "",
    title: "",
    styleType: "compact",
    color: "#4a4a4a",
    fontSize: 14,
    align: "left",
  });

  // Initialize form with existing data when dialog opens
  useEffect(() => {
    if (open && youtubeVideo) {
      setFormData({
        url: youtubeVideo.url || "",
        title: youtubeVideo.title || "",
        styleType: youtubeVideo.styleType || "compact",
        color: youtubeVideo.color || "#4a4a4a",
        fontSize: youtubeVideo.fontSize || 14,
        align: youtubeVideo.align || "left",
      });
    }
  }, [open, youtubeVideo]);

  const colors = [
    "#4a4a4a",
    "#c67dff",
    "#6aa9ff",
    "#57c84d",
    "#f3e54d",
    "#ff7b00",
    "#ff4d4d",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Call the context update function
    updateYoutubeVideo(formData);

    // Also call the onSave prop for backward compatibility if needed
    if (onSave) {
      onSave(formData, "video");
    }

    onClose();
  };

  const handleClose = () => {
    // Reset form when closing without saving
    setFormData({
      url: youtubeVideo?.url || "",
      title: youtubeVideo?.title || "",
      styleType: youtubeVideo?.styleType || "compact",
      color: youtubeVideo?.color || "#4a4a4a",
      fontSize: youtubeVideo?.fontSize || 14,
      align: youtubeVideo?.align || "left",
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        YouTube video
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {/* URL and Title Inputs */}
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
          Enter your video URL & title
        </Typography>

        <TextField
          fullWidth
          label="YouTube video / playlist URL"
          placeholder="http://www.youtube.com/watch?v=123"
          variant="outlined"
          value={formData.url}
          onChange={(e) => handleInputChange("url", e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Video / Playlist title"
          placeholder="Kitesurfing how to:"
          variant="outlined"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          sx={{ mb: 3 }}
        />

        {/* Style Section */}
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
          Style
        </Typography>

        {/* Style Type */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Style
          </Typography>
          <RadioGroup
            row
            value={formData.styleType}
            onChange={(e) => handleInputChange("styleType", e.target.value)}
          >
            <FormControlLabel
              value="compact"
              control={<Radio />}
              label="Compact"
            />
            <Box display="flex" alignItems="center" gap={1}>
              <FormControlLabel
                value="expanded"
                control={<Radio />}
                label="Expanded"
              />
              <Typography
                variant="caption"
                sx={{
                  backgroundColor: "#0d6efd",
                  color: "#fff",
                  borderRadius: 1,
                  px: 1,
                  py: 0.2,
                  fontSize: "0.7rem",
                  fontWeight: 500,
                }}
              >
                PRO
              </Typography>
            </Box>
          </RadioGroup>
        </Box>

        {/* Font Color */}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Font color
        </Typography>
        <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
          {colors.map((color) => (
            <Box
              key={color}
              sx={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                bgcolor: color,
                cursor: "pointer",
                border:
                  color === formData.color
                    ? "2px solid black"
                    : "2px solid transparent",
              }}
              onClick={() => handleInputChange("color", color)}
            />
          ))}
          <Box>
            <input
              type="color"
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                cursor: "pointer",
                padding: "5px",
              }}
              value={formData.color}
              onChange={(e) => handleInputChange("color", e.target.value)}
            />
          </Box>
        </Stack>

        {/* Font Size */}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Font size
        </Typography>
        <Slider
          value={formData.fontSize}
          onChange={(e, value) => handleInputChange("fontSize", value)}
          min={10}
          max={24}
          valueLabelDisplay="auto"
          sx={{ mb: 2 }}
        />

        {/* Alignment */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          Alignment
        </Typography>
        <ToggleButtonGroup
          value={formData.align}
          exclusive
          onChange={(e, value) => value && handleInputChange("align", value)}
        >
          <ToggleButton value="left">
            <Box textAlign="left" width="60px">
              Left
            </Box>
          </ToggleButton>
          <ToggleButton value="center">
            <Box textAlign="center" width="60px">
              Center
            </Box>
          </ToggleButton>
          <ToggleButton value="right">
            <Box textAlign="right" width="60px">
              Right
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!formData.url || !formData.title}
        >
          {youtubeVideo?.url ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default YouTubeVideoDialog;
