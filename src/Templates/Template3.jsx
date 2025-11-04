import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, MusicNote } from "@mui/icons-material";

const Template3 = ({ data }) => {
  // Use provided data or default data
  const profileData = data;
  console.log(profileData);

  return (
    <Card
      className="shadow-sm border-0 p-3 d-flex m-auto w-100"
      style={{ maxWidth: "500px", fontFamily: "Arial, sans-serif" }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "'Pacifico', cursive",
          mb: 1,
          color: "#000",
          fontSize: "1.5rem",
        }}
      >
        Kind regards,
      </Typography>

      <Row className="align-items-center">
        <Col xs={3}>
          <Image
            src={profileData.image}
            roundedCircle
            fluid
            alt="Profile"
            style={{ width: "100px", height: "100px" }}
          />
        </Col>
        <Col xs={9}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, fontSize: "1.25rem" }}
                  >
                    {profileData.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.9rem" }}
                  >
                    {profileData.title}, {profileData.company}
                  </Typography>
                </Box>
                <Box sx={{ mt: 1 }}>
                  <IconButton size="small" sx={{ color: "#E4405F" }}>
                    <Instagram fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "#1877F2" }}>
                    <Facebook fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "#0077B5" }}>
                    <LinkedIn fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "#000000" }}>
                    <MusicNote fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              <Box
                sx={{
                  border: "1px solid #BDBDBD",
                  width: "100%",
                  my: 1,
                }}
              />
              <Box sx={{ mt: 1, mb: 1 }}>
                <Typography
                  variant="body3"
                  color="text.primary"
                  
                >
                  Phone: {profileData.phone} | Mobile: {profileData.mobile}
                </Typography>
                <Typography
                  variant="body3"
                  color="text.primary"
                  
                >
                  Website:{" "}
                  <MUILink
                    href={`https://${profileData.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none" }}
                  >
                    {profileData.website}
                  </MUILink>
                </Typography>
                <Typography
                  variant="body3"
                  color="text.primary"
                  
                >
                  Email: {profileData.email}
                </Typography>
                <Typography
                  variant="body3"
                  color="text.primary"
                  
                >
                  Address: {profileData.address}
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "1px solid #BDBDBD",
                  width: "100%",
                  my: 1,
                }}
              />
            </Box>
          </Box>
        </Col>
      </Row>
    </Card>
  );
};

export default Template3;
