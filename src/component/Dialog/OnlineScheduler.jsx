import React, { useState, useEffect } from "react";
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
import CustomDialog from "./CustomDialog";
import { useSignature } from "../../hooks/useSignature";

// Define color and icon data for easy mapping
const COLORS = [
  "black",
  "#c8004f", // pink/magenta
  "#007dff", // blue
  "#00a187", // green/teal
  "#ffc107", // yellow
  "#ff7e00", // orange
  "#d63333", // red
  "#ffffff", // white
];

// Map a subset of icons shown in the image to MUI Icons
const ICON_OPTIONS = [
  { value: "circle", Icon: CheckCircleIcon },
  { value: "calendar_month", Icon: CalendarMonthIcon },
  { value: "calendar_today", Icon: CalendarTodayIcon },
  { value: "link", Icon: LinkIcon },
  { value: "time", Icon: AccessTimeIcon },
  { value: "emoticon", Icon: InsertEmoticonIcon },
  { value: "none", Icon: null },
];

/**
 * Renders the Online Meeting Scheduler form content.
 * It uses the CustomDialog component for the modal structure.
 */
const OnlineMeetingScheduler = ({ open, onClose }) => {
  const { onlineMeeting, updateOnlineMeeting } = useSignature();

  // Local state for form fields - only update context on save
  const [formData, setFormData] = useState({
    schedulingProvider: "vcita",
    schedulerUrl: "",
    buttonText: "Book a meeting",
    buttonType: "Full",
    buttonSize: "M",
    buttonColor: "#007dff",
    buttonIcon: "circle",
    buttonShape: "rounded",
  });

  // Initialize form data when dialog opens or onlineMeeting changes
  useEffect(() => {
    if (open && onlineMeeting) {
      setFormData({
        schedulingProvider: onlineMeeting.schedulingProvider || "vcita",
        schedulerUrl: onlineMeeting.schedulerUrl || "",
        buttonText: onlineMeeting.buttonText || "Book a meeting",
        buttonType: onlineMeeting.buttonType || "Full",
        buttonSize: onlineMeeting.buttonSize || "M",
        buttonColor: onlineMeeting.buttonColor || "#007dff",
        buttonIcon: onlineMeeting.buttonIcon || "circle",
        buttonShape: onlineMeeting.buttonShape || "rounded",
      });
    }
  }, [open, onlineMeeting]);

  // --- Handlers ---
  const handleSave = () => {
    // Update context only once when saving
    updateOnlineMeeting({
      ...onlineMeeting,
      enabled: true,
      ...formData,
    });
    onClose();
  };

  const handleInputChange = (field, value) => {
    // Only update local state, not context
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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

      {/* Scheduling Provider Selection */}
      <Box mb={2}>
        <Typography variant="body2" color="text.secondary" mb={0.5}>
          Provider
        </Typography>
        <RadioGroup
          row
          value={formData.schedulingProvider}
          onChange={(e) =>
            handleInputChange("schedulingProvider", e.target.value)
          }
        >
          {["vcita", "calendly", "acuity", "custom"].map((provider) => (
            <FormControlLabel
              key={provider}
              value={provider}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    border: 1,
                    borderColor:
                      formData.schedulingProvider === provider
                        ? "primary.main"
                        : "grey.300",
                    borderRadius: 1,
                    bgcolor:
                      formData.schedulingProvider === provider
                        ? "primary.main"
                        : "white",
                    color:
                      formData.schedulingProvider === provider
                        ? "white"
                        : "text.primary",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    minWidth: "80px",
                    textAlign: "center",
                  }}
                >
                  {provider}
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </Box>

      <Box mt={1}>
        <Typography variant="body2" color="text.secondary">
          Scheduler Url
        </Typography>
        <TextField
          value={formData.schedulerUrl}
          onChange={(e) => handleInputChange("schedulerUrl", e.target.value)}
          fullWidth
          size="small"
          variant="outlined"
          placeholder="https://calendly.com/yourname"
          sx={{
            "& .MuiOutlinedInput-input": {
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
          value={formData.buttonText}
          onChange={(e) => handleInputChange("buttonText", e.target.value)}
          size="small"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-input": {
              padding: "8px 12px",
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
          value={formData.buttonType}
          onChange={(e) => handleInputChange("buttonType", e.target.value)}
        >
          {["Full", "Light", "Simple"].map((type) => (
            <FormControlLabel
              key={type}
              value={type}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    border: 1,
                    borderColor:
                      formData.buttonType === type
                        ? "primary.main"
                        : "grey.300",
                    borderRadius: 1,
                    bgcolor:
                      formData.buttonType === type ? "primary.main" : "white",
                    color:
                      formData.buttonType === type ? "white" : "text.primary",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    minWidth: "60px",
                    textAlign: "center",
                    m:0
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
          value={formData.buttonSize}
          onChange={(e) => handleInputChange("buttonSize", e.target.value)}
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
                      formData.buttonSize === size
                        ? "primary.main"
                        : "grey.300",
                    borderRadius: 1,
                    bgcolor:
                      formData.buttonSize === size ? "primary.main" : "white",
                    color:
                      formData.buttonSize === size ? "white" : "text.primary",
                    cursor: "pointer",
                    minWidth: "40px",
                    textAlign: "center",
                    m:0
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
          value={formData.buttonColor}
          onChange={(e) => handleInputChange("buttonColor", e.target.value)}
        >
          {COLORS.map((color) => (
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
                      backgroundColor: color === "#ffffff" ? "grey.200" : color,
                      border: 2,
                      borderColor:
                        formData.buttonColor === color
                          ? "primary.main"
                          : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      p: 0.25,
                      m:0
                    }}
                  >
                    <Box
                      sx={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        backgroundColor: color,
                        border: 1,
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
          value={formData.buttonIcon}
          onChange={(e) => handleInputChange("buttonIcon", e.target.value)}
        >
          {ICON_OPTIONS.map(({ value, Icon }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio sx={{ display: "none" }} />}
              label={
                <IconButton
                  component="span"
                  sx={{
                    border: 2,
                    fontSize: "small",
                    borderColor:
                      formData.buttonIcon === value
                        ? "primary.main"
                        : "grey.300",
                    backgroundColor:
                      formData.buttonIcon === value
                        ? "primary.light"
                        : "transparent",
                    p: 1,
                    color:
                      formData.buttonIcon === value ? "white" : "text.primary",
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor:
                        formData.buttonIcon === value
                          ? "primary.light"
                          : "grey.100",
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
          value={formData.buttonShape}
          onChange={(e) => handleInputChange("buttonShape", e.target.value)}
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
                      formData.buttonShape === shape
                        ? "primary.main"
                        : "grey.300",
                    borderRadius:
                      index === 0 ? 0 : index === 1 ? "4px" : "50px",
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
      saveText="Add"
      cancelText="Cancel"
      maxWidth="sm"
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
