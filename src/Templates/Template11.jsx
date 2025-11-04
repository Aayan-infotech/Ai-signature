import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Close, // Using Close for 'X' (Twitter/X)
  MusicNote, // For TikTok icon
} from "@mui/icons-material";

const Template11 = ({ data }) => {
  const accentColor = "#546e8c"; // Slate Blue/Grey from the image

  return (
    <Card
      className="shadow-sm border-0 d-flex m-auto w-100"
      style={{ maxWidth: "600px", border: "1px solid #ddd", padding: 0 }}
    >
      <Box sx={{ p: 3, pb: 0 }}>
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
      </Box>

      {/* 2. Main Content Block (White Area) */}
      <Row className="align-items-start g-3" sx={{ mx: 0, px: 3, mb: 2 }}>
        {/* Image Column */}
        <Col xs="auto" style={{ flexShrink: 0 }}>
          <Image
            src={data.image}
            roundedCircle // Image is circular
            fluid
            alt="Profile"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        </Col>

        {/* Name and Title Column */}
        <Col>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#333", mb: 0.5 }}
          >
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.title}, {data.company}
          </Typography>
        </Col>
      </Row>

      <Box sx={{ pl: 2, pb: 0 }}>
        <div className="row">
          <div className="col-lg-8">
            <Box
              sx={{
                backgroundColor: accentColor,
                width: "100%",
                p: 2,
                color: "#fff",
                mt: 2,
              }}
            >
              {/* Contact Details with Monograms */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  mb: 3,
                }}
              >
                <Typography variant="body2">P {data.phone}</Typography>
                <Typography variant="body2">
                  M {data.phone2 || data.phone}
                </Typography>
                <Typography variant="body2">
                  W{" "}
                  <MUILink
                    href={`https://${data.website}`}
                    underline="none"
                    sx={{ color: "#fff" }}
                  >
                    {data.website}
                  </MUILink>
                </Typography>
                <Typography variant="body2">E {data.email}</Typography>
                <Typography variant="body2">A {data.address}</Typography>
              </Box>

              {/* Social Media Icons (White Icons on Colored Background) */}
              <Box sx={{ display: "flex", gap: 0.5, mt: 2 }}>
                {/* Facebook */}
                <IconButton
                  size="small"
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <Facebook fontSize="small" />
                </IconButton>
                {/* Instagram */}
                <IconButton
                  size="small"
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <Instagram fontSize="small" />
                </IconButton>
                {/* LinkedIn */}
                <IconButton
                  size="small"
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <LinkedIn fontSize="small" />
                </IconButton>
                {/* X (Twitter) */}
                <IconButton
                  size="small"
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <Close fontSize="small" />
                </IconButton>
                {/* TikTok */}
                <IconButton
                  size="small"
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <MusicNote fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </div>
        </div>
      </Box>
    </Card>
  );
};

export default Template11;
