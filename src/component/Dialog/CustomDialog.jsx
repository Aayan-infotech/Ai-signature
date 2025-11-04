import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomDialog = ({
  open,
  onClose,
  title,
  children,
  onSave,
  saveText = "Save",
  cancelText = "Cancel",
  maxWidth = "sm",
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelText}</Button>
        <Button variant="contained" onClick={onSave}>
          {saveText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;