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
} from "@mui/material";

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
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Free Template
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
          <Typography variant="p" color="text.secondary" gutterBottom>
            Font
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Font</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={formValue.font}
              label="Font"
              name="font"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
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
          <Typography variant="p" color="text.secondary" gutterBottom>
            Customize each detail individually
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ textAlign: "end", cursor: "pointer" }}
            onClick={() => setShow(!show)}
          >
            Hide
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
              className="button-tab-detail"
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
    </>
  );
}
