import React, { useState } from "react";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Box,
  Stack,
  Divider,
  Checkbox,
  Button,
} from "@mui/material";
// Importing icons for Alignment
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is accessible

// --- Color Data ---
// Reusing colors from the first modal, adding black for the font color defaults
const COLORS = [
  "black", // Default selected for Button Color in image
  "#9c27b0", // Purple
  "#f44336", // Red
  "#03a9f4", // Light Blue
  "#4caf50", // Green
  "#ff9800", // Orange
  "#e91e63", // Pink
  "#fbc02d", // Yellow
];

// --- Font Color Data ---
const FONT_COLORS = [
  "black", // Default selected for Font Color in image
  "#9c27b0", // Purple
  "#f44336", // Red
  "#03a9f4", // Light Blue
  "#4caf50", // Green
  "#ff9800", // Orange
  "#e91e63", // Pink
  "#fbc02d", // Yellow
];

/**
 * Renders the Custom Button form content.
 */
const CustomButtonModal = ({ open, onClose }) => {
  // --- State Management (Defaults set to match the image) ---
  const [buttonText, setButtonText] = useState("Check out my website");
  const [buttonUrl, setButtonUrl] = useState("");
  const [shape, setShape] = useState("rounded_sm"); // Matches the first selected shape
  const [type, setType] = useState("Full"); // Matches the selected option
  const [color, setColor] = useState("black"); // Matches the selected button color (black)
  const [size, setSize] = useState("M"); // Matches the selected option
  const [fontColor, setFontColor] = useState("black"); // Matches the selected font color (black)
  const [alignment, setAlignment] = useState("left"); // Matches the selected option
  const [addArrow, setAddArrow] = useState(true); // Matches the checked box

  // --- Handlers ---
  const handleSave = () => {
    console.log("Saving custom button settings:", {
      buttonText,
      buttonUrl,
      shape,
      type,
      color,
      size,
      fontColor,
      alignment,
      addArrow,
    });
    // The "Add" button is disabled/grayed out in the image, suggesting an initial state
    // We will simulate the click but log the 'disabled' visual state.
    if (buttonUrl) {
      onClose();
    } else {
      console.log("Button is visually disabled as URL is empty.");
      // Typically, you would prevent closing here and show an error.
    }
  };

  // --- Rendering Functions ---

  const renderColorPalette = (palette, currentColor, setColorFn) => (
    <RadioGroup
      row
      value={currentColor}
      onChange={(e) => setColorFn(e.target.value)}
    >
      {palette.map((colorValue) => (
        <FormControlLabel
          key={colorValue}
          value={colorValue}
          control={<Radio sx={{ display: "none" }} />}
          label={
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: colorValue,
                border: 2,
                borderColor:
                  currentColor === colorValue ? "primary.main" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                p: 0.25,
              }}
            >
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: colorValue,
                  border: 1,
                  borderColor: colorValue === "white" ? "grey.400" : colorValue,
                }}
              />
            </Box>
          }
        />
      ))}
    </RadioGroup>
  );

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Custom Button"
      onSave={handleSave}
      saveText="Add"
      cancelText="Cancel"
      maxWidth="sm"
    >
      <Stack spacing={3}>
        {/* Button Details */}
        <Box>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Button details
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Button text
          </Typography>
          <TextField
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            fullWidth
            size="small"
            variant="standard"
          />
          <Typography variant="body2" color="text.secondary" mt={2}>
            Button URL
          </Typography>
          <TextField
            value={buttonUrl}
            onChange={(e) => setButtonUrl(e.target.value)}
            fullWidth
            size="small"
            variant="standard"
            placeholder="Button Url"
          />
        </Box>

        <Divider />

        {/* Button Style */}
        <Box>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Button style{" "}
            <Typography
              component="span"
              color="primary"
              sx={{ fontWeight: "bold", fontSize: "0.8rem" }}
            >
              PRO
            </Typography>
          </Typography>

          {/* Shape */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Shape
            </Typography>
            <RadioGroup
              row
              value={shape}
              onChange={(e) => setShape(e.target.value)}
            >
              {["square", "rounded_sm", "rounded"].map((s, index) => (
                <FormControlLabel
                  key={s}
                  value={s}
                  control={<Radio />} // Using default Radio for selection visualization
                  label={
                    <Box
                      sx={{
                        width: 40,
                        height: 15,
                        border: 1,
                        borderColor: "grey.500",
                        borderRadius:
                          index === 0 ? 0 : index === 1 ? "4px" : "50px",
                        display: "inline-block",
                      }}
                    />
                  }
                />
              ))}
            </RadioGroup>
          </Box>

          {/* Type (Full, Light, Simple link) */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Type
            </Typography>
            <RadioGroup
              row
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {["Full", "Light", "Simple link"].map((t) => (
                <FormControlLabel
                  key={t}
                  value={t}
                  control={<Radio size="small" />}
                  label={t}
                />
              ))}
            </RadioGroup>
          </Box>

          {/* Color (Button Color) */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Color
            </Typography>
            {renderColorPalette(COLORS, color, setColor)}
          </Box>

          {/* Size (S, M, L) */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Size
            </Typography>
            <RadioGroup
              row
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {["S", "M", "L"].map((s) => (
                <FormControlLabel
                  key={s}
                  value={s}
                  control={<Radio sx={{ display: "none" }} />}
                  label={
                    <Box
                      sx={{
                        px: 2,
                        py: 1,
                        border: 1,
                        borderColor: size === s ? "primary.main" : "grey.300",
                        borderRadius: 1,
                        bgcolor: size === s ? "white" : "grey.50",
                        color: "text.primary",
                        cursor: "pointer",
                        minWidth: "40px",
                        textAlign: "center",
                      }}
                    >
                      {s}
                    </Box>
                  }
                />
              ))}
            </RadioGroup>
          </Box>

          {/* Font Color */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Font color
            </Typography>
            {renderColorPalette(FONT_COLORS, fontColor, setFontColor)}
          </Box>

          {/* Alignment */}
          <Box mb={2}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Alignment
            </Typography>
            <RadioGroup
              row
              value={alignment}
              onChange={(e) => setAlignment(e.target.value)}
            >
              {[
                { value: "left", Icon: FormatAlignLeftIcon },
                { value: "center", Icon: FormatAlignCenterIcon },
                { value: "right", Icon: FormatAlignRightIcon },
              ].map(({ value, Icon }) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio sx={{ display: "none" }} />}
                  label={
                    <Box
                      sx={{
                        px: 1,
                        py: 1,
                        border: 1,
                        borderColor:
                          alignment === value ? "primary.main" : "grey.300",
                        borderRadius: 1,
                        bgcolor: alignment === value ? "white" : "grey.50",
                        cursor: "pointer",
                        minWidth: "40px",
                        textAlign: "center",
                      }}
                    >
                      <Icon
                        color={alignment === value ? "primary" : "action"}
                      />
                    </Box>
                  }
                />
              ))}
            </RadioGroup>
          </Box>
        </Box>
      </Stack>

      {/* Override DialogActions to reflect the disabled state of the 'Add' button in the image */}
      <Box
        sx={{
          p: 2,
          pt: 1,
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
        }}
      >
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!buttonUrl} // Disabled if URL is empty, matching the visual of the image
          sx={{
            // Custom style to match the image's grayed-out, disabled 'Add' button appearance
            bgcolor: "#ccc",
            color: "rgba(0, 0, 0, 0.26)",
            "&.Mui-disabled": {
              bgcolor: "#ccc",
              color: "rgba(0, 0, 0, 0.26)",
            },
          }}
        >
          Add
        </Button>
      </Box>
    </CustomDialog>
  );
};

export default CustomButtonModal;
