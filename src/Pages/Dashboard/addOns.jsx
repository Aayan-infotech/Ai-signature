import React, { useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import {
  Description,
  FormatQuote,
  VideoLibrary,
  Instagram,
} from "@mui/icons-material";
import CollectionsIcon from "@mui/icons-material/Collections";
import SpaIcon from "@mui/icons-material/Spa";
import { Signature } from "lucide-react";
import StyledSigned from "../../component/Dialog/StyledSigned";
import DisclaimerDialog from "../../component/Dialog/DisclaimerDialog";
import AddQuoteDialog from "../../component/Dialog/QuoteDialog";
import YouTubeVideoDialog from "../../component/Dialog/VideoDialog";
import GreenFooterDialog from "../../component/Dialog/GreenFooter";
import ImageGalleryDialog from "../../component/Dialog/ImageGallery";
const AddOnCard = ({ title, icon: Icon, onClick, isPro }) => (
  <>
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
  const [openSignOff, setOpenSignOff] = useState(false);
  const [openDisclaimer, setOpenDisclaimer] = useState(false);
  const [openQuote, setOpenQuote] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [openGreenFooter, setOpenGreenFooter] = useState(false);
  const [openImageGallery, setOpenImageGallery] = useState(false);

  const handleOpen = (type) => {
    if (type === "signature") {
      setOpenSignOff(true);
    }

    if (type === "disclaimer") {
      setOpenDisclaimer(true);
    }

    if (type === "quote") {
      setOpenQuote(true);
    }

    if (type === "video") {
      setOpenVideo(true);
    }

    if (type === "greenFooter") {
      setOpenGreenFooter(true);
    }

    if (type === "imageGallery") {
      setOpenImageGallery(true);
    }

    // Add other modal handlers here for future implementations
  };

  const handleClose = (type) => {
    if (type === "signature") {
      setOpenSignOff(false);
    }

    if (type === "disclaimer") {
      setOpenDisclaimer(false);
    }
    if (type === "quote") {
      setOpenQuote(false);
    }

    if (type === "video") {
      setOpenVideo(false);
    }

    if (type === "greenFooter") {
      setOpenGreenFooter(false);
    }

    if (type === "imageGallery") {
      setOpenImageGallery(false);
    }
  };

  const handleSave = (formData) => {
    console.log("Saving sign off data:", formData);
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

      <StyledSigned
        open={openSignOff}
        onClose={() => handleClose("signature")}
        onSave={handleSave}
      />

      <DisclaimerDialog
        open={openDisclaimer}
        onClose={() => handleClose("disclaimer")}
        onSave={handleSave}
      />

      <AddQuoteDialog
        open={openQuote}
        onClose={() => handleClose("quote")}
        onSave={handleSave}
      />

      <YouTubeVideoDialog
        open={openVideo}
        onClose={() => handleClose("video")}
        onSave={handleSave}
      />

      <GreenFooterDialog
        open={openGreenFooter}
        onClose={() => handleClose("greenFooter")}
        onSave={handleSave}
      />

      <ImageGalleryDialog
        open={openImageGallery}
        onClose={() => handleClose("imageGallery")}
        onAdd={handleSave}
      />
    </>
  );
};

export default AddOn;
