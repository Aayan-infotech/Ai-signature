import React from "react";
import {
  Typography,
  Box,
  Badge,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  TextField,
  Slider,
  Button,
  ButtonGroup,
  Tabs,
  Tab,
  RadioGroup,
  FormControlLabel,
  Radio,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CropDinIcon from "@mui/icons-material/CropDin";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import AlignVerticalTopIcon from "@mui/icons-material/AlignVerticalTop";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import CallIcon from "@mui/icons-material/Call";
import { HorizontalRule } from "@mui/icons-material";
import CircleIcon from "@mui/icons-material/Circle";
import SquareIcon from "@mui/icons-material/Square";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Facebook } from "lucide-react";

export default function Design() {
  const [formValue, setFormValue] = React.useState({
    font: "Arial",
    color: "#45668E",
    fontSize: 13,
    lineSpacing: 1,
    nameFont: "Arial",
    nameColor: "#45668E",
    nameFontSize: 13,
    titleFont: "Arial",
    titleColor: "#646464",
    titleFontSize: 13,
    companyFont: "Arial",
    companyColor: "#45668E",
    companyFontSize: 13,
    detailsFont: "Arial",
    detailsColor: "#45668E",
    detailsSize: 13,
    shape: "left",
    size: "center",
    position: "left",
    label: "left",
    direction: "left",
    separator: "left",
    socialFill: "left",
    socialSize: 16,
    socialSpace: 8,
    socialColorMode: "web",
    socialCustomColor: "#1877F2",
  });

  const [tabValue, setTabValue] = React.useState(0);
  const [show, setShow] = React.useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleToggleChange = (name) => (event, newValue) => {
    if (newValue !== null) {
      setFormValue({
        ...formValue,
        [name]: newValue,
      });
    }
  };

  const handleSliderChange = (name) => (event, newValue) => {
    setFormValue({
      ...formValue,
      [name]: newValue,
    });
  };

  const handleNumberChange = (name) => (event) => {
    setFormValue({
      ...formValue,
      [name]: Number(event.target.value),
    });
  };

  const handleBooleanChange = (name) => (event) => {
    setFormValue({
      ...formValue,
      [name]: event.target.checked,
    });
  };

  // Common Tab Content Component
  const TabContent = ({ fontField, colorField, fontSizeField }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        flexDirection: "column",
        width: "100%",
        px: 2,
      }}
    >
      {/* Font Selection */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Font
        </Typography>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select
            value={formValue[fontField]}
            name={fontField}
            onChange={handleChange}
          >
            <MenuItem value={"Arial"}>Arial</MenuItem>
            <MenuItem value={"Verdana"}>Verdana</MenuItem>
            <MenuItem value={"Georgia"}>Georgia</MenuItem>
            <MenuItem value={"Palatino"}>Palatino</MenuItem>
            <MenuItem value={"Lucida Sans"}>Lucida Sans</MenuItem>
            <MenuItem value={"Times New Roman"}>Times New Roman</MenuItem>
            <MenuItem value={"Courier New"}>Courier New</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Color Selection */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Color
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="color"
            value={formValue[colorField]}
            onChange={(e) =>
              setFormValue({ ...formValue, [colorField]: e.target.value })
            }
          />
          <TextField
            size="small"
            value={formValue[colorField]}
            onChange={(e) =>
              setFormValue({ ...formValue, [colorField]: e.target.value })
            }
            sx={{ width: 100 }}
          />
        </Box>
      </Box>

      {/* Font Scale */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Font scale
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: 200 }}>
          <Slider
            value={formValue[fontSizeField]}
            onChange={handleSliderChange(fontSizeField)}
            min={8}
            max={24}
            step={1}
            sx={{ flex: 1 }}
          />
          <TextField
            size="small"
            value={formValue[fontSizeField]}
            onChange={handleNumberChange(fontSizeField)}
            inputProps={{
              min: 8,
              max: 24,
              type: "number",
            }}
            sx={{ width: 60 }}
          />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      {/* Style Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Style
        </Typography>
        <Badge
          badgeContent="Pro"
          color="primary"
          overlap="circular"
          sx={{ mr: 2 }}
        />
      </Box>

      <Box sx={{ mt: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Font
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="font-select-label">Font</InputLabel>
            <Select
              labelId="font-select-label"
              value={formValue.font}
              label="Font"
              name="font"
              onChange={handleChange}
            >
              <MenuItem value={"Arial"}>Arial</MenuItem>
              <MenuItem value={"Verdana"}>Verdana</MenuItem>
              <MenuItem value={"Georgia"}>Georgia</MenuItem>
              <MenuItem value={"Palatino"}>Palatino</MenuItem>
              <MenuItem value={"Lucida Sans"}>Lucida Sans</MenuItem>
              <MenuItem value={"Times New Roman"}>Times New Roman</MenuItem>
              <MenuItem value={"Courier New"}>Courier New</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Template Color
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="color"
              value={formValue.color}
              onChange={(e) =>
                setFormValue({ ...formValue, color: e.target.value })
              }
            />
            <TextField
              size="small"
              value={formValue.color}
              onChange={(e) =>
                setFormValue({ ...formValue, color: e.target.value })
              }
              sx={{ width: 100 }}
            />
          </Box>
        </Box>

        {/* Font Scale */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Font scale
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Slider
              value={formValue.fontSize}
              onChange={handleSliderChange("fontSize")}
              min={8}
              max={24}
              step={1}
              sx={{ flex: 1 }}
            />
            <TextField
              size="small"
              value={formValue.fontSize}
              onChange={handleNumberChange("fontSize")}
              inputProps={{
                min: 8,
                max: 24,
                type: "number",
              }}
              sx={{ width: 80 }}
            />
          </Box>
        </Box>

        {/* Line Spacing */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Line spacing
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Slider
              value={formValue.lineSpacing}
              onChange={handleSliderChange("lineSpacing")}
              min={0.8}
              max={3}
              step={0.1}
              sx={{ flex: 1 }}
            />
            <TextField
              size="small"
              value={formValue.lineSpacing}
              onChange={handleNumberChange("lineSpacing")}
              inputProps={{
                min: 0.8,
                max: 3,
                type: "number",
                step: 0.1,
              }}
              sx={{ width: 80 }}
            />
          </Box>
        </Box>

        {/* Hide section */}
        <Box sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Customize each detail individually
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ textAlign: "end", cursor: "pointer" }}
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "Show"}
          </Typography>
        </Box>

        {show && (
          <Box
            sx={{
              mb: 2,
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              orientation="vertical"
              variant="scrollable"
              sx={{ borderRight: 1, borderColor: "divider", minWidth: "100px" }}
            >
              <Tab label="Name" />
              <Tab label="Title" />
              <Tab label="Company" />
              <Tab label="Details" />
            </Tabs>

            {/* Tab Content - Now using the common component */}
            {tabValue === 0 && (
              <TabContent
                fontField="nameFont"
                colorField="nameColor"
                fontSizeField="nameFontSize"
              />
            )}

            {tabValue === 1 && (
              <TabContent
                fontField="titleFont"
                colorField="titleColor"
                fontSizeField="titleFontSize"
              />
            )}

            {tabValue === 2 && (
              <TabContent
                fontField="companyFont"
                colorField="companyColor"
                fontSizeField="companyFontSize"
              />
            )}

            {tabValue === 3 && (
              <TabContent
                fontField="detailsFont"
                colorField="detailsColor"
                fontSizeField="detailsSize"
              />
            )}
          </Box>
        )}
      </Box>

      <hr />

      {/* Images Section */}
      <Box sx={{ mt: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Images
          </Typography>
          <Badge
            badgeContent="Pro"
            color="primary"
            overlap="circular"
            sx={{ mr: 2 }}
          />
        </Box>

        {/* Shape */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Shape
          </Typography>
          <FormControl component="fieldset">
            <ToggleButtonGroup
              value={formValue.shape}
              exclusive
              onChange={handleToggleChange("shape")}
              aria-label="shape"
            >
              <ToggleButton value="left" aria-label="square">
                <CropSquareIcon />
              </ToggleButton>
              <ToggleButton value="center" aria-label="rounded">
                <CropDinIcon />
              </ToggleButton>
              <ToggleButton value="right" aria-label="circle">
                <PanoramaFishEyeIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </FormControl>
        </Box>

        {/* Size */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Size
          </Typography>
          <ToggleButtonGroup
            value={formValue.size}
            exclusive
            onChange={handleToggleChange("size")}
            aria-label="size"
          >
            <ToggleButton value="left" aria-label="small">
              <Typography sx={{ fontSize: "12px", mb: 0 }}>s</Typography>
            </ToggleButton>
            <ToggleButton value="center" aria-label="medium">
              <Typography sx={{ fontSize: "16px", mb: 0 }}>S</Typography>
            </ToggleButton>
            <ToggleButton value="right" aria-label="large">
              <Typography sx={{ fontSize: "20px", mb: 0 }}>S</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Position */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Position
          </Typography>
          <ToggleButtonGroup
            value={formValue.position}
            exclusive
            onChange={handleToggleChange("position")}
            aria-label="position"
          >
            <ToggleButton value="left" aria-label="left">
              <AlignHorizontalLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="right">
              <AlignHorizontalRightIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="top">
              <AlignVerticalTopIcon />
            </ToggleButton>
            <ToggleButton value="bottom" aria-label="bottom">
              <AlignVerticalBottomIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <hr />

      {/* Details Section */}
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Details
          </Typography>
          <Badge
            badgeContent="Pro"
            color="primary"
            overlap="circular"
            sx={{ mr: 2 }}
          />
        </Box>

        {/* Label */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Label
          </Typography>
          <ToggleButtonGroup
            value={formValue.label}
            exclusive
            onChange={handleToggleChange("label")}
            aria-label="label"
          >
            <ToggleButton value="left" aria-label="text">
              <Typography sx={{ color: "primary.main", mb: 0 }}>
                Phone
              </Typography>
            </ToggleButton>
            <ToggleButton value="center" aria-label="letter">
              <Typography sx={{ mb: 0 }}>P</Typography>
            </ToggleButton>
            <ToggleButton value="right" aria-label="icon">
              <CallIcon style={{ height: "20px" }} />
            </ToggleButton>
            <ToggleButton value="none" aria-label="none">
              <Typography sx={{ mb: 0 }}>None</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Direction */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Direction
          </Typography>
          <ToggleButtonGroup
            value={formValue.direction}
            exclusive
            onChange={handleToggleChange("direction")}
            aria-label="direction"
          >
            <ToggleButton value="left" aria-label="horizontal">
              <HorizontalRule style={{ height: "20px" }} />
            </ToggleButton>
            <ToggleButton value="center" aria-label="vertical">
              <HorizontalRule
                style={{ height: "20px", transform: "rotate(90deg)" }}
              />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Separator */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Separator
          </Typography>
          <ToggleButtonGroup
            value={formValue.separator}
            exclusive
            onChange={handleToggleChange("separator")}
            aria-label="separator"
          >
            <ToggleButton value="left" aria-label="line">
              <HorizontalRule
                style={{ height: "20px", transform: "rotate(90deg)" }}
              />
            </ToggleButton>
            <ToggleButton value="center" aria-label="circle">
              <CircleIcon style={{ height: "20px" }} />
            </ToggleButton>
            <ToggleButton value="right" aria-label="square">
              <SquareIcon style={{ height: "20px" }} />
            </ToggleButton>
            <ToggleButton value="none" aria-label="none">
              <Typography sx={{ mb: 0 }}>None</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <hr />

      {/* Social Icons Section */}
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Social Icons
          </Typography>
          <Badge
            badgeContent="Pro"
            color="primary"
            overlap="circular"
            sx={{ mr: 2 }}
          />
        </Box>

        {/* Fill */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Fill
          </Typography>
          <ToggleButtonGroup
            value={formValue.socialFill}
            exclusive
            onChange={handleToggleChange("socialFill")}
            aria-label="social fill"
          >
            <ToggleButton value="left" aria-label="filled">
              <FacebookIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="outlined">
              <Facebook style={{ border: "1px solid #212529" }} />
            </ToggleButton>
            <ToggleButton value="right" aria-label="plain">
              <Facebook />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Size */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Size
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2, width: 200 }}
          >
            <Slider
              value={formValue.socialSize}
              onChange={handleSliderChange("socialSize")}
              min={8}
              max={48}
              step={1}
              sx={{ flex: 1 }}
            />
            <TextField
              size="small"
              value={formValue.socialSize}
              onChange={handleNumberChange("socialSize")}
              inputProps={{
                min: 8,
                max: 48,
                type: "number",
              }}
              sx={{ width: 60 }}
            />
          </Box>
        </Box>

        {/* Space Between */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Space Between
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2, width: 200 }}
          >
            <Slider
              value={formValue.socialSpace}
              onChange={handleSliderChange("socialSpace")}
              min={0}
              max={32}
              step={1}
              sx={{ flex: 1 }}
            />
            <TextField
              size="small"
              value={formValue.socialSpace}
              onChange={handleNumberChange("socialSpace")}
              inputProps={{
                min: 0,
                max: 32,
                type: "number",
              }}
              sx={{ width: 60 }}
            />
          </Box>
        </Box>

        {/* Color */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Color
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={formValue.socialColorMode}
            exclusive
            onChange={handleToggleChange("socialColorMode")}
            aria-label="color mode"
          >
            <ToggleButton value="web">Original</ToggleButton>
            <ToggleButton value="android">Custom</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Custom Color Picker - Only show when Custom is selected */}
        {formValue.socialColorMode === "android" && (
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Custom Color
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="color"
                value={formValue.socialCustomColor}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    socialCustomColor: e.target.value,
                  })
                }
              />
              <TextField
                size="small"
                value={formValue.socialCustomColor}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    socialCustomColor: e.target.value,
                  })
                }
                sx={{ width: 100 }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
