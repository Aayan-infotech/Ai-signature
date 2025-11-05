import React, { useState } from "react";
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

const YouTubeVideoDialog = ({ open, onClose, onAdd }) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [styleType, setStyleType] = useState("compact");
  const [fontColor, setFontColor] = useState("#4a4a4a");
  const [fontSize, setFontSize] = useState(14);
  const [alignment, setAlignment] = useState("left");

  const colors = [
    "#4a4a4a",
    "#c67dff",
    "#6aa9ff",
    "#57c84d",
    "#f3e54d",
    "#ff7b00",
    "#ff4d4d",
  ];

  const handleAdd = () => {
    onAdd({
      url,
      title,
      styleType,
      fontColor,
      fontSize,
      alignment,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        YouTube video
        <IconButton
          aria-label="close"
          onClick={onClose}
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
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Video / Playlist title"
          placeholder="Kitesurfing how to:"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
            value={styleType}
            onChange={(e) => setStyleType(e.target.value)}
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
          {colors.map((c) => (
            <Box
              key={c}
              sx={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                bgcolor: c,
                cursor: "pointer",
                border:
                  c === fontColor ? "2px solid black" : "2px solid transparent",
              }}
              onClick={() => setFontColor(c)}
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
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
            />
          </Box>
        </Stack>

        {/* Font Size */}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Font size
        </Typography>
        <Slider
          value={fontSize}
          onChange={(e, val) => setFontSize(val)}
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
          value={alignment}
          exclusive
          onChange={(e, val) => val && setAlignment(val)}
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
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleAdd}
          disabled={!url || !title}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default YouTubeVideoDialog;
