import React, { useState } from "react";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is imported correctly
import {
  TextField,
  Box,
  Typography,
} from "@mui/material";

// Utility function to simulate data saving
const handleSaveHtmlData = (data) => {
  console.log("Custom HTML Data to be saved:", data);
  alert("Simulated Save Custom HTML! Check the console for data.");
};

const CustomHtmlModal = ({ open, onClose }) => {
  // State for the HTML code input
  const [htmlCode, setHtmlCode] = useState("Enter your HTML code here");

  const handleSave = () => {
    const data = {
      htmlCode: htmlCode,
      // No style data needed for this component
    };
    handleSaveHtmlData(data);
    onClose();
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Use custom HTML" // Modal title
      onSave={handleSave} 
      saveText="Add" // Button text as per the image
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Enter your custom HTML
        </Typography>

        {/* Large Text Area for HTML Code */}
        <TextField
          multiline
          rows={10} // Makes the text area tall
          fullWidth
          margin="normal"
          placeholder="Enter your HTML code here"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Warning/Static Code Note */}
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
          **\*** Use only **static HTML code**, as email clients 
          will strip down any dynamic code from your signature.
        </Typography>
      </Box>
    </CustomDialog>
  );
};

export default CustomHtmlModal;