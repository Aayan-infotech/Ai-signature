import React, { useState, useContext, useEffect } from "react";
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
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SpaIcon from "@mui/icons-material/Spa";
import ForestIcon from "@mui/icons-material/Forest";
import SignatureContext from "../../context/SignatureContext";

const GreenFooterDialog = ({ open, onClose, onSave }) => {
  const { greenFooter, updateGreenFooter } = useContext(SignatureContext);

  const [formData, setFormData] = useState({
    category: "",
    icon: "none",
    fontSize: 14,
    color: "#57c84d",
    align: "left",
    customText: "",
  });

  // Initialize form with existing data when dialog opens
  useEffect(() => {
    if (open && greenFooter) {
      setFormData({
        category: greenFooter.category || "environmental_responsibility",
        icon: greenFooter.icon || "none",
        fontSize: greenFooter.fontSize || 14,
        color: greenFooter.color || "#57c84d",
        align: greenFooter.align || "left",
        customText: greenFooter.customText || "",
      });
    }
  }, [open, greenFooter]);

  const footerTexts = [
    {
      value: "Environmental_responsibility",
      label: "Environmental responsibility",
    },
    {
      value: "Environmental_responsibility_short",
      label: "Environmental responsibility short",
    },
    { value: "Do_you_really_need", label: "Do you really need..?" },
    { value: "Printing_kills_trees", label: "Printing kills trees" },
    { value: "Dont_print_this", label: "Don't print this" },
    { value: "Printing_emails", label: "Printing emails is SO 2009" },
    { value: "Save_a_tree", label: "Save a tree - kill a beaver" },
    { value: "Be_carbon_free", label: "Be Carbon free" },
    { value: "Save_ink_cartridges", label: "Save ink cartridges" },
    { value: "custom", label: "Custom" },
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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Call the context update function
    updateGreenFooter(formData);

    // Also call the onSave prop for backward compatibility
    if (onSave) {
      onSave(formData, "greenFooter");
    }

    onClose();
  };

  const handleClose = () => {
    // Reset form when closing without saving
    setFormData({
      category: greenFooter?.category || "environmental_responsibility",
      icon: greenFooter?.icon || "none",
      fontSize: greenFooter?.fontSize || 14,
      color: greenFooter?.color || "#57c84d",
      align: greenFooter?.align || "left",
      customText: greenFooter?.customText || "",
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        Add a green footer
        <IconButton
          aria-label="close"
          onClick={handleClose}
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
            value={formData.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
          >
            {footerTexts.map((text) => (
              <FormControlLabel
                key={text.value}
                value={text.value}
                control={<Radio />}
                label={text.label}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {/* Custom Text Input */}
        {formData.category === "custom" && (
          <TextField
            fullWidth
            label="Custom Text"
            placeholder="Enter your custom green footer text"
            variant="outlined"
            value={formData.customText}
            onChange={(e) => handleInputChange("customText", e.target.value)}
            sx={{ mb: 3 }}
            multiline
            rows={3}
          />
        )}

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
                checked={formData.icon === "tree"}
                onChange={() => handleInputChange("icon", "tree")}
              />
            }
            label={<ForestIcon color="success" />}
          />
          <FormControlLabel
            value="leaf"
            control={
              <Radio
                checked={formData.icon === "leaf"}
                onChange={() => handleInputChange("icon", "leaf")}
              />
            }
            label={<SpaIcon color="success" />}
          />
          <FormControlLabel
            value="none"
            control={
              <Radio
                checked={formData.icon === "none"}
                onChange={() => handleInputChange("icon", "none")}
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
          value={formData.fontSize}
          onChange={(e, value) => handleInputChange("fontSize", value)}
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

        {/* Banner Alignment */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          Banner alignment
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
        <Button variant="contained" onClick={handleSave}>
          {greenFooter?.category ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GreenFooterDialog;
