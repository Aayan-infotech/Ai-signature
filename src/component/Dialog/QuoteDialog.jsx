// QuoteDialog.js
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
  Grid,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { QUOTE_TEXT, QUOTE_CATEGORY_MAP } from "../../utils/constant";
import { useSignature } from "../../hooks/useSignature";

const AddQuoteDialog = ({ open, onClose, onSave }) => {
  const { quoteStyle, updateQuoteStyle } = useSignature();

  const [localState, setLocalState] = useState({
    category: quoteStyle.category || "success",
    color: quoteStyle.color || "#4a4a4a",
    fontSize: quoteStyle.fontSize || 14,
    alignment: quoteStyle.align || "left",
    customText: quoteStyle.customText || "",
  });

  const handleLocalChange = (key, value) => {
    setLocalState((prev) => ({ ...prev, [key]: value }));
  };

  const handleAdd = () => {
    // Map dialog category to constant key
    const categoryKey =
      QUOTE_CATEGORY_MAP[localState.category] || localState.category;

    const updatedQuote = {
      category: categoryKey,
      color: localState.color,
      fontSize: localState.fontSize,
      align: localState.alignment,
      customText: localState.customText,
    };

    updateQuoteStyle(updatedQuote);
    onSave(updatedQuote);
    onClose();
  };

  const getPreviewText = () => {
    if (localState.category === "my_own_quotes") {
      return localState.customText || "Your custom quote will appear here...";
    }
    const categoryKey = QUOTE_CATEGORY_MAP[localState.category];
    return QUOTE_TEXT[categoryKey] || QUOTE_TEXT.success;
  };

  const categories = [
    { label: "Success", value: "success" },
    { label: "Motivational", value: "motivational" },
    { label: "William Shakespeare", value: "william_shakespeare" },
    { label: "Science", value: "science" },
    { label: "Finance", value: "finance" },
    { label: "Funny", value: "funny" },
    { label: "Positive", value: "positive" },
    { label: "Friendship", value: "friendship" },
    { label: "Business", value: "business" },
    { label: "Albert Einstein", value: "albert_einstein" },
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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        Add a Quote
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
            {/* Choose category */}
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                Choose a category
              </Typography>

              <Grid container spacing={1}>
                {categories.map((cat) => (
                  <Grid item xs={6} key={cat.value}>
                    <FormControlLabel
                      value={cat.value}
                      control={
                        <Radio
                          checked={localState.category === cat.value}
                          onChange={() =>
                            handleLocalChange("category", cat.value)
                          }
                        />
                      }
                      label={cat.label}
                    />
                  </Grid>
                ))}

                <Grid item xs={6} display="flex" alignItems="center" gap={1}>
                  <FormControlLabel
                    value="my_own_quotes"
                    control={
                      <Radio
                        checked={localState.category === "my_own_quotes"}
                        onChange={() =>
                          handleLocalChange("category", "my_own_quotes")
                        }
                      />
                    }
                    label="My Own Quotes"
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
                </Grid>
              </Grid>
            </FormControl>

            {/* Custom Quote Input */}
            {localState.category === "my_own_quotes" && (
              <Box mt={2}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Custom Quote
                </Typography>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your custom quote here..."
                  value={localState.customText}
                  onChange={(e) =>
                    handleLocalChange("customText", e.target.value)
                  }
                  sx={{ mb: 2 }}
                />
              </Box>
            )}

            <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
              Style
            </Typography>

            {/* Color Picker */}
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
              value={localState.alignment}
              exclusive
              onChange={(e, val) => val && handleLocalChange("alignment", val)}
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: localState.color,
                  fontSize: `${localState.fontSize}px`,
                  textAlign: localState.alignment,
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  width: "100%",
                }}
              >
                {getPreviewText()}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleAdd}>
          Add Quote
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddQuoteDialog;
