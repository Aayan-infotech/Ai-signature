import React from "react";
import {
  Card,
  Box,
  Typography,
  Link as MUILink,
  IconButton,
} from "@mui/material"; // Using MUI's Box/Typography and React-Bootstrap's Image
import {
  Facebook,
  Instagram,
  LinkedIn,
  Close, // Using Close for 'X' (Twitter/X)
  MusicNote, // For TikTok icon
} from "@mui/icons-material";
import { Image } from "react-bootstrap";

// Note: Removed unused 'Row' and 'Col' imports from react-bootstrap as the layout is primarily stacked.

const Template12 = ({ data }) => {
  const accentColor = "#546e8c"; // Slate Blue/Grey from the image

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100 flex-column justify-content-start align-items-start"
      // Adjusted maxWidth to better accommodate the design
      style={{ maxWidth: "600px" }}
    >
      <div className="row">
        <div className="col-lg-8">
          <Box sx={{ p: 3, pb: 2, textAlign: "center" }}>
            {/* 1. Kind Regards Signature */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Pacifico', cursive",
                mb: 2,
                color: "#000",
              }}
            >
              Kind regards.
            </Typography>

            {/* 2. Name and Title Block (Centered) */}
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#333", mb: 0.5 }}
            >
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {data.title}, {data.company}
            </Typography>

            {/* 3. Profile Image (Centered) */}
            <Image
              src={data.image}
              roundedCircle
              fluid
              alt="Profile"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Box>

          {/* 4. Colored Contact/Social Block */}
          <Box
            sx={{
              backgroundColor: accentColor,
              width: "100%",
              p: 2,
              color: "#fff",
              textAlign: "center",
            }}
          >
            {/* Contact Details with Monograms (Horizontal layout) */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap", // Allow wrapping for smaller screens
                gap: 1.5,
                mb: 1,
              }}
            >
              {/* P and M are on the first line */}
              <Typography variant="body3" sx={{ fontWeight: 600 , color:"#fff"}}>
                P {data.phone}
              </Typography>
              <Typography variant="body3" sx={{ fontWeight: 600 , color:"#fff"}}>
                M {data.phone2}
              </Typography>

              {/* W is on the second line */}
              <Typography
                variant="body3"
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                   color:"#fff"
                }}
              >
                W{" "}
                <MUILink
                  href={`https://${data.website}`}
                  underline="none"
                  sx={{ color: "#fff", fontWeight: 400 }}
                >
                  {data.website}
                </MUILink>
              </Typography>

              {/* E and A are on the third line */}
              <Typography variant="body3" sx={{ fontWeight: 600 , color:"#fff" }}>
                E {data.email}
              </Typography>
              <Typography variant="body3" sx={{ fontWeight: 600 , color:"#fff" }}>
                A {data.address}
              </Typography>
            </Box>

            {/* Social Media Icons (Centered) */}
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}
            >
              {[Facebook, Instagram, LinkedIn, Close, MusicNote].map(
                (Icon, index) => (
                  <IconButton key={index} size="small" sx={{ color: "#fff" }}>
                    <Icon fontSize="small" />
                  </IconButton>
                )
              )}
            </Box>
          </Box>
        </div>
      </div>
    </Card>
  );
};

export default Template12;
