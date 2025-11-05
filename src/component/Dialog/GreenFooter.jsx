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
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SpaIcon from "@mui/icons-material/Spa";
import ForestIcon from "@mui/icons-material/Forest";

const GreenFooterDialog = ({ open, onClose, onAdd }) => {
  const [selectedText, setSelectedText] = useState(
    "environmental_responsibility"
  );
  const [icon, setIcon] = useState("none");
  const [fontSize, setFontSize] = useState(14);
  const [color, setColor] = useState("#57c84d");
  const [alignment, setAlignment] = useState("left");

  const footerTexts = [
    "Environmental responsibility",
    "Environmental responsibility short",
    "Do you really need..?",
    "Printing kills trees",
    "Don't print this",
    "Printing emails is SO 2009",
    "Save a tree - kill a beaver",
    "Be Carbon free",
    "Save ink cartridges",
    "Custom",
  ];

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
      selectedText,
      icon,
      fontSize,
      color,
      alignment,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        Add a green footer
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {/* Choose Text */}
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
            Choose a text
          </Typography>
          <RadioGroup
            value={selectedText}
            onChange={(e) => setSelectedText(e.target.value)}
          >
            {footerTexts.map((text) => (
              <FormControlLabel
                key={text}
                value={text.toLowerCase().replace(/\s+/g, "_")}
                control={<Radio />}
                label={text}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {/* Footer Style */}
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
          Footer style
        </Typography>

        {/* Icon Options */}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Icon
        </Typography>
        <Stack direction="row" alignItems="center" spacing={3} mb={2}>
          <FormControlLabel
            value="tree"
            control={
              <Radio
                checked={icon === "tree"}
                onChange={() => setIcon("tree")}
              />
            }
            label={<ForestIcon color="success"/>}
          />
          <FormControlLabel
            value="leaf"
            control={
              <Radio
                checked={icon === "leaf"}
                onChange={() => setIcon("leaf")}
              />
            }
            label={<SpaIcon color="success"/>}
          />
          <FormControlLabel
            value="none"
            control={
              <Radio
                checked={icon === "none"}
                onChange={() => setIcon("none")}
              />
            }
            label="None"
          />
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

        {/* Color Picker */}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Color
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
                  c === color ? "2px solid black" : "2px solid transparent",
              }}
              onClick={() => setColor(c)}
            />
          ))}
        </Stack>

        {/* Banner Alignment */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          Banner alignment
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
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GreenFooterDialog;
