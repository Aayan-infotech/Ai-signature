import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Switch,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DisclaimerDialog = ({ open, onClose, onAdd }) => {
  const [disclaimerType, setDisclaimerType] = useState("confidentiality");
  const [color, setColor] = useState("#4a4a4a");
  const [fontSize, setFontSize] = useState(14);
  const [alignment, setAlignment] = useState("left");
  const [decorativeLine, setDecorativeLine] = useState(true);

  const handleAdd = () => {
    onAdd({
      disclaimerType,
      color,
      fontSize,
      alignment,
      decorativeLine,
    });
    onClose();
  };

  const colors = [
    "#4a4a4a",
    "#c67dff",
    "#6aa9ff",
    "#57c84d",
    "#f3e54d",
    "#ff7b00",
    "#ff4d4d",
  ];

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        Add a disclaimer
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {/* Disclaimer Type */}
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <FormLabel component="legend" sx={{ fontWeight: 500, mb: 1 }}>
            Choose your disclaimer type:
          </FormLabel>
          <RadioGroup
            value={disclaimerType}
            onChange={(e) => setDisclaimerType(e.target.value)}
          >
            <FormControlLabel
              value="confidentiality"
              control={<Radio />}
              label="Confidentiality"
            />
            <FormControlLabel
              value="no_viruses"
              control={<Radio />}
              label="No viruses"
            />
            <FormControlLabel
              value="non_binding"
              control={<Radio />}
              label="Non-binding"
            />
            <FormControlLabel
              value="personal_opinions"
              control={<Radio />}
              label="Personal opinions"
            />
            <FormControlLabel
              value="correct_recipient"
              control={<Radio />}
              label="Correct recipient"
            />
            <Box display="flex" alignItems="center" gap={1}>
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
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
        </FormControl>

        {/* Disclaimer Style */}
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
          Disclaimer style
        </Typography>

        {/* Color Selector */}
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
                  c === color ? "2px solid black" : "2px solid transparent",
              }}
              onClick={() => setColor(c)}
            />
          ))}

          <Box
          >
            <input
              type="color"
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                cursor: "pointer",
                padding:"5px"
              }}
              value={color}
              onChange={(e) => setColor(e.target.value)}
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

        {/* Banner Alignment */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          Banner alignment
        </Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={(e, val) => val && setAlignment(val)}
          sx={{ mb: 2 }}
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
        <Button onClick={handleAdd} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DisclaimerDialog;
