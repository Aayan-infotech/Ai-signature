import React, { useState, useCallback } from "react";
import { Typography, Box, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CustomDialog from "./CustomDialog";
import { useSignature } from "../../hooks/useSignature";

/**
 * Renders the Upload My Banner form content.
 * This component simulates the drag-and-drop file upload area.
 */
const UploadMyBannerModal = ({ open, onClose }) => {
  const { uploadBanner, updateUploadBanner } = useSignature();

  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [bannerLink, setBannerLink] = useState(uploadBanner.link || "");
  const [bannerSize, setBannerSize] = useState(uploadBanner.size || "M");

  // File validation function
  const validateFile = useCallback((file) => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      alert("Please select a valid image file (JPG, PNG, GIF)");
      return false;
    }

    if (file.size > maxSize) {
      alert("File size should be less than 5MB");
      return false;
    }

    return true;
  }, []);

  // Handle file selection
  const handleFileSelect = useCallback((selectedFile) => {
    if (selectedFile) {
      // Create object URL for preview
      const objectUrl = URL.createObjectURL(selectedFile);
      setFile({
        file: selectedFile,
        previewUrl: objectUrl,
        name: selectedFile.name,
      });
      console.log("File selected:", selectedFile.name);
    }
  }, []);

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
    if (uploadedFile && validateFile(uploadedFile)) {
      handleFileSelect(uploadedFile);
    }
  };

  // --- Handler for file input button ---
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && validateFile(uploadedFile)) {
      handleFileSelect(uploadedFile);
    }
  };

  const handleSave = () => {
    if (file) {
      // In a real application, you would upload the file to your server here
      // For now, we'll use the object URL as the imageUrl
      const uploadBannerData = {
        enabled: true,
        imageUrl: file.previewUrl, // Use object URL for preview
        link: bannerLink,
        size: bannerSize,
        fileName: file.name,
      };

      console.log("Saving uploaded banner:", uploadBannerData);
      updateUploadBanner(uploadBannerData);
      onClose();
    } else {
      console.log("No file to upload.");
      // You might want to show an error message to the user
    }
  };

  // Clean up object URLs when component unmounts
  React.useEffect(() => {
    return () => {
      if (file && file.previewUrl) {
        URL.revokeObjectURL(file.previewUrl);
      }
    };
  }, [file]);

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
        cursor: "pointer",
      }}
      onClick={() => document.getElementById("contained-button-file").click()}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Drag & Drop your banner here
      </Typography>
      <Typography variant="body1" mb={2}>
        Or
      </Typography>

      {/* Hidden File Input */}
      <input
        accept=".jpg,.jpeg,.png,.gif"
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={handleFileChange}
      />

      {/* Custom Styled Upload Button */}
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
          sx={{
            bgcolor: "#007bff",
            "&:hover": {
              bgcolor: "#0056b3",
            },
          }}
          onClick={(e) => e.stopPropagation()} // Prevent triggering the box click
        >
          Choose file to upload
        </Button>
      </label>

      {/* Display selected file name and preview */}
      {file && (
        <Box mt={2}>
          <Typography variant="body2" color="success.main">
            File selected: <strong>{file.name}</strong>
          </Typography>
          {file.previewUrl && (
            <Box mt={1}>
              <img
                src={file.previewUrl}
                alt="Banner preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );

  // Banner link and size options
  const renderBannerOptions = () => (
    <Box mt={3}>
      <Typography variant="body2" color="text.secondary" mb={1}>
        Banner links to (optional):
      </Typography>
      <input
        type="text"
        value={bannerLink}
        onChange={(e) => setBannerLink(e.target.value)}
        placeholder="https://"
        style={{
          width: "100%",
          padding: "8px 12px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          fontSize: "14px",
        }}
        className="bg-light"
      />

      <Typography variant="body2" color="text.secondary" mt={2} mb={1}>
        Banner size:
      </Typography>
      <Box display="flex" gap={1}>
        {["S", "M", "L"].map((size) => (
          <Button
            key={size}
            variant={bannerSize === size ? "contained" : "outlined"}
            onClick={() => setBannerSize(size)}
            sx={{
              minWidth: "40px",
              fontSize: "12px",
            }}
          >
            {size}
          </Button>
        ))}
      </Box>
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
      disableSave={!file} // Disable save if no file selected
    >
      <Box>
        <Typography variant="body1" gutterBottom>
          <strong>Upload your banner (JPG, PNG, GIF)</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          For best image quality, we recommend to use up to{" "}
          <strong>520px width</strong>
        </Typography>
      </Box>

      {renderDropzone()}
      {renderBannerOptions()}
    </CustomDialog>
  );
};

export default UploadMyBannerModal;
