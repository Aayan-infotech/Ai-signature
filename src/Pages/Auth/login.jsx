// Login.js
import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
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
  Google,
  Facebook,
} from "@mui/icons-material";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const validationErrors = validateForm();

    // if (Object.keys(validationErrors).length === 0) {
    //   setIsSubmitting(true);
    //   // Simulate API call
    //   setTimeout(() => {
    //     console.log("Login data:", formData);
    //     setIsSubmitting(false);
    //     alert("Login successful!");
    //   }, 2000);
    // } else {
    //   setErrors(validationErrors);
    // }
    navigate("/dashboard/detail");
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container
      maxWidth="false"
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <Box className="row w-100" style={{ maxWidth: "1200px" }}>
        {/* Left Side - Welcome Message */}
        <Box className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <Box className="text-center text-white">
            <Typography
              variant="h3"
              className="fw-bold mb-4"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              Welcome Back!
            </Typography>
            <Typography variant="h6" className="mb-4 opacity-75">
              Sign in to access your account and continue your journey with us.
            </Typography>
            <Box
              component="img"
              src="/api/placeholder/400/300"
              alt="Welcome"
              className="img-fluid rounded-3 shadow-lg"
              style={{ maxWidth: "400px" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </Box>
        </Box>

        {/* Right Side - Login Form */}
        <Box className="col-md-6">
          <Paper
            elevation={10}
            className="p-4 p-md-5 rounded-4 shadow"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box className="text-center mb-4">
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
                Sign In
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Enter your credentials to access your account
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
                className="mb-3"
              />

              {/* Password Field */}
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
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
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className="mb-3"
              />

              {/* Remember Me & Forgot Password */}
              <Box className="d-flex justify-content-between align-items-center mb-4">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Button
                  variant="text"
                  className="text-decoration-none"
                  style={{ color: "#667eea" }}
                  onClick={() => navigate("/auth/ForgotPassword")}
                >
                  Forgot Password?
                </Button>
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isSubmitting}
                className="py-3 rounded-pill shadow"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  border: "none",
                }}
              >
                {isSubmitting ? (
                  <Box
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Box>
                ) : null}
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            {/* Divider */}
            <Box className="text-center my-4">
              <Divider className="mb-3">
                <Typography variant="body2" color="textSecondary">
                  OR CONTINUE WITH
                </Typography>
              </Divider>
            </Box>

            {/* Social Login Buttons */}
            <Box className="row g-2 mb-4">
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

            {/* Sign Up Link */}
            <Box className="text-center">
              <Typography variant="body2" color="textSecondary">
                Don't have an account?{" "}
                <Button
                  variant="text"
                  className="text-decoration-none p-0"
                  style={{ color: "#667eea" }}
                  onClick={() => navigate("/auth/SignUp")}
                >
                  Sign up here
                </Button>
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
