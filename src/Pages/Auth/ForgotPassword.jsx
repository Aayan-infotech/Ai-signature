import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    console.log("OTP sent to:", email);
    navigate("/auth/verifyOtp");
  };

  return (
    <Container
      maxWidth={false}
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <Paper
        elevation={10}
        className="p-4 p-md-5 rounded-4 shadow"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <Box className="text-center mb-4">
          <Typography
            variant="h4"
            className="fw-bold"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Forgot Password
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Enter your email to receive a verification code
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <Email color="action" style={{ marginRight: 8 }} />
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="py-2 rounded-pill mt-3"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
            }}
          >
            Send OTP
          </Button>
        </form>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3 }}
          color="textSecondary"
        >
          Remember your password?{" "}
          <span
            style={{ color: "#667eea", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </Typography>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
