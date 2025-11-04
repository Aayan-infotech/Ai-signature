import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import CustomDialog from "./CustomDialog";

const AddOnDialog = ({ open, onClose, type, onSave }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
  };

  const renderContent = () => {
    switch (type) {
      case "disclaimer":
        return (
          <TextField
            fullWidth
            multiline
            rows={4}
            name="disclaimer"
            label="Disclaimer Text"
            variant="outlined"
            onChange={handleInputChange}
            sx={{ mt: 2 }}
          />
        );
      case "quote":
        return (
          <>
            <TextField
              fullWidth
              multiline
              rows={3}
              name="quote"
              label="Quote"
              variant="outlined"
              onChange={handleInputChange}
              sx={{ mt: 2, mb: 2 }}
            />
            <TextField
              fullWidth
              name="author"
              label="Author"
              variant="outlined"
              onChange={handleInputChange}
            />
          </>
        );
      case "video":
        return (
          <TextField
            fullWidth
            name="videoUrl"
            label="Video URL"
            variant="outlined"
            onChange={handleInputChange}
            sx={{ mt: 2 }}
            helperText="Paste YouTube, Vimeo, or other video platform URL"
          />
        );
      case "greenFooter":
        return (
          <TextField
            fullWidth
            name="greenMessage"
            label="Green Footer Message"
            variant="outlined"
            onChange={handleInputChange}
            sx={{ mt: 2 }}
            helperText="Add an eco-friendly message to your signature"
          />
        );
      case "imageGallery":
        return (
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ height: 100 }}
            >
              Upload Images
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  setFormData({ ...formData, images: files });
                }}
              />
            </Button>
          </Box>
        );
      case "instagram":
        return (
          <TextField
            fullWidth
            name="instagramHandle"
            label="Instagram Handle"
            variant="outlined"
            onChange={handleInputChange}
            sx={{ mt: 2 }}
            helperText="Enter your Instagram username without @"
          />
        );
      default:
        return null;
    }
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title={`${type?.charAt(0).toUpperCase()}${type?.slice(1)} Settings`}
      onSave={handleSave}
    >
      {renderContent()}
    </CustomDialog>
  );
};

export default AddOnDialog;