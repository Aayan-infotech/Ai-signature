import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { Box, Typography, Link as MUILink, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, MusicNote } from "@mui/icons-material";

const Template1 = ({ data }) => {
  console.log(data);
  return (
    <Card
      className="shadow-sm border-0 p-3 d-flex m-auto w-100"
      style={{ maxWidth: "500px" }}
    >
      <Typography
        variant="h5"
        sx={{ fontFamily: "'Pacifico', cursive", mb: 1, color: "#000" }}
      >
        Kind regards,
      </Typography>

      <Row className="align-items-center">
        <Col xs={3}>
          <Image src={data.image} roundedCircle fluid alt="Profile" />
        </Col>
        <Col xs={9}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box
              sx={{
                border: "1px solid #BDBDBD",
                height: "150px",
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, fontFamily: data?.fontFamily }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="body3"
                color="text.secondary"
                sx={{ fontFamily: data?.fontFamily }}
              >
                {data.title}, {data.company}
              </Typography>

              <Box sx={{ mt: 1, mb: 1 }}>
                <Typography
                  variant="body3"
                  color="text.primary"
                  sx={{ fontFamily: data?.fontFamily }}
                >
                  {data.phone} |{" "}
                  <MUILink
                    href={`https://${data.website}`}
                    sx={{ fontFamily: data?.fontFamily }}
                  >
                    {data.website}
                  </MUILink>
                </Typography>
                <Typography
                  variant="body3"
                  color="text.primary"
                  sx={{ fontFamily: data?.fontFamily }}
                >
                  {data.email} | {data.address}
                </Typography>
              </Box>

              <Box>
                <IconButton
                  size="small"
                  sx={{ color: "#E4405F", fontFamily: data?.fontFamily }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{ color: "#1877F2", fontFamily: data?.fontFamily }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{ color: "#0077B5", fontFamily: data?.fontFamily }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{ color: "#000000", fontFamily: data?.fontFamily }}
                >
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

export default Template1;
