import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Music,
  Trash2,
  Edit3,
  Check,
  X,
} from "lucide-react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";

const Social = () => {
  const [socialProfiles, setSocialProfiles] = useState([
    {
      platform: "Facebook",
      url: "https://www.facebook.com",
      icon: Facebook,
      username: "Facebook URL",
      isEditing: false,
      tempValue: "https://www.facebook.com",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com",
      icon: Instagram,
      username: "Instagram Username",
      isEditing: false,
      tempValue: "https://www.instagram.com",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      username: "LinkedIn URL",
      isEditing: false,
      tempValue: "https://linkedin.com",
    },
    {
      platform: "Twitter",
      url: "https://www.x.com",
      icon: Twitter,
      username: "Twitter Handle",
      isEditing: false,
      tempValue: "https://www.x.com",
    },
    {
      platform: "TikTok",
      url: "https://www.tiktok.com",
      icon: Music,
      username: "TikTok Username",
      isEditing: false,
      tempValue: "https://www.tiktok.com",
    },
  ]);

  const handleDelete = (platform, event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`Delete ${platform}`);
    // Add your delete logic here
  };

  const handleEdit = (index, event) => {
    event.preventDefault();
    event.stopPropagation();

    const updatedProfiles = socialProfiles.map((profile, i) => ({
      ...profile,
      isEditing: i === index,
      tempValue: i === index ? profile.url : profile.tempValue,
    }));

    setSocialProfiles(updatedProfiles);
  };

  const handleSave = (index, event) => {
    event.preventDefault();
    event.stopPropagation();

    const updatedProfiles = socialProfiles.map((profile, i) => {
      if (i === index) {
        return {
          ...profile,
          isEditing: false,
          url: profile.tempValue,
          username: profile.tempValue,
        };
      }
      return profile;
    });

    setSocialProfiles(updatedProfiles);
  };

  const handleCancel = (index, event) => {
    event.preventDefault();
    event.stopPropagation();

    const updatedProfiles = socialProfiles.map((profile, i) => ({
      ...profile,
      isEditing: false,
      tempValue: i === index ? profile.url : profile.tempValue,
    }));

    setSocialProfiles(updatedProfiles);
  };

  const handleInputChange = (index, value) => {
    const updatedProfiles = socialProfiles.map((profile, i) => {
      if (i === index) {
        return {
          ...profile,
          tempValue: value,
        };
      }
      return profile;
    });

    setSocialProfiles(updatedProfiles);
  };

  return (
    <Box maxWidth="md">
      {/* Header */}
      <Box textAlign="left" mb={4}>
        <Typography variant="h6" gutterBottom>
          Social Profile
        </Typography>
      </Box>

      {/* Social Profiles List */}
      <Box className="d-flex flex-column gap-3">
        {socialProfiles.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <Box
              key={index}
              className="d-flex align-items-center justify-content-between p-3"
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                backgroundColor: "#fafafa",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  borderColor: "#ccc",
                },
              }}
            >
              {/* Left side - Icon and Platform Info */}
              <Box className="d-flex align-items-center gap-3 flex-grow-1">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #e0e0e0",
                    flexShrink: 0,
                  }}
                >
                  <IconComponent size={20} color="#666" />
                </Box>

                <Box className="flex-grow-1">
                  <Typography
                    variant="body1"
                    className="fw-normal text-secondary mb-1"
                    sx={{ fontSize: "0.9rem" }}
                  >
                    {social.platform}
                  </Typography>

                  {social.isEditing ? (
                    <TextField
                      fullWidth
                      size="small"
                      value={social.tempValue}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          height: "32px",
                          fontSize: "0.95rem",
                        },
                      }}
                    />
                  ) : (
                    <Typography
                      variant="body2"
                      className="text-dark fw-medium"
                      sx={{ fontSize: "0.95rem" }}
                    >
                      {social.username}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Right side - Action Buttons */}
              <Box className="d-flex align-items-center gap-1">
                {social.isEditing ? (
                  <>
                    {/* Save Button */}
                    <IconButton
                      onClick={(e) => handleSave(index, e)}
                      sx={{
                        color: "#4caf50",
                        "&:hover": {
                          backgroundColor: "rgba(76, 175, 80, 0.1)",
                        },
                      }}
                    >
                      <Check size={18} />
                    </IconButton>

                    {/* Cancel Button */}
                    <IconButton
                      onClick={(e) => handleCancel(index, e)}
                      sx={{
                        color: "#f44336",
                        "&:hover": {
                          backgroundColor: "rgba(244, 67, 54, 0.1)",
                        },
                      }}
                    >
                      <X size={18} />
                    </IconButton>
                  </>
                ) : (
                  <>
                    {/* Edit Button */}
                    <IconButton
                      onClick={(e) => handleEdit(index, e)}
                      sx={{
                        color: "#666",
                        "&:hover": {
                          backgroundColor: "rgba(33, 150, 243, 0.1)",
                          color: "#2196f3",
                        },
                      }}
                    >
                      <Edit3 size={18} />
                    </IconButton>

                    {/* Delete Button */}
                    <IconButton
                      onClick={(e) => handleDelete(social.platform, e)}
                      sx={{
                        color: "#666",
                        "&:hover": {
                          backgroundColor: "rgba(244, 67, 54, 0.1)",
                          color: "#f44336",
                        },
                      }}
                    >
                      <Trash2 size={18} />
                    </IconButton>
                  </>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Footer Text */}
      <Box textAlign="center" mt={4}>
        <Typography
          variant="body2"
          className="text-secondary"
          sx={{
            fontSize: "0.9rem",
            fontStyle: "italic",
          }}
        >
          Style your icons
        </Typography>
      </Box>
    </Box>
  );
};

export default Social;
