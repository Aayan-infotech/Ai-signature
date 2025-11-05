import React, { useState, useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is accessible

/**
 * Renders the Upload My Banner form content.
 * This component simulates the drag-and-drop file upload area.
 */
const UploadMyBannerModal = ({ open, onClose }) => {
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // --- Handlers for Drag and Drop ---
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log("File dropped:", uploadedFile.name);
    }
  };

  // --- Handler for file input button ---
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log("File selected:", uploadedFile.name);
    }
  };

  const handleSave = () => {
    if (file) {
      console.log("Uploading and saving banner:", file.name);
      // In a real application, you would perform the upload API call here.
    } else {
      console.log("No file to upload.");
    }
    onClose();
  };

  // --- Rendering the Drag & Drop Area ---
  const renderDropzone = () => (
    <Box
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      sx={{
        border: isDragOver ? "2px solid #007bff" : "2px dashed #ccc",
        p: 6,
        textAlign: "center",
        borderRadius: 1,
        transition: "border 0.3s",
        backgroundColor: isDragOver ? "#f0f8ff" : "white",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Drag & Drop your banner here
      </Typography>
      <Typography variant="body1" mb={2}>
        Or
      </Typography>

      {/* Hidden File Input */}
      <input
        accept=".jpg,.png,.gif"
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={handleFileChange}
      />

      {/* Custom Styled Upload Button */}
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span" // Makes the Button trigger the file input
          startIcon={<CloudUploadIcon />}
          sx={{
            bgcolor: "#007bff", // Custom blue color to match the image
            "&:hover": {
              bgcolor: "#0056b3",
            },
          }}
        >
          Choose file to upload
        </Button>
      </label>

      {/* Display selected file name */}
      {file && (
        <Typography variant="body2" color="success.main" mt={2}>
          File selected: **{file.name}**
        </Typography>
      )}
    </Box>
  );

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Upload my banner"
      onSave={handleSave}
      saveText="Add"
      cancelText="Cancel"
      maxWidth="sm"
    >
      <Box>
        <Typography variant="body1" gutterBottom>
          **Upload your banner (JPG, PNG, GIF)**
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          For best image quality, we recommend to use up to **520px width**
        </Typography>
      </Box>

      {renderDropzone()}
    </CustomDialog>
  );
};

export default UploadMyBannerModal;
