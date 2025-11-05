import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Tabs,
  Tab,
  Box,
  TextField,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSketchCanvas } from "react-sketch-canvas";

const StyledSigned = ({ open, onClose, onSave }) => {
  const [tabValue, setTabValue] = useState("signature");
  const [signOffText, setSignOffText] = useState("Kind regards,");
  const [signAs, setSignAs] = useState("Daksh Kumar");
  const [fontStyle, setFontStyle] = useState("cursive");
  const [size, setSize] = useState(50);
  const [alignment, setAlignment] = useState("left");
  const [color, setColor] = useState("#000000");
  const canvasRef = useRef(null);

  const handleSave = async () => {
    let imageData = null;
    if (tabValue === "custom" && canvasRef.current) {
      imageData = await canvasRef.current.exportImage("png");
    }

    onSave?.({
      tabValue,
      signOffText,
      signAs,
      fontStyle,
      size,
      alignment,
      imageData,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Style Your Signature
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ bgcolor: "#fafafa" }}>
        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          sx={{ mb: 3 }}
          centered
        >
          <Tab label="Signature" value="signature" />
          <Tab label="Signoff" value="signoff" />
          <Tab label="Custom" value="custom" />
        </Tabs>

        {/* Signature Tab */}
        {tabValue === "signature" && (
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Sign Off
            </Typography>
            <TextField
              fullWidth
              select
              value={signOffText}
              onChange={(e) => setSignOffText(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value="Kind regards,">Kind regards,</MenuItem>
              <MenuItem value="Best wishes,">Best wishes,</MenuItem>
              <MenuItem value="Sincerely,">Sincerely,</MenuItem>
              <MenuItem value="Warm regards,">Warm regards,</MenuItem>
            </TextField>

            <Typography variant="subtitle1" gutterBottom>
              Sign As
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your name"
              value={signAs}
              onChange={(e) => setSignAs(e.target.value)}
              sx={{ mb: 2 }}
            />

            <Typography variant="subtitle1" gutterBottom>
              Font Style
            </Typography>
            <TextField
              fullWidth
              select
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
            >
              <MenuItem value="cursive">Cursive</MenuItem>
              <MenuItem value="handwritten">Handwritten</MenuItem>
              <MenuItem value="formal">Formal</MenuItem>
              <MenuItem value="modern">Modern</MenuItem>
            </TextField>
          </Box>
        )}

        {/* Signoff Tab */}
        {tabValue === "signoff" && (
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Signoff
            </Typography>
            <TextField
              fullWidth
              select
              value={signOffText}
              onChange={(e) => setSignOffText(e.target.value)}
              sx={{ mb: 3 }}
            >
              <MenuItem value="Kind regards,">Kind regards,</MenuItem>
              <MenuItem value="Best,">Best,</MenuItem>
              <MenuItem value="Thanks,">Thanks,</MenuItem>
              <MenuItem value="Yours truly,">Yours truly,</MenuItem>
            </TextField>

            <Typography variant="subtitle1" gutterBottom>
              Font
            </Typography>
            <TextField
              fullWidth
              select
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
            >
              <MenuItem value="cursive">Cursive</MenuItem>
              <MenuItem value="handwritten">Handwritten</MenuItem>
              <MenuItem value="formal">Formal</MenuItem>
              <MenuItem value="modern">Modern</MenuItem>
            </TextField>
          </Box>
        )}

        {/* Custom Draw Tab */}
        {tabValue === "custom" && (
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Create a Custom Signature
            </Typography>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: 2,
                height: 200,
                mb: 2,
              }}
            >
              <ReactSketchCanvas
                ref={canvasRef}
                strokeWidth={2}
                strokeColor={color}
                style={{ borderRadius: "8px", height: "100%" }}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {[
                "#000000",
                "#1976d2",
                "#d32f2f",
                "#388e3c",
                "#f57c00",
                "#9c27b0",
              ].map((clr) => (
                <Box
                  key={clr}
                  onClick={() => setColor(clr)}
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    bgcolor: clr,
                    border:
                      color === clr
                        ? "2px solid #000"
                        : "2px solid transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
            <Button
              onClick={() => canvasRef.current?.clearCanvas()}
              size="small"
              variant="outlined"
              sx={{ mr: 1 }}
            >
              Clear
            </Button>
            <Button
              onClick={() => canvasRef.current?.undo()}
              size="small"
              variant="outlined"
            >
              Undo
            </Button>
          </Box>
        )}

        {/* Common Controls */}
        <Box sx={{ mt: 3, p: 2, borderTop: "1px solid #eee" }}>
          <Typography variant="subtitle1" gutterBottom>
            Size
          </Typography>
          <Slider
            value={size}
            onChange={(e, val) => setSize(val)}
            min={20}
            max={100}
            sx={{ mb: 2 }}
          />

          <Typography variant="subtitle1" gutterBottom>
            Alignment
          </Typography>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={(e, val) => setAlignment(val)}
          >
            <ToggleButton value="left">Left</ToggleButton>
            <ToggleButton value="center">Center</ToggleButton>
            <ToggleButton value="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StyledSigned;
