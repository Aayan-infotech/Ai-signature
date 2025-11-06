import React, { useState } from "react";
import {
  Container,
  Paper,
  Button,
  Typography,
  Box,
} from "@mui/material";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) return alert("Please enter a valid 6-digit OTP");
    console.log("OTP verified:", otp);
    navigate("/auth/ResetPassword");
  };

  return (
    <Container
      maxWidth={false}
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(169deg,rgba(42, 142, 138, 1) 28%, rgba(109, 195, 109, 1) 78%)",
        padding: "20px",
      }}
    >
      <Paper
        elevation={10}
        className="p-4 p-md-5 rounded-4 shadow text-center"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <Typography
          variant="h4"
          className="fw-bold mb-2"
          style={{
            background: "#198754",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Verify OTP
        </Typography>
        <Typography variant="body2" color="textSecondary" className="mb-4">
          Enter the 6-digit code sent to your email
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box
            className="d-flex justify-content-center mb-4"
            sx={{ gap: 1 }}
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    width: "45px",
                    height: "45px",
                    margin: "0 5px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    textAlign: "center",
                    fontSize: "18px",
                    outline: "none",
                  }}
                />
              )}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="py-2 rounded-pill"
            style={{
              background: "#198754",
              border: "none",
            }}
          >
            Verify OTP
          </Button>
        </form>

        <Typography variant="body2" className="mt-3" color="textSecondary">
          Didn’t receive the code?{" "}
          <span
            style={{ color: "#667eea", cursor: "pointer" }}
            onClick={() => alert("Resent OTP!")}
          >
            Resend
          </span>
        </Typography>
      </Paper>
    </Container>
  );
};

export default VerifyOtp;
