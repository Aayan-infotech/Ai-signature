import React, { useState } from "react";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Box,
  Divider,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LinkIcon from "@mui/icons-material/Link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is in the same directory or accessible

// Define color and icon data for easy mapping
const COLORS = [
  "black",
  "#c8004f", // pink/magenta
  "#007dff", // blue
  "#00a187", // green/teal
  "#ffc107", // yellow
  "#ff7e00", // orange
  "#d63333", // red
  "#ffffff", // white (The selected color from the image)
];

// Map a subset of icons shown in the image to MUI Icons
const ICON_OPTIONS = [
  { value: "circle", Icon: CheckCircleIcon, selected: true }, // Blue circle, using a check icon for clarity
  { value: "calendar_month", Icon: CalendarMonthIcon },
  { value: "calendar_today", Icon: CalendarTodayIcon },
  { value: "link", Icon: LinkIcon },
  { value: "time", Icon: AccessTimeIcon },
  { value: "emoticon", Icon: InsertEmoticonIcon },
  { value: "none", Icon: null }, // Representing the "None" option
];

/**
 * Renders the Online Meeting Scheduler form content.
 * It uses the CustomDialog component for the modal structure.
 */
const OnlineMeetingScheduler = ({ open, onClose }) => {
  // --- State Management (Defaults set to match the image) ---
  const [schedulingProvider, setSchedulingProvider] = useState("vcita");
  const [schedulerUrl, setSchedulerUrl] = useState("https://ww.google.com");
  const [buttonText, setButtonText] = useState("Book a meeting");
  const [buttonType, setButtonType] = useState("Full");
  const [buttonSize, setButtonSize] = useState("M");
  const [buttonColor, setButtonColor] = useState("#ffffff"); // Corresponds to the last (selected) color in the image
  const [buttonIcon, setButtonIcon] = useState("circle");
  const [buttonShape, setButtonShape] = useState("rounded"); // Assuming the last shape is 'rounded'

  // --- Handlers ---
  const handleSave = () => {
    // Logic to save the settings
    console.log("Saving settings...");
    // You would typically call an API or update parent state here
    onClose();
  };

  // --- Rendering Functions ---

  const renderSchedulingProvider = () => (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Choose Scheduling provider
      </Typography>
      <Typography variant="body2" mb={1}>
        Which scheduling service would you like to use?
      </Typography>

      <Box mt={1}>
        <Typography variant="body2" color="text.secondary">
          Scheduler Url
        </Typography>
        <TextField
          value={schedulerUrl}
          onChange={(e) => setSchedulerUrl(e.target.value)}
          fullWidth
          size="small"
          variant="outlined"
          placeholder="https://www.google.com" // Placeholder for clarity
          sx={{
            "& .MuiOutlinedInput-input": {
              // To visually match the look of the image's text field
              padding: "6px 14px",
              height: "auto",
            },
          }}
        />
      </Box>
    </Box>
  );

  const renderButtonDesign = () => (
    <Box mt={3}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Button design
      </Typography>

      {/* Button Text */}
      <Box mb={2}>
        <Typography variant="body2" color="text.secondary" mb={0.5}>
          Button text
        </Typography>
        <TextField
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          size="small"
          variant="standard"
          sx={{
            "& .MuiInput-input": {
              // To visually match the look of the image's text field
              padding: "4px 0",
            },
          }}
        />
      </Box>

      {/* Type (Full, Light, Simple link) */}
      <Box mb={2}>
        <Typography variant="body2" color="text.secondary" mb={0.5}>
          Type
        </Typography>
        <RadioGroup
          row
          value={buttonType}
          onChange={(e) => setButtonType(e.target.value)}
        >
          {["Full", "Light", "Simple link"].map((type) => (
            <FormControlLabel
              key={type}
              value={type}
              control={<Radio sx={{ display: "none" }} />} // Hide the radio button
              label={
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    border: 1,
                    borderColor:
                      buttonType === type ? "primary.main" : "grey.300",
                    borderRadius: 1,
                    bgcolor: buttonType === type ? "primary.main" : "white",
                    color: buttonType === type ? "white" : "text.primary",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    minWidth: "60px",
                    textAlign: "center",
                  }}
                >
                  {type}
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </Box>

      {/* Size (S, M, L) */}
      <Box mb={2}>
        <Typography variant="body2" color="text.secondary" mb={0.5}>
          Size
        </Typography>
        <RadioGroup
          row
          value={buttonSize}
          onChange={(e) => setButtonSize(e.target.value)}
        >
          {["S", "M", "L"].map((size) => (
            <FormControlLabel
              key={size}
              value={size}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <Box
                  sx={{
                    px: 2,
                    py: 1,
                    border: 1,
                    borderColor:
                      buttonSize === size ? "primary.main" : "grey.300",
                    borderRadius: 1,
                    bgcolor: buttonSize === size ? "white" : "grey.50",
                    color: "text.primary",
                    cursor: "pointer",
                    minWidth: "40px",
                    textAlign: "center",
                  }}
                >
                  {size}
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </Box>

      {/* Color */}
      <Box mb={2}>
        <Typography variant="body2" color="text.secondary" mb={0.5}>
          Color
        </Typography>
        <RadioGroup
          row
          value={buttonColor}
          onChange={(e) => setButtonColor(e.target.value)}
        >
          {COLORS.map((color, index) => (
            <Tooltip title={color} key={color}>
              <FormControlLabel
                value={color}
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      backgroundColor: color === "#ffffff" ? "grey.200" : color, // Show a subtle border for white
                      border: 2,
                      borderColor:
                        buttonColor === color ? "primary.main" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      p: 0.25,
                    }}
                  >
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        backgroundColor: color,
                        border: 1, // Inner border to show white color better
                        borderColor: color === "#ffffff" ? "grey.400" : color,
                      }}
                    />
                  </Box>
                }
              />
            </Tooltip>
          ))}
        </RadioGroup>
      </Box>

      {/* Icon */}
      <Box mb={2}>
        <Typography variant="body2" color="text.secondary" mb={0.5}>
          Icon
        </Typography>
        <RadioGroup
          row
          value={buttonIcon}
          onChange={(e) => setButtonIcon(e.target.value)}
        >
          {ICON_OPTIONS.map(({ value, Icon }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={
                <Radio
                  sx={{
                    display: "none",
                  }}
                />
              }
              label={
                <IconButton
                  component="span"
                  color={buttonIcon === value ? "primary" : "default"}
                  sx={{
                    border: 2,
                    fontSize: "small",
                    borderColor:
                      buttonIcon === value ? "primary.main" : "grey.300",
                    backgroundColor:
                      buttonIcon === value ? "primary.light" : "transparent",
                    p: 1,
                    color:
                      buttonIcon === value ? "white" : "text.primary",
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor:
                        buttonIcon === value ? "primary.light" : "grey.100",
                    },
                  }}
                >
                  {Icon ? <Icon fontSize="small" /> : "None"}
                </IconButton>
              }
              sx={{
                margin: 0.5,
                "& .MuiFormControlLabel-label": {
                  margin: 0,
                },
              }}
            />
          ))}
        </RadioGroup>
      </Box>

      {/* Shape */}
      <Box mb={2}>
        <Typography variant="body2" color="text.secondary" mb={0.5}>
          Shape
        </Typography>
        <RadioGroup
          row
          value={buttonShape}
          onChange={(e) => setButtonShape(e.target.value)}
        >
          {["square", "rounded_sm", "rounded"].map((shape, index) => (
            <FormControlLabel
              key={shape}
              value={shape}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <Box
                  sx={{
                    width: 40,
                    height: 20,
                    border: 1,
                    borderColor:
                      buttonShape === shape ? "primary.main" : "grey.300",
                    borderRadius:
                      index === 0 ? 0 : index === 1 ? "4px" : "50px", // Visual representation of the shape
                    display: "inline-block",
                    cursor: "pointer",
                    p: 0.5,
                  }}
                />
              }
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Online Meeting Scheduler"
      onSave={handleSave}
      saveText="Add" // Matches the "Add" button in the image
      cancelText="Cancel"
      maxWidth="sm" // A sensible max-width for this type of modal
    >
      <Stack spacing={3}>
        {renderSchedulingProvider()}
        <Divider />
        {renderButtonDesign()}
      </Stack>
    </CustomDialog>
  );
};

export default OnlineMeetingScheduler;
