import React, { useState, useCallback, useContext, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Typography,
  TextField,
  Slider,
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Switch,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SignatureContext from "../../context/SignatureContext";

const ImageGalleryDialog = ({ open, onClose, onSave }) => {
  const { imageGallery, updateImageGallery } = useContext(SignatureContext);

  const [formData, setFormData] = useState({
    images: [],
    galleryTitle: "",
    imageSize: 50,
    spaceBetween: 20,
    shape: "square",
    applyLink: true,
    link: "",
  });

  // Initialize form with existing data when dialog opens
  useEffect(() => {
    if (open && imageGallery) {
      setFormData({
        images: imageGallery.images || [],
        galleryTitle: imageGallery.galleryTitle || "",
        imageSize: imageGallery.imageSize || 50,
        spaceBetween: imageGallery.spaceBetween || 20,
        shape: imageGallery.shape || "square",
        applyLink: imageGallery.applyLink !== false,
        link: imageGallery.link || "",
      });
    }
  }, [open, imageGallery]);

  const handleImageUpload = useCallback((e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...fileURLs].slice(0, 5), // max 5 images
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      images: [],
      galleryTitle: "",
      imageSize: 50,
      spaceBetween: 20,
      shape: "square",
      applyLink: true,
      link: "",
    });
  }, []);

  const handleSave = useCallback(() => {
    // Call the context update function
    updateImageGallery(formData);

    // Also call the onSave prop for backward compatibility
    if (onSave) {
      onSave(formData, "imageGallery");
    }

    onClose();
    resetForm();
  }, [formData, updateImageGallery, onSave, onClose, resetForm]);

  const handleShapeChange = useCallback((event, newShape) => {
    if (newShape !== null) {
      setFormData((prev) => ({ ...prev, shape: newShape }));
    }
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    resetForm();
  }, [onClose, resetForm]);

  const handleImageSizeChange = useCallback((event, newValue) => {
    setFormData((prev) => ({ ...prev, imageSize: newValue }));
  }, []);

  const handleSpaceBetweenChange = useCallback((event, newValue) => {
    setFormData((prev) => ({ ...prev, spaceBetween: newValue }));
  }, []);

  const handleGalleryTitleChange = useCallback((event) => {
    setFormData((prev) => ({ ...prev, galleryTitle: event.target.value }));
  }, []);

  const handleLinkChange = useCallback((event) => {
    setFormData((prev) => ({ ...prev, link: event.target.value }));
  }, []);

  const handleApplyLinkChange = useCallback((event) => {
    setFormData((prev) => ({ ...prev, applyLink: event.target.checked }));
  }, []);

  const getBorderRadius = useCallback(() => {
    if (formData.shape === "circle") return "50%";
    if (formData.shape === "rounded") return "10px";
    return "0";
  }, [formData.shape]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>
        Image gallery
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {/* Upload Images */}
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
          Add your images
        </Typography>
        <Stack direction="row" spacing={1} mb={3} flexWrap="wrap">
          {/* Upload Button */}
          <label
            htmlFor="image-upload"
            style={{
              width: 70,
              height: 70,
              border: "2px dashed #ccc",
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <AddPhotoAlternateIcon color="primary" />
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />

          {/* Preview Images */}
          {formData.images.map((img, idx) => (
            <Box
              key={idx}
              sx={{
                width: 70,
                height: 70,
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid #ddd",
              }}
            >
              <img
                src={img}
                alt={`preview-${idx}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: getBorderRadius(),
                }}
              />
            </Box>
          ))}
        </Stack>

        {/* Gallery Title */}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Gallery title (Optional)
        </Typography>
        <TextField
          fullWidth
          placeholder="Your Gallery Title"
          value={formData.galleryTitle}
          onChange={handleGalleryTitleChange}
          variant="outlined"
          size="small"
          sx={{ mb: 3 }}
        />

        {/* Image Size */}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Images size
        </Typography>
        <Slider
          value={formData.imageSize}
          onChange={handleImageSizeChange}
          min={20}
          max={100}
          valueLabelDisplay="auto"
          sx={{ mb: 3 }}
        />

        {/* Space Between */}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Space between
        </Typography>
        <Slider
          value={formData.spaceBetween}
          onChange={handleSpaceBetweenChange}
          min={0}
          max={50}
          valueLabelDisplay="auto"
          sx={{ mb: 3 }}
        />

        {/* Shape */}
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Shape
        </Typography>
        <ToggleButtonGroup
          value={formData.shape}
          exclusive
          onChange={handleShapeChange}
          sx={{ mb: 3 }}
        >
          <ToggleButton value="square">
            <Box
              sx={{
                width: 24,
                height: 24,
                border: "2px solid #000",
              }}
            />
          </ToggleButton>
          <ToggleButton value="rounded">
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: 1,
                border: "2px solid #000",
              }}
            />
          </ToggleButton>
          <ToggleButton value="circle">
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: "2px solid #000",
              }}
            />
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Apply Link Toggle */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Typography variant="body2">Apply link to all images</Typography>
          <Switch
            checked={formData.applyLink}
            onChange={handleApplyLinkChange}
            color="primary"
          />
        </Stack>

        {/* Link Input */}
        {formData.applyLink && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <TextField
              fullWidth
              placeholder="Your Link Here"
              value={formData.link}
              onChange={handleLinkChange}
              variant="outlined"
              size="small"
            />
            <Link
              href={formData.link || "#"}
              target="_blank"
              rel="noopener"
              underline="hover"
              sx={{ whiteSpace: "nowrap" }}
            >
              Test link
            </Link>
          </Stack>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={formData.images.length === 0}
        >
          {imageGallery?.images?.length ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageGalleryDialog;
