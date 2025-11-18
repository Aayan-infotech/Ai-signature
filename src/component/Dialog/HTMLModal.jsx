import React, { useState, useEffect } from "react";
import CustomDialog from "./CustomDialog";
import {
  TextField,
  Box,
  Typography,
  Alert,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ContentCopy, Check, Warning, Info } from "@mui/icons-material";

const CustomHtmlModal = ({ open, onClose, onSave, initialData }) => {
  // Default data structure
  const defaultData = {
    enabled: true,
    htmlCode:
      '<!-- Enter your HTML code here -->\n<div style="padding: 10px; border: 1px solid #ccc; background: #f9f9f9;">\n  <p>Your custom content here</p>\n</div>',
  };

  // State for the HTML code input
  const [formData, setFormData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);

  // Initialize with initialData when modal opens
  useEffect(() => {
    if (open) {
      setFormData(defaultData);
      setErrors({});
      setCopied(false);
    }
  }, [open, initialData]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.htmlCode?.trim()) {
      newErrors.htmlCode = "HTML code is required";
    } else if (
      formData.htmlCode.trim() ===
      '<!-- Enter your HTML code here -->\n<div style="padding: 10px; border: 1px solid #ccc; background: #f9f9f9;">\n  <p>Your custom content here</p>\n</div>'
    ) {
      newErrors.htmlCode = "Please provide your custom HTML code";
    }

    // Basic HTML validation
    if (formData.htmlCode && formData.htmlCode.includes("<script")) {
      newErrors.htmlCode =
        "Script tags are not allowed for email compatibility";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData, "html");
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(formData.htmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const hasValidHtml =
    formData.htmlCode &&
    formData.htmlCode !==
      '<!-- Enter your HTML code here -->\n<div style="padding: 10px; border: 1px solid #ccc; background: #f9f9f9;">\n  <p>Your custom content here</p>\n</div>';

  // Preview the HTML safely
  const renderPreview = () => {
    if (!hasValidHtml) return null;

    return (
      <Box
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 1,
          p: 2,
          mt: 2,
          backgroundColor: "#fafafa",
          minHeight: "100px",
          maxHeight: "200px",
          overflow: "auto",
        }}
        dangerouslySetInnerHTML={{ __html: formData.htmlCode }}
      />
    );
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Use Custom HTML"
      onSave={handleSave}
      saveText="Add"
      maxWidth="lg"
      fullWidth
    >
      <Box sx={{ p: 2 }}>
        <Alert severity="warning" sx={{ mb: 3 }} icon={<Warning />}>
          <Typography variant="body2" fontWeight="bold">
            Email Client Compatibility Notice
          </Typography>
          <Typography variant="caption" sx={{ display: "block", mt: 0.5 }}>
            Many email clients strip or block dynamic content. Use only static
            HTML and inline CSS for best compatibility.
          </Typography>
        </Alert>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Custom HTML Code
          </Typography>

          <Tooltip title={copied ? "Copied!" : "Copy HTML code"}>
            <IconButton
              size="small"
              onClick={handleCopyCode}
              color={copied ? "success" : "default"}
            >
              {copied ? <Check /> : <ContentCopy />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* HTML Code Text Area */}
        <TextField
          multiline
          rows={12}
          fullWidth
          margin="normal"
          placeholder="Enter your HTML code here..."
          value={formData.htmlCode}
          onChange={(e) => handleInputChange("htmlCode", e.target.value)}
          error={!!errors.htmlCode}
          helperText={
            errors.htmlCode ||
            "Enter valid HTML code. Script tags and dynamic content may not work in email clients."
          }
          sx={{
            mb: 2,
            "& .MuiInputBase-root": {
              fontFamily: "monospace",
              fontSize: "0.875rem",
            },
          }}
        />

        {/* Best Practices Info */}
        <Alert severity="info" sx={{ mb: 3 }} icon={<Info />}>
          <Typography variant="body2" fontWeight="bold" gutterBottom>
            Best Practices for Email HTML:
          </Typography>
          <Box
            component="ul"
            sx={{ m: 0, pl: 2, "& li": { fontSize: "0.75rem", mb: 0.5 } }}
          >
            <li>Use inline CSS styles only</li>
            <li>Avoid JavaScript and dynamic content</li>
            <li>Use table-based layouts for better compatibility</li>
            <li>Keep images under 200KB and host them externally</li>
            <li>Test in multiple email clients</li>
          </Box>
        </Alert>

        {/* Preview Section */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Live Preview:
          </Typography>

          {hasValidHtml ? (
            <Box>
              {renderPreview()}
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 1, display: "block" }}
              >
                This is how your HTML will appear in the signature. Actual
                rendering may vary in different email clients.
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                border: "1px dashed #e0e0e0",
                borderRadius: 1,
                p: 4,
                textAlign: "center",
                backgroundColor: "#fafafa",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Preview will appear here once you add valid HTML code
              </Typography>
            </Box>
          )}
        </Box>

        {/* Compatibility Warning */}
        <Alert severity="error" sx={{ mt: 3 }} icon={<Warning />}>
          <Typography variant="caption">
            <strong>Warning:</strong> Some email clients (especially Outlook,
            Gmail) have strict HTML/CSS support. Complex layouts may not render
            correctly. Always test before sending.
          </Typography>
        </Alert>
      </Box>
    </CustomDialog>
  );
};

export default CustomHtmlModal;
