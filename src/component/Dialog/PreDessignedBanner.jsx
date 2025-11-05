import React, { useState } from "react";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Box,
  Stack,
  Divider,
  Button,
} from "@mui/material";
// Importing icons to match the image categories
import StarIcon from "@mui/icons-material/Star";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import EventIcon from "@mui/icons-material/Event";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import CustomDialog from "./CustomDialog"; // Assuming CustomDialog is accessible

// --- Navigation Data ---
const CATEGORIES = [
  { name: "Featured", icon: StarIcon, subcategories: [] },
  { name: "Holidays & Events", icon: EventIcon, subcategories: [
     "Valentine's Day",
      "Easter",
      "Halloween",
      "Thanksgiving",
      "Christmas",
      "New Year's Day",
      "Mother's Day",
      "Father's Day",
  ] },
  {
    name: "Sale & Marketing",
    icon: LocalOfferIcon,
    subcategories: [
      "Black Friday",
      "Cyber Monday",
      "ECOMMERCE",
      "Dicount",
      "Sale",
    ],
  },
  { name: "Social", icon: PeopleIcon, subcategories: [] },
  {
    name: "Profession",
    icon: WorkIcon,
    subcategories: [
      "Lawyer",
      "Doctor",
      "Engineer",
      "Architect",
      "Teacher",
      "Designer",
      "Developer",
      "Accountant",
      "Dentist",
      "Chef",
      "Architect",
      "Teacher",
    ],
  },
  {
    name: "Community",
    icon: GroupsIcon,
    subcategories: [
      "Ukraine Support",
      "Israel Support",
      "LGBT",
      "BLM",
      "Environment",
    ],
  },
  { name: "Support", icon: PublicIcon, subcategories: [] },
];

// Dummy data for banner previews (using placeholder text/colors)
const BANNER_PREVIEWS = [
  {
    text: "Happy Pride Month!",
    color: "linear-gradient(to right, #f66, #ff9, #6f6, #69f, #96f)",
  },
  {
    text: "JUNE Pride Month",
    color: "linear-gradient(to right, #ff7e5f, #feb47b)",
  },
  {
    text: "11th Oct National Coming Out Day",
    color: "linear-gradient(to right, #ff4e50, #f9d423)",
  },
  {
    text: "LGBT Pride Month THIS JUNE",
    color: "linear-gradient(to right, #40e0d0, #ff8c00)",
  },
  { text: "LGBTQ Friendly Business", color: "#E91E63" },
];

/**
 * Renders the Predesigned Banners form content.
 */
const PredesignedBanners = ({ open, onClose }) => {
  // --- State Management ---
  const [selectedCategory, setSelectedCategory] = useState("Community"); // Matches the image's context
  const [selectedSubcategory, setSelectedSubcategory] = useState("LGBT"); // Matches the image
  const [selectedBannerSize, setSelectedBannerSize] = useState("M"); // Matches the image
  const [bannerLink, setBannerLink] = useState("");

  // --- Handlers ---
  const handleSave = () => {
    console.log("Saving banner settings:", {
      category: selectedCategory,
      subcategory: selectedSubcategory,
      size: selectedBannerSize,
      link: bannerLink,
    });
    onClose();
  };

  // --- Rendering Functions ---

  const renderSidebar = () => (
    <Box width={200} pr={2}>
      <Stack spacing={1}>
        {CATEGORIES.map((cat) => (
          <Box key={cat.name}>
            <Button
              startIcon={<cat.icon />}
              onClick={() => setSelectedCategory(cat.name)}
              sx={{
                justifyContent: "flex-start",
                color:
                  selectedCategory === cat.name
                    ? "primary.main"
                    : "text.primary",
                fontWeight: selectedCategory === cat.name ? "bold" : "normal",
                textTransform: "none",
                py: 0.5,
                px: 0,
              }}
            >
              {cat.name}
            </Button>
            {/* Render Subcategories */}
            {selectedCategory === cat.name && cat.subcategories.length > 0 && (
              <Stack pl={2}>
                {cat.subcategories.map((sub) => (
                  <Button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    sx={{
                      justifyContent: "flex-start",
                      fontSize: "0.875rem",
                      color:
                        selectedSubcategory === sub
                          ? "primary.main"
                          : "text.secondary",
                      textTransform: "none",
                      py: 0,
                      px: 0,
                    }}
                  >
                    {sub}
                  </Button>
                ))}
              </Stack>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );

  const renderBannerPreviews = () => (
    <Box flexGrow={1}>
      {/* Scrollable area for banners, mimicking the image layout */}
      <Stack spacing={2}>
        {BANNER_PREVIEWS.map((banner, index) => (
          <Box
            key={index}
            sx={{
              height: index < BANNER_PREVIEWS.length - 1 ? 50 : 70, // Varied height to match the image feel
              background: banner.color,
              borderRadius: 1,
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              border: "2px solid transparent",
              "&:hover": {
                borderColor: "primary.main",
              },
            }}
          >
            {/* Content is simplified; in a real app, this would be an actual image */}
            <Typography
              variant="h6"
              color="white"
              sx={{ textShadow: "0px 1px 3px rgba(0,0,0,0.5)" }}
            >
              {banner.text}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );

  const renderSizeAndLinkOptions = () => (
    <Box>
      <Typography variant="h6" fontWeight="bold" mt={2} mb={1}>
        Choose size and link
      </Typography>
      <Box display="flex" alignItems="center" gap={3}>
        {/* Banner Size Radios */}
        <Box>
          <Typography variant="body2" color="text.secondary" mb={0.5}>
            Banner size
          </Typography>
          <RadioGroup
            row
            value={selectedBannerSize}
            onChange={(e) => setSelectedBannerSize(e.target.value)}
          >
            {["S", "M", "L"].map((size) => (
              <FormControlLabel
                key={size}
                value={size}
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      border: 1,
                      borderColor:
                        selectedBannerSize === size
                          ? "primary.main"
                          : "grey.300",
                      borderRadius: 1,
                      bgcolor:
                        selectedBannerSize === size ? "white" : "grey.50",
                      color: "text.primary",
                      cursor: "pointer",
                      minWidth: "40px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {size}
                  </Box>
                }
              />
            ))}
          </RadioGroup>
        </Box>

        {/* Banner Link Field */}
        <Box flexGrow={1}>
          <Typography variant="body2" color="text.secondary" mb={0.5}>
            Banner links to (optional):
          </Typography>
          <TextField
            value={bannerLink}
            onChange={(e) => setBannerLink(e.target.value)}
            fullWidth
            size="small"
            variant="outlined"
            placeholder="https://"
          />
        </Box>
      </Box>
    </Box>
  );

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title="Predesigned banners"
      onSave={handleSave}
      saveText="Add"
      cancelText="Cancel"
      maxWidth="md" // Wide enough to accommodate the sidebar and banners
    >
      <Box display="flex" minHeight={400}>
        {renderSidebar()}
        <Divider orientation="vertical" flexItem />
        <Box ml={3} flexGrow={1}>
          {renderBannerPreviews()}
        </Box>
      </Box>

      {/* Separator and Bottom Options */}
      <Divider sx={{ my: 3 }} />

      {renderSizeAndLinkOptions()}
    </CustomDialog>
  );
};

export default PredesignedBanners;
