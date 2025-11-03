import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import { useSignature } from "../../hooks/useSignature";

const Dashboard = () => {
  const { formData, updateFormData } = useSignature();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateFormData({ image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Signature details
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box
          textAlign="center"
          className="d-flex flex-row align-items-center gap-3"
          mt={2}
          mb={2}
        >
          <Avatar src={formData.image} sx={{ width: 120, height: 120 }} />
          <Button variant="outlined" component="label" className="mt-2">
            Upload Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            multiline
            rows={2}
          />
          <Button variant="contained" color="primary" type="submit">
            Save Details
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Dashboard;
