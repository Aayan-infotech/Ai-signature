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
  Grid,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddQuoteDialog = ({ open, onClose, onAdd }) => {
  const [category, setCategory] = useState("success");
  const [color, setColor] = useState("#4a4a4a");
  const [fontSize, setFontSize] = useState(14);
  const [alignment, setAlignment] = useState("left");

  const handleAdd = () => {
    onAdd({
      category,
      color,
      fontSize,
      alignment,
    });
    onClose();
  };

  const categories = [
    "Success",
    "Motivational",
    "William Shakespeare",
    "Science",
    "Finance",
    "Random",
    "Funny",
    "Positive",
    "Friendship",
    "Business",
    "Albert Einstein",
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
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        Add a quote
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {/* Choose category */}
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
            Choose a category
          </Typography>

          <Grid container spacing={1}>
            {categories.map((cat) => (
              <Grid item xs={6} key={cat}>
                <FormControlLabel
                  value={cat.toLowerCase().replace(/\s+/g, "_")}
                  control={
                    <Radio
                      checked={
                        category === cat.toLowerCase().replace(/\s+/g, "_")
                      }
                    />
                  }
                  onChange={() =>
                    setCategory(cat.toLowerCase().replace(/\s+/g, "_"))
                  }
                  label={cat}
                />
              </Grid>
            ))}

            <Grid item xs={6} display="flex" alignItems="center" gap={1}>
              <FormControlLabel
                value="my_own_quotes"
                control={
                  <Radio
                    checked={category === "my_own_quotes"}
                    onChange={() => setCategory("my_own_quotes")}
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
                  c === color ? "2px solid black" : "2px solid transparent",
              }}
              onClick={() => setColor(c)}
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
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Box>
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

        {/* Alignment */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          Alignment
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

export default AddQuoteDialog;
