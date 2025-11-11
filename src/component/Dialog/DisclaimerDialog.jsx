// DisclaimerDialog.js
import React, { useState, useContext } from "react";
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
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DISCLAIMER_TEXT, DISCLAIMER_TYPE_MAP } from "../../utils/constant";
import { useSignature } from "../../hooks/useSignature";
const DisclaimerDialog = ({ open, onClose, onSave }) => {
  const { disclaimerStyle, updateDisclaimerStyle } = useSignature();

  const [localState, setLocalState] = useState({
    disclaimerType: "confidentiality",
    color: disclaimerStyle?.color || "#4a4a4a",
    fontSize: disclaimerStyle?.fontSize || 14,
    alignment: disclaimerStyle?.align || "left",
    decorativeLine: disclaimerStyle?.decorativeLine !== false,
    customText: disclaimerStyle?.customText || "",
  });

  const handleLocalChange = (key, value) => {
    setLocalState((prev) => ({ ...prev, [key]: value }));
  };

  const handleAdd = () => {
    // Map dialog type to constant key
    const typeKey = DISCLAIMER_TYPE_MAP[localState.disclaimerType];

    const updatedDisclaimer = {
      type: typeKey,
      color: localState.color,
      fontSize: localState.fontSize,
      align: localState.alignment,
      decorativeLine: localState.decorativeLine,
      customText: localState.customText,
    };

    updateDisclaimerStyle(updatedDisclaimer);
    onSave(updatedDisclaimer);
    onClose();
  };

  const getPreviewText = () => {
    if (localState.disclaimerType === "custom") {
      return (
        localState.customText || "Your custom disclaimer will appear here..."
      );
    }
    const typeKey = DISCLAIMER_TYPE_MAP[localState.disclaimerType];
    return DISCLAIMER_TEXT[typeKey] || "";
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
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
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
        <Box display="flex" gap={3}>
          {/* Left Column - Settings */}
          <Box flex={1}>
            {/* Disclaimer Type */}
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend" sx={{ fontWeight: 500, mb: 1 }}>
                Choose your disclaimer type:
              </FormLabel>
              <RadioGroup
                value={localState.disclaimerType}
                onChange={(e) =>
                  handleLocalChange("disclaimerType", e.target.value)
                }
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

            {localState.disclaimerType === "custom" && (
              <Box mt={2}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Custom Disclaimer
                </Typography>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your custom disclaimer here"
                  value={localState.customText}
                  onChange={(e) =>
                    handleLocalChange("customText", e.target.value)
                  }
                  sx={{ mb: 2 }}
                />
              </Box>
            )}

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
                      c === localState.color
                        ? "2px solid black"
                        : "2px solid transparent",
                  }}
                  onClick={() => handleLocalChange("color", c)}
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
                  value={localState.color}
                  onChange={(e) => handleLocalChange("color", e.target.value)}
                />
              </Box>
            </Stack>

            {/* Font Size */}
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Font size
            </Typography>
            <Slider
              value={localState.fontSize}
              onChange={(e, val) => handleLocalChange("fontSize", val)}
              min={8}
              max={20}
              valueLabelDisplay="auto"
              sx={{ mb: 2 }}
            />

            {/* Banner Alignment */}
            <Typography variant="body2" sx={{ mb: 1 }}>
              Banner alignment
            </Typography>
            <ToggleButtonGroup
              value={localState.alignment}
              exclusive
              onChange={(e, val) => val && handleLocalChange("alignment", val)}
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

            {/* Decorative Line */}
            <FormControlLabel
              control={
                <Switch
                  checked={localState.decorativeLine}
                  onChange={(e) =>
                    handleLocalChange("decorativeLine", e.target.checked)
                  }
                />
              }
              label="Add decorative line"
            />
          </Box>

          {/* Right Column - Preview */}
          <Box flex={1} sx={{ borderLeft: "1px solid #e0e0e0", pl: 3 }}>
            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
              Preview
            </Typography>
            <Box
              sx={{
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                backgroundColor: "#f9f9f9",
                minHeight: "200px",
              }}
            >
              {localState.decorativeLine && (
                <Box
                  sx={{
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${localState.color}, transparent)`,
                    mb: 2,
                  }}
                />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: localState.color,
                  fontSize: `${localState.fontSize}px`,
                  textAlign: localState.alignment,
                  lineHeight: 1.4,
                }}
              >
                {getPreviewText()}
              </Typography>
              {localState.decorativeLine && (
                <Box
                  sx={{
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${localState.color}, transparent)`,
                    mt: 2,
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
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
