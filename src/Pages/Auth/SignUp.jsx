import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Person,
  Google,
  Facebook,
} from "@mui/icons-material";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please accept Terms & Conditions.");
      return;
    }
    console.log("Signup Data:", formData);
    alert("Signup successful!");
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
      <Box className="row w-100" style={{ maxWidth: "1200px" }}>
        {/* Left Side - Illustration */}
        <Box className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <Box className="text-center text-white">
            <Typography
              variant="h3"
              className="fw-bold mb-3"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Join Us Today!
            </Typography>
            <Typography variant="h6" className="mb-4 opacity-75">
              Create your account and start your journey with us.
            </Typography>
            <Box
              component="img"
              src="/api/placeholder/400/280"
              alt="Sign Up Illustration"
              className="img-fluid rounded-3 shadow-lg"
              style={{ maxWidth: "380px" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </Box>
        </Box>

        {/* Right Side - Sign Up Form */}
        <Box className="col-md-6">
          <Paper
            elevation={10}
            className="p-4 p-md-4 rounded-4 shadow"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box className="text-center mb-3">
              <Typography
                variant="h4"
                className="fw-bold gradient-text"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Create Account
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Fill in your details to get started
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                margin="dense"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Email Field */}
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="dense"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Password Field */}
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                margin="dense"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Confirm Password */}
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                margin="dense"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Terms & Conditions */}
              <FormControlLabel
                control={
                  <Checkbox
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" color="textSecondary">
                    I agree to the{" "}
                    <span
                      style={{
                        color: "#667eea",
                        cursor: "pointer",
                        fontWeight: 500,
                      }}
                    >
                      Terms & Conditions
                    </span>
                  </Typography>
                }
              />

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                className="py-2 rounded-pill shadow mt-2"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  border: "none",
                }}
              >
                Sign Up
              </Button>
            </form>

            {/* Divider */}
            <Box className="text-center my-3">
              <Divider className="mb-2">
                <Typography variant="body2" color="textSecondary">
                  OR CONTINUE WITH
                </Typography>
              </Divider>
            </Box>

            {/* Social Login Buttons */}
            <Box className="row g-2 mb-3">
              <Box className="col-6">
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Google />}
                  className="rounded-pill"
                >
                  Google
                </Button>
              </Box>
              <Box className="col-6">
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Facebook />}
                  className="rounded-pill"
                >
                  Facebook
                </Button>
              </Box>
            </Box>

            {/* Login Link */}
            <Box className="text-center">
              <Typography variant="body2" color="textSecondary">
                Already have an account?{" "}
                <Button
                  variant="text"
                  className="text-decoration-none p-0"
                  style={{ color: "#667eea" }}
                  onClick={() => navigate("/auth/SignIn")}
                >
                  Log in here
                </Button>
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
