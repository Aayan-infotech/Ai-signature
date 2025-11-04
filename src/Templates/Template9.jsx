import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, MusicNote } from "@mui/icons-material";

const Template9 = ({ data }) => {
  return (
    <Card
      className="shadow-sm border-0 p-3 d-flex m-auto"
      style={{ maxWidth: "500px" }}
    >
      <Typography
        variant="h5"
        sx={{ fontFamily: "'Pacifico', cursive", mb: 1, color: "#000" }}
      >
        Kind regard,
      </Typography>

      <Row className="align-items-center">
        <Col xs={3}>
          <Image src={data.image} roundedCircle fluid alt="Profile" />
        </Col>
        <Col xs={9}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.title}, {data.company}
              </Typography>
              <Box
                sx={{
                  border: "1px solid #BDBDBD",
                  width: "100%",
                }}
              />
              <Box sx={{ mt: 1, mb: 1 }}>
                <Typography variant="body2" color="text.primary">
                  {data.phone} |{" "}
                  <MUILink href={`https://${data.website}`}>
                    {data.website}
                  </MUILink>
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {data.email} | {data.address}
                </Typography>
              </Box>

              <Box>
                <IconButton size="small" sx={{ color: "#E4405F" }}>
                  <Instagram />
                </IconButton>
                <IconButton size="small" sx={{ color: "#1877F2" }}>
                  <Facebook />
                </IconButton>
                <IconButton size="small" sx={{ color: "#0077B5" }}>
                  <LinkedIn />
                </IconButton>
                <IconButton size="small" sx={{ color: "#000000" }}>
                  <MusicNote />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Col>
      </Row>
    </Card>
  );
};

export default Template9;
