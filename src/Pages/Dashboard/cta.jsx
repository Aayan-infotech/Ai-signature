import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import CustomDialog from "../../component/Dialog/CustomDialog";
import {
  EventAvailable,
  Payment,
  Share,
  Flag,
  Mail,
  Code,
  PhoneInTalk,
  Groups,
  CloudDownload,
  Work,
} from "@mui/icons-material";
import { SquareScissors, Upload, MessageSquare } from "lucide-react";
import OnlineMeetingScheduler from "../../component/Dialog/OnlineScheduler";

const CTACard = ({ title, icon: Icon, onClick, isPro }) => (
  <Box
    className="d-flex align-items-center justify-content-between p-3"
    sx={{
      border: "1px solid #e0e0e0",
      borderRadius: 2,
      backgroundColor: "#fafafa",
      transition: "all 0.2s ease",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#f5f5f5",
        borderColor: "#ccc",
      },
    }}
  >
    <Box
      className="d-flex align-items-center gap-3 flex-grow-1"
      onClick={onClick}
    >
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
        <Icon size={20} color="#666" />
      </Box>

      <Box className="flex-grow-1">
        <Typography
          variant="body1"
          className="fw-normal text-secondary mb-1"
          sx={{ fontSize: "0.9rem" }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
    {isPro && (
      <Typography variant="body1" className="fw-bold text-primary">
        Pro
      </Typography>
    )}
  </Box>
);

const CTA = () => {
  const [open, setOpen] = useState(false);
  const [openScheduler, setOpenScheduler] = useState(false);

  const handleOpen = (type) => {
    if (type === "scheduler") {
      setOpenScheduler(true);
    }
    
  };

  const handleClose = (type) => {
    if (type === "scheduler") {
      setOpenScheduler(false);
    }
  };

  const handleSave = (formData) => {
    console.log("Saving CTA data:", { data: formData });
    handleClose();
  };

  const ctaOptions = [
    { title: "Online scheduler", icon: EventAvailable, type: "scheduler" },
    // { title: "Online payments", icon: Payment, type: "payments", isPro: true },
    { title: "Social buttons", icon: Share, type: "social" },
    {
      title: "Pre designed Banner",
      icon: Flag,
      type: "Prebanner",
      isPro: true,
    },
    { title: "Custom button", icon: SquareScissors, type: "custom" },
    { title: "Upload Banner", icon: Upload, type: "banner" },
    { title: "Give Feedback", icon: MessageSquare, type: "feedback" },
    { title: "Video conference", icon: PhoneInTalk, type: "video" },
    { title: "Join a webinar", icon: Groups, type: "webinar" },
    { title: "Download app", icon: CloudDownload, type: "app" },
    { title: "Post a job offer", icon: Work, type: "job", isPro: true },
    { title: "Join newsletter", icon: Mail, type: "newsletter" },
    { title: "HTML", icon: Code, type: "html", isPro: true },
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        Call-to-Action Buttons
      </Typography>
      <Box className="d-flex flex-column gap-3">
        {ctaOptions.map((cta) => (
          <CTACard
            key={cta.type}
            title={cta.title}
            icon={cta.icon}
            isPro={cta.isPro}
            onClick={() => handleOpen(cta.type)}
          />
        ))}
      </Box>

      <OnlineMeetingScheduler
        open={openScheduler}
        onClose={() => handleClose("scheduler")}
        onSave={handleSave}
      />
    </>
  );
};

export default CTA;
