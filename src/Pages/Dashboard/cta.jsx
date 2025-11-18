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
import SocialButtonsModal from "../../component/Dialog/SocialButton";
import PredesignedBanners from "../../component/Dialog/PreDessignedBanner";
import CustomButtonModal from "../../component/Dialog/CustomButtonDialog";
import UploadMyBannerModal from "../../component/Dialog/UploadBanner";
import GiveUsFeedbackModal from "../../component/Dialog/FeedbackDialog";
import VideoConferenceModal from "../../component/Dialog/VideoConference";
import JoinOurWebinarModal from "../../component/Dialog/WebinarModal";
import AppDownloadModal from "../../component/Dialog/DownloadApp";
import PostJobOfferModal from "../../component/Dialog/jobOffer";
import JoinNewsletterModal from "../../component/Dialog/NewsLetter";
import CustomHtmlModal from "../../component/Dialog/HTMLModal";
import { useSignature } from "../../hooks/useSignature";

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
  const [openSocial, setOpenSocial] = useState(false);
  const [openPreBanner, setOpenPreBanner] = useState(false);
  const [openCustomButton, setOpenCustomButton] = useState(false);
  const [uploadBanner, setUploadBanner] = useState(false);
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [openWebinar, setOpenWebinar] = useState(false);
  const [openAppDownload, setOpenAppDownload] = useState(false);
  const [jobModal, setJobModal] = useState(false);
  const [newsletterModal, setNewsletterModal] = useState(false);
  const [openHtml, setOpenHtml] = useState(false);
  const {
    formData,
    updateFormData,
    updateDesignFormData,
    updateSocialButtons,
    updateBanner,
    updateCustomButton,
    updateUploadBanner,
    updateFeedback,
    updateVideoConference,
    updateWebinar,
    updateAppDownload,
    updateJobOffer,
  } = useSignature();

  const handleOpen = (type) => {
    if (type === "scheduler") {
      setOpenScheduler(true);
    }

    if (type === "social") {
      setOpenSocial(true);
    }

    if (type === "Prebanner") {
      setOpenPreBanner(true);
    }

    if (type === "custom") {
      setOpenCustomButton(true);
    }
    if (type === "banner") {
      setUploadBanner(true);
    }
    if (type === "feedback") {
      setFeedbackModal(true);
    }
    if (type === "video") {
      setOpenVideo(true);
    }
    if (type === "webinar") {
      setOpenWebinar(true);
    }
    if (type === "appDownload") {
      setOpenAppDownload(true);
    }
    if (type === "job") {
      setJobModal(true);
    }
    if (type === "newsletter") {
      setNewsletterModal(true);
    }
    if (type === "html") {
      setOpenHtml(true);
    }
  };

  const handleClose = (type) => {
    if (type === "scheduler") {
      setOpenScheduler(false);
    }

    if (type === "social") {
      setOpenSocial(false);
    }

    if (type === "Prebanner") {
      setOpenPreBanner(false);
    }

    if (type === "custom") {
      setOpenCustomButton(false);
    }
    if (type === "banner") {
      setUploadBanner(false);
    }
    if (type === "feedback") {
      setFeedbackModal(false);
    }
    if (type === "video") {
      setOpenVideo(false);
    }
    if (type === "webinar") {
      setOpenWebinar(false);
    }
    if (type === "appDownload") {
      setOpenAppDownload(false);
    }
    if (type === "job") {
      setJobModal(false);
    }
    if (type === "newsletter") {
      setNewsletterModal(false);
    }
    if (type === "html") {
      setOpenHtml(false);
    }
  };

  // In CTA component - replace the handleSave function
  const handleSave = (formData, type) => {
    console.log("Saving CTA data:", { type, data: formData });

    if (type === "social") {
      console.log("Updating social buttons:", formData);
      updateSocialButtons(formData);
    }
    if (type === "custom") {
      console.log("Updating custom button:", formData);
      updateCustomButton(formData);
    }
    if (type === "banner") {
      console.log("Updating upload banner:", formData);
      updateUploadBanner(formData);
    }
    if (type === "feedback") {
      console.log("Updating feedback:", formData);
      updateFeedback(formData);
    }
    if (type === "video") {
      console.log("Updating video conference:", formData);
      updateVideoConference(formData);
    }
    if (type === "webinar") {
      console.log("Updating webinar:", formData);
      updateWebinar(formData);
    }
    if (type === "appDownload") {
      console.log("Updating app download:", formData);
      updateAppDownload(formData);
    }
    if (type === "job") {
      console.log("Updating job offer:", formData);
      updateJobOffer(formData);
    }
    handleClose(type);
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
    { title: "Download app", icon: CloudDownload, type: "appDownload" },
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

      <SocialButtonsModal
        open={openSocial}
        onClose={() => handleClose("social")}
        onSave={handleSave} // Use the new handler
        initialData={formData.socialButtons} // Pass initial data
      />

      <PredesignedBanners
        open={openPreBanner}
        onClose={() => handleClose("Prebanner")}
        onSave={handleSave}
      />

      <CustomButtonModal
        open={openCustomButton}
        onClose={() => handleClose("custom")}
        onSave={handleSave}
      />

      <UploadMyBannerModal
        open={uploadBanner}
        onClose={() => handleClose("banner")}
        onSave={handleSave}
      />

      <GiveUsFeedbackModal
        open={feedbackModal}
        onClose={() => handleClose("feedback")}
        onSave={handleSave}
      />

      <VideoConferenceModal
        open={openVideo}
        onClose={() => handleClose("video")}
        onSave={handleSave}
      />

      <JoinOurWebinarModal
        open={openWebinar}
        onClose={() => handleClose("webinar")}
        onSave={handleSave}
      />

      <AppDownloadModal
        open={openAppDownload}
        onClose={() => handleClose("appDownload")}
        onSave={handleSave}
      />

      <PostJobOfferModal
        open={jobModal}
        onClose={() => handleClose("job")}
        onSave={handleSave}
      />

      <JoinNewsletterModal
        open={newsletterModal}
        onClose={() => handleClose("newsletter")}
        onSave={handleSave}
      />
      <CustomHtmlModal
        open={openHtml}
        onClose={() => handleClose("html")}
        onSave={handleSave}
      />
    </>
  );
};

export default CTA;
