import React, { useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import AddOnDialog from "../../component/Dialog/AddOnDialog";
import {
  Description,
  FormatQuote,
  VideoLibrary,
  Instagram,
} from "@mui/icons-material";
import CollectionsIcon from "@mui/icons-material/Collections";
import SpaIcon from "@mui/icons-material/Spa";
import { Signature } from "lucide-react";
const AddOnCard = ({ title, icon: Icon, onClick, isPro }) => (
  <>
    {/* <Card
      sx={{
        cursor: "pointer",
        height: "100%",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      onClick={onClick}
    >
      <CardContent sx={{ textAlign: "center", p: 3 }}>
        <Icon sx={{ fontSize: 40, mb: 2, color: "primary.main" }} />
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card> */}
    <Box
      className="d-flex align-items-center justify-content-between p-3"
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        backgroundColor: "#fafafa",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          borderColor: "#ccc",
        },
      }}
    >
      {/* Left side - Icon and Platform Info */}
      <Box
        className="d-flex align-items-center gap-3 flex-grow-1"
        onClick={onClick}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #e0e0e0",
            flexShrink: 0,
          }}
        >
          <Icon size={20} color="#666" />
        </Box>

        <Box className="flex-grow-1">
          <Typography
            variant="body1"
            className="fw-normal text-secondary mb-1"
            sx={{ fontSize: "0.9rem" }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      {isPro && (
        <Typography variant="body1" className="fw-bold text-primary">
          Pro
        </Typography>
      )}
    </Box>
  </>
);

const AddOn = () => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalType(null);
  };

  const handleSave = (formData) => {
    console.log("Saving data:", { type: modalType, data: formData });
    // Here you can implement the save functionality
    // For example, dispatch to redux store or make an API call
    handleClose();
  };

  const addOns = [
    { title: "Styled Signed Off", icon: Signature, type: "signature" },
    { title: "Disclaimer", icon: Description, type: "disclaimer" },
    { title: "Quote", icon: FormatQuote, type: "quote" },
    { title: "Video", icon: VideoLibrary, type: "video", isPro: true },
    { title: "Green Footer", icon: SpaIcon, type: "greenFooter" },
    { title: "Image Gallery", icon: CollectionsIcon, type: "imageGallery" },
    {
      title: "Instagram Gallery",
      icon: Instagram,
      type: "instagram",
      isPro: true,
    },
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        Additional Enhancements
      </Typography>
      <Box className="d-flex flex-column gap-3">
        {addOns.map((addon) => (
          <Grid item xs={12} sm={6} md={4} key={addon.type}>
            <AddOnCard
              title={addon.title}
              icon={addon.icon}
              isPro={addon.isPro}
              onClick={() => handleOpen(addon.type)}
            />
          </Grid>
        ))}
      </Box>

      <AddOnDialog
        open={open}
        onClose={handleClose}
        type={modalType}
        onSave={handleSave}
      />
    </>
  );
};

export default AddOn;
