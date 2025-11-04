import React from "react";
import { Card, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
// Using icons that match the visual cue/meaning from the image
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Language,
  MailOutline,
  LocationOnOutlined,
  Close, // Using Close for 'X' (Twitter/X)
  MusicNote, // Using MusicNote for TikTok-like icon
} from "@mui/icons-material";

const Template5 = ({ data }) => {
  return (
    <Card
      className="shadow-sm border-0 p-3 d-flex m-auto w-100"
      style={{ maxWidth: "500px", border: "none" }}
    >
      {/* 1. Kind Regards Signature */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Pacifico', cursive",
          mb: 2,
          color: "#000",
        }}
      >
        Kind regards.
      </Typography>

      {/* 2. Profile Image */}
      <Box sx={{ width: "100px", height: "100px", mb: 2 }}>
        {/* Note: The image in the example is a small rectangular preview, not a round profile photo. 
            I've adjusted the code to use a standard Image component without 'roundedCircle' for a more accurate visual match. */}
        <Image
          src={data.image}
          fluid
          alt="Profile"
          style={{ borderRadius: "5px" }}
        />
      </Box>

      {/* 3. Name and Title */}
      <Typography variant="h6" sx={{ fontWeight: 600, mt: 1 }}>
        {data.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {data.title},
        <br />
        {data.company}
      </Typography>

      {/* 4. Contact Details with Icons */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mb: 2 , flexWrap:"wrap" }}>
        {/* Phone 1 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Phone fontSize="small" color="action" />
          <Typography variant="body3">{data.phone}</Typography>
        </Box>
        {/* Phone 2 (Assuming the second number is also phone) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Phone fontSize="small" color="action" />
          <Typography variant="body3">{data.phone2 || data.phone}</Typography>
        </Box>
        {/* Website */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Language fontSize="small" color="action" />
          <MUILink href={`https://${data.website}`} variant="body3">
            {data.website}
          </MUILink>
        </Box>
        {/* Email */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MailOutline fontSize="small" color="action" />
          <Typography variant="body3">{data.email}</Typography>
        </Box>
        {/* Address/Location */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationOnOutlined fontSize="small" color="action" />
          <Typography variant="body3">{data.address}</Typography>
        </Box>
      </Box>

      {/* 5. Social Media Icons (Styled as colored boxes) */}
      <Box sx={{ display: "flex", gap: 1 }}>
        {/* Facebook */}
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#3b5998",
            color: "#fff",
            "&:hover": { backgroundColor: "#2d4373" },
          }}
        >
          <Facebook fontSize="small" />
        </IconButton>
        {/* Instagram */}
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#e4405f",
            color: "#fff",
            "&:hover": { backgroundColor: "#c82a44" },
          }}
        >
          <Instagram fontSize="small" />
        </IconButton>
        {/* LinkedIn */}
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#0077b5",
            color: "#fff",
            "&:hover": { backgroundColor: "#005582" },
          }}
        >
          <LinkedIn fontSize="small" />
        </IconButton>
        {/* X (Twitter) - Using a dark background and the Close icon as a stand-in for 'X' */}
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#000000",
            color: "#fff",
            "&:hover": { backgroundColor: "#222" },
          }}
        >
          <Close fontSize="small" />
        </IconButton>
        {/* TikTok/Other (Assuming MusicNote is for TikTok based on the icon in the image) */}
        <IconButton
          size="small"
          sx={{
            backgroundColor: "#000000",
            color: "#fff",
            "&:hover": { backgroundColor: "#222" },
          }}
        >
          <MusicNote fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default Template5;
