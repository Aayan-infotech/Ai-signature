// hooks/useSignatureData.js
import { useMemo } from "react";
import SpaIcon from "@mui/icons-material/Spa";
import ForestIcon from "@mui/icons-material/Forest";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LinkIcon from "@mui/icons-material/Link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CircleIcon from "@mui/icons-material/Circle";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import MonitorIcon from "@mui/icons-material/Monitor";
import MicIcon from "@mui/icons-material/Mic";
import TvIcon from "@mui/icons-material/Tv";
import LaptopIcon from "@mui/icons-material/Laptop";

export const useSignatureData = (data) => {
  const getValue = (designValue, parentValue, defaultValue = "") =>
    designValue || parentValue || defaultValue;

  const {
    design = {},
    fontFamily,
    fontSize,
    lineSpacing,
    socialLinks = {},
    styledSignedOff,
    disclaimerStyle,
    quoteStyle,
    youtubeVideo = {},
    greenFooter = {},
    imageGallery = {},
    onlineMeeting = {},
    socialButtons = {},
    banner = {},
    customButton = {},
    uploadBanner,
    feedback = {},
    videoConference = {},
    webinar = {},
    appDownload = {},
    jobOffer = {},
  } = data || {};

  console.log("socialButtons", socialButtons);
  const getDisplayData = () => {
    if (!styledSignedOff || !styledSignedOff.type) {
      return {
        type: "none",
        signOff: "Kind regards,",
        fontStyle: "cursive",
        size: 20,
        alignment: "left",
        color: "#000000",
      };
    }

    const { type } = styledSignedOff;

    if (type === "signature" && styledSignedOff.signature) {
      const sig = styledSignedOff.signature;
      return {
        type: sig.isCustom ? "custom" : "signature",
        signOff: sig.signOff,
        signAs: sig.signAs,
        fontStyle: sig.fontStyle,
        size: sig.size,
        alignment: sig.alignment,
        color: sig.color,
        imageData: sig.imageData,
        isCustom: sig.isCustom,
      };
    }

    if (type === "signoff" && styledSignedOff.signoff) {
      const soff = styledSignedOff.signoff;
      return {
        type: "signoff",
        signOff: soff.signOff,
        fontStyle: soff.fontStyle,
        size: soff.size,
        alignment: soff.alignment,
        color: soff.color,
      };
    }

    if (type === "custom" && styledSignedOff.signature) {
      const sig = styledSignedOff.signature;
      return {
        type: "custom",
        signOff: sig.signOff,
        signAs: sig.signAs,
        fontStyle: "custom",
        size: sig.size,
        alignment: sig.alignment,
        color: sig.color,
        imageData: sig.imageData,
        isCustom: true,
      };
    }

    return {
      type: "none",
      signOff: "Kind regards,",
      fontStyle: "cursive",
      size: 20,
      alignment: "left",
      color: "#000000",
    };
  };

  const displayData = useMemo(() => getDisplayData(), [styledSignedOff]);

  const styles = useMemo(
    () => ({
      name: {
        fontFamily: getValue(design.nameFont, fontFamily, "Roboto"),
        fontSize: getValue(design.nameFontSize, fontSize, 13),
        color: getValue(design.nameColor, "#45668E"),
        lineHeight: getValue(design.nameLineSpacing, lineSpacing, 1),
      },
      title: {
        fontFamily: getValue(design.titleFont, fontFamily, "Roboto"),
        fontSize: getValue(design.titleFontSize, fontSize, 13),
        color: getValue(design.titleColor, "#000000"),
        lineHeight: getValue(design.titleLineSpacing, lineSpacing, 1),
      },
      company: {
        fontFamily: getValue(design.companyFont, fontFamily, "Roboto"),
        fontSize: getValue(design.companyFontSize, fontSize, 13),
        color: getValue(design.companyColor, "#000000"),
      },
      details: {
        fontFamily: getValue(design.detailsFont, fontFamily, "Roboto"),
        fontSize: getValue(design.detailsSize, fontSize, 13),
        color: getValue(design.detailsColor, "#000000"),
      },
      social: {
        size: getValue(design.socialSize, 16),
        colorMode: getValue(design.socialColorMode, "web"),
        customColor: getValue(design.socialCustomColor, "#1877F2"),
        space: getValue(design.socialSpace, 8),
      },
      image: {
        shape: getValue(design.imageShape, "rounded-2"),
        size: getValue(design.imageSize, "100px"),
        position: getValue(design.imagePosition, "left"),
      },
    }),
    [design, fontFamily, fontSize, lineSpacing]
  );

  const getFontFamily = (fontStyle) => {
    const fontMap = {
      cursive: "'Dancing Script', cursive",
      handwritten: "'Caveat', cursive",
      formal: "'Playfair Display', serif",
      modern: "'Raleway', sans-serif",
      custom: "'Dancing Script', cursive",
    };
    return fontMap[fontStyle] || fontMap.cursive;
  };

  const getSocialColor = (originalColor) =>
    styles.social.colorMode === "web"
      ? originalColor
      : styles.social.customColor;

  const shouldShowDisclaimer = disclaimerStyle && disclaimerStyle.type;
  const shouldShowQuote = quoteStyle && quoteStyle.category;
  const shouldShowVideo = youtubeVideo && youtubeVideo.url;
  const shouldShowGreenFooter = greenFooter && greenFooter.category;
  const shouldShowImageGallery =
    imageGallery && imageGallery.images && imageGallery.images.length > 0;
  const shouldShowOnlineMeeting =
    onlineMeeting && onlineMeeting.enabled && onlineMeeting.schedulerUrl;
  const shouldShowSocialButtons =
    socialButtons?.enabled &&
    socialButtons.links &&
    socialButtons.links.length > 0;
  const shouldShowCustomButton =
    customButton && customButton.enabled && customButton.buttonUrl;
  const shouldShowUploadBanner =
    uploadBanner && uploadBanner.enabled && uploadBanner.imageUrl;
  const shouldShowFeedback = feedback && feedback.enabled && feedback.linkUrl;
  const shouldShowVideoConference =
    videoConference && videoConference.enabled && videoConference.link;
  const shouldShowWebinar = webinar && webinar.enabled && webinar.linkUrl;
  const shouldShowAppDownload = appDownload && appDownload.enabled;
  const shouldShowJobOffer = jobOffer && jobOffer.enabled;

  const getContrastColor = (hexcolor) => {
    if (!hexcolor) return "#FFFFFF";

    // Remove the # if present
    const hex = hexcolor.replace("#", "");

    // Convert to RGB
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate brightness (perceived luminance)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
  };

  const getButtonStyles = () => {
    const baseStyles = {
      textDecoration: "none",
      display: "inline-block",
      fontWeight: 500,
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
      fontFamily: getValue(design.detailsFont, fontFamily, "Roboto"),
    };

    // Size styles
    const sizeStyles = {
      S: { padding: "6px 12px", fontSize: "12px" },
      M: { padding: "8px 16px", fontSize: "14px" },
      L: { padding: "12px 24px", fontSize: "16px" },
    };

    // Type styles
    const typeStyles = {
      Full: {
        backgroundColor: onlineMeeting.buttonColor || "#007dff",
        color: getContrastColor(onlineMeeting.buttonColor || "#007dff"),
        border: `1px solid ${onlineMeeting.buttonColor || "#007dff"}`,
      },
      Light: {
        backgroundColor: "transparent",
        color: onlineMeeting.buttonColor || "#007dff",
        border: `1px solid ${onlineMeeting.buttonColor || "#007dff"}`,
      },
      Simple: {
        backgroundColor: "transparent",
        color: onlineMeeting.buttonColor || "#007dff",
        border: "none",
        textDecoration: "underline",
        padding: "4px 0",
      },
    };

    // Shape styles
    const shapeStyles = {
      square: { borderRadius: "0" },
      rounded_sm: { borderRadius: "4px" },
      rounded: { borderRadius: "50px" },
    };

    return {
      ...baseStyles,
      ...sizeStyles[onlineMeeting.buttonSize || "M"],
      ...typeStyles[onlineMeeting.buttonType || "Full"],
      ...shapeStyles[onlineMeeting.buttonShape || "rounded"],
    };
  };

  const getButtonIcon = () => {
    if (!onlineMeeting.buttonIcon || onlineMeeting.buttonIcon === "none") {
      return null;
    }

    const iconSize =
      onlineMeeting.buttonSize === "S"
        ? "small"
        : onlineMeeting.buttonSize === "L"
        ? "medium"
        : "small";

    const icons = {
      circle: <CheckCircleIcon fontSize={iconSize} />,
      calendar_month: <CalendarMonthIcon fontSize={iconSize} />,
      calendar_today: <CalendarTodayIcon fontSize={iconSize} />,
      link: <LinkIcon fontSize={iconSize} />,
      time: <AccessTimeIcon fontSize={iconSize} />,
      emoticon: <InsertEmoticonIcon fontSize={iconSize} />,
    };

    return icons[onlineMeeting.buttonIcon] || null;
  };

  const getSchedulingProviderName = () => {
    const providers = {
      vcita: "vCita",
      calendly: "Calendly",
      acuity: "Acuity Scheduling",
      custom: "Custom",
    };
    return providers[onlineMeeting.schedulingProvider] || "Scheduling";
  };

  // Get YouTube thumbnail URL
  const getYoutubeThumbnail = (videoId, quality = "hqdefault") => {
    if (!videoId) return "";
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  };

  const getGreenFooterIcon = (iconType) => {
    const iconMap = {
      tree: <ForestIcon />,
      leaf: <SpaIcon />,
      none: null,
    };
    return iconMap[iconType] || null;
  };

  const getImageBorderRadius = (shape) => {
    if (shape === "circle") return "50%";
    if (shape === "rounded") return "10px";
    return "0";
  };

  const shouldShowBanner = banner && banner.enabled;

  // Add banner styles based on size
  const getBannerStyles = () => {
    const sizeStyles = {
      S: { height: "50px", fontSize: "12px" },
      M: { height: "75px", fontSize: "14px" },
      L: { height: "100px", fontSize: "16px" },
    };

    return {
      ...sizeStyles[banner.predesigned?.size || banner.custom?.size || "M"],
      width: "100%",
      objectFit: "fill",
      borderRadius: "4px",
      cursor:
        banner.predesigned?.link || banner.custom?.link ? "pointer" : "default",
    };
  };

  const handleBannerClick = () => {
    const link = banner.predesigned?.link || banner.custom?.link;
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const getCustomButtonStyles = () => {
    const baseStyles = {
      textDecoration: "none",
      display: "inline-block",
      fontWeight: 500,
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
      fontFamily: getValue(design.detailsFont, fontFamily, "Roboto"),
      color: customButton.fontColor || "#000000",
    };

    // Size styles
    const sizeStyles = {
      S: { padding: "6px 12px", fontSize: "12px" },
      M: { padding: "8px 16px", fontSize: "14px" },
      L: { padding: "12px 24px", fontSize: "16px" },
    };

    // Type styles
    const typeStyles = {
      Full: {
        backgroundColor: customButton.color || "#000000",
        color: getContrastColor(customButton.color || "#000000"),
        border: `1px solid ${customButton.color || "#000000"}`,
      },
      Light: {
        backgroundColor: "transparent",
        color: customButton.color || "#000000",
        border: `1px solid ${customButton.color || "#000000"}`,
      },
      "Simple link": {
        backgroundColor: "transparent",
        color: customButton.color || "#000000",
        border: "none",
        textDecoration: "underline",
        padding: "4px 0",
        ...sizeStyles[customButton.size || "M"],
      },
    };

    // Shape styles
    const shapeStyles = {
      square: { borderRadius: "0" },
      rounded_sm: { borderRadius: "4px" },
      rounded: { borderRadius: "50px" },
    };

    // For Simple link type, we don't want the full button styling
    if (customButton.type === "Simple link") {
      return {
        ...baseStyles,
        ...typeStyles["Simple link"],
      };
    }

    return {
      ...baseStyles,
      ...sizeStyles[customButton.size || "M"],
      ...typeStyles[customButton.type || "Full"],
      ...shapeStyles[customButton.shape || "rounded_sm"],
    };
  };

  const getCustomButtonArrow = () => {
    if (!customButton.addArrow) return null;

    return <span style={{ marginLeft: "8px", fontSize: "14px" }}>→</span>;
  };

  const handleCustomButtonClick = () => {
    if (customButton.buttonUrl) {
      window.open(customButton.buttonUrl, "_blank", "noopener,noreferrer");
    }
  };

  const getUploadBannerStyles = () => {
    const sizeStyles = {
      S: { height: "50px", fontSize: "12px" },
      M: { height: "75px", fontSize: "14px" },
      L: { height: "100px", fontSize: "16px" },
    };

    return {
      ...sizeStyles[uploadBanner.size || "M"],
      width: "100%",
      objectFit: "cover",
      borderRadius: "4px",
      cursor: uploadBanner.link ? "pointer" : "default",
    };
  };

  const handleUploadBannerClick = () => {
    if (uploadBanner.link) {
      window.open(uploadBanner.link, "_blank", "noopener,noreferrer");
    }
  };

  const feedbackIcons = {
    circle: CircleIcon,
    star: StarIcon,
    heart: FavoriteIcon,
    comment: ChatBubbleIcon,
    like: ThumbUpIcon,
    none: null,
  };

  const getFeedbackIcon = () => {
    const IconComponent = feedbackIcons[feedback.icon];
    if (!IconComponent || feedback.icon === "none") return null;

    const iconSizeMap = {
      S: "small",
      M: "medium",
      L: "large",
    };

    return (
      <IconComponent
        fontSize={iconSizeMap[feedback.iconSize || "M"]}
        sx={{ color: feedback.iconColor || "black" }}
      />
    );
  };

  // Get feedback styles
  const getFeedbackStyles = () => {
    const baseStyles = {
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontWeight: 500,
      transition: "all 0.3s ease",
      cursor: "pointer",
      fontFamily: getValue(design.detailsFont, fontFamily, "Roboto"),
      color: feedback.fontColor || "black",
      fontSize: `${(feedback.fontSize || 50) / 5 + 10}px`, // Scale font size appropriately
    };

    return baseStyles;
  };

  const handleFeedbackClick = () => {
    if (feedback.linkUrl) {
      window.open(feedback.linkUrl, "_blank", "noopener,noreferrer");
    }
  };

  const videoConferenceIcons = {
    Zoom: VideocamIcon,
    "Google Meet": VideoCallIcon,
    "Microsoft Teams": VideocamIcon,
  };

  // Get video conference button styles
  const getVideoConferenceStyles = () => {
    const baseStyles = {
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontWeight: 500,
      transition: "all 0.3s ease",
      cursor: "pointer",
      fontFamily: getValue(design.detailsFont, fontFamily, "Roboto"),
      backgroundColor: "#007dff",
      color: "white",
      border: "none",
      textTransform: "none",
      "&:hover": {
        opacity: 0.9,
        transform: "translateY(-1px)",
      },
    };

    // Size styles based on slider value (0-100 scale)
    const scaledSize = (videoConference.size || 60) / 100;
    const sizeStyles = {
      padding: `${6 + scaledSize * 6}px ${12 + scaledSize * 12}px`,
      fontSize: `${12 + scaledSize * 4}px`,
    };

    // Shape styles
    const shapeStyles = {
      square: { borderRadius: "0" },
      rounded_sm: { borderRadius: "4px" },
      rounded: { borderRadius: "50px" },
    };

    return {
      ...baseStyles,
      ...sizeStyles,
      ...shapeStyles[videoConference.shape || "square"],
    };
  };

  // Get video conference icon
  const getVideoConferenceIcon = () => {
    const IconComponent = videoConferenceIcons[videoConference.provider];
    if (!IconComponent) return null;

    const scaledSize = (videoConference.size || 60) / 100;
    const iconSize = 16 + scaledSize * 8;

    return (
      <IconComponent
        sx={{
          fontSize: `${iconSize}px`,
          color: "white",
        }}
      />
    );
  };

  const handleVideoConferenceClick = () => {
    if (videoConference.link) {
      window.open(videoConference.link, "_blank", "noopener,noreferrer");
    }
  };

  const webinarIcons = {
    circle: CircleIcon,
    desktop_windows: DesktopWindowsIcon,
    monitor_grid: MonitorIcon,
    mic: MicIcon,
    tv: TvIcon,
    laptop: LaptopIcon,
    none: null,
  };

  // Get webinar icon component
  const getWebinarIcon = () => {
    const IconComponent = webinarIcons[webinar.icon];
    if (!IconComponent || webinar.icon === "none") return null;

    const iconSizeMap = {
      S: "small",
      M: "medium",
      L: "large",
    };

    return (
      <IconComponent
        fontSize={iconSizeMap[webinar.iconSize || "M"]}
        sx={{ color: webinar.iconColor || "black" }}
      />
    );
  };

  // Get webinar styles
  const getWebinarStyles = () => {
    const baseStyles = {
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontWeight: 500,
      transition: "all 0.3s ease",
      cursor: "pointer",
      fontFamily: getValue(design.detailsFont, fontFamily, "Roboto"),
      color: webinar.fontColor || "black",
      fontSize: `${(webinar.fontSize || 50) / 5 + 10}px`, // Scale font size appropriately
    };

    return baseStyles;
  };

  const handleWebinarClick = () => {
    if (webinar.linkUrl) {
      window.open(webinar.linkUrl, "_blank", "noopener,noreferrer");
    }
  };

  const getAppDownloadStyles = () => {
    if (!appDownload) return {};

    const baseStyles = {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginTop: "16px",
      textAlign: appDownload.style?.alignment || "left",
    };

    return baseStyles;
  };

  // Get title styles for app download
  const getAppDownloadTitleStyles = () => {
    if (!appDownload) return {};

    const fontSizeMap = {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "18px",
      5: "20px",
    };

    const colorMap = {
      dark: "#000000",
      light: "#FFFFFF",
      custom: appDownload.style?.customColor || "#000000",
    };

    return {
      fontSize: fontSizeMap[appDownload.style?.fontSize || 3],
      color: colorMap[appDownload.style?.fontColor || "dark"],
      fontWeight: 600,
      marginBottom: "8px",
    };
  };

  // Get button styles for app download
  const getAppDownloadButtonStyles = (platform) => {
    if (!appDownload) return {};

    const baseStyles = {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "14px",
      transition: "all 0.3s ease",
      border: "1px solid #ddd",
      backgroundColor: "#f8f9fa",
      color: "#333",
      "&:hover": {
        backgroundColor: "#e9ecef",
        transform: "translateY(-1px)",
      },
    };

    return baseStyles;
  };

  const handleAppDownloadClick = (platform) => {
    const link =
      platform === "google"
        ? appDownload?.googlePlayLink
        : appDownload?.appStoreLink;

    if (
      link &&
      link !== `https://play.google.com/store/apps/details?id=APP_ID` &&
      link !== `https://itunes.apple.com/us/app/APP_NAME`
    ) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const getJobOfferStyles = () => {
    if (!jobOffer) return {};

    const baseStyles = {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "16px",
      textAlign: jobOffer.style?.alignment || "left",
    };

    return baseStyles;
  };

  // Get introduction styles for job offer
  const getJobOfferIntroductionStyles = () => {
    if (!jobOffer) return {};

    const fontSizeMap = {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "18px",
      5: "20px",
    };

    const colorMap = {
      dark: "#000000",
      light: "#666666",
      custom: jobOffer.style?.customColor || "#000000",
    };

    return {
      fontSize: fontSizeMap[jobOffer.style?.fontSize || 3],
      color: colorMap[jobOffer.style?.fontColor || "dark"],
      fontWeight: 500,
      marginBottom: "4px",
    };
  };

  // Get button styles for job offer
  const getJobOfferButtonStyles = () => {
    if (!jobOffer) return {};

    const baseStyles = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
      cursor: "pointer",
      fontFamily: getValue(design.detailsFont, fontFamily, "Roboto"),
      border: "none",
      "&:hover": {
        opacity: 0.9,
        transform: "translateY(-1px)",
      },
    };

    // Size styles
    const sizeStyles = {
      S: { padding: "8px 16px", fontSize: "12px" },
      M: { padding: "12px 24px", fontSize: "14px" },
      L: { padding: "16px 32px", fontSize: "16px" },
    };

    const colorMap = {
      dark: "#000000",
      light: "#666666",
      custom: jobOffer.style?.customColor || "#000000",
    };

    // Color styles
    const colorStyles = {
      backgroundColor: colorMap[jobOffer.style?.buttonColor] || "#000000",
      color: getContrastColor(
        colorMap[jobOffer.style?.buttonColor] || "#000000"
      ),
    };

    return {
      ...baseStyles,
      ...sizeStyles[jobOffer.style?.buttonSize || "M"],
      ...colorStyles,
    };
  };

  const handleJobOfferClick = () => {
    if (jobOffer?.positionLink && jobOffer.positionLink !== "https://") {
      window.open(jobOffer.positionLink, "_blank", "noopener,noreferrer");
    }
  };

  return {
    styles,
    displayData,
    socialLinks,
    getSocialColor,
    getFontFamily,
    shouldShowDisclaimer,
    shouldShowQuote,
    shouldShowGreenFooter,
    shouldShowImageGallery,
    disclaimerStyle,
    quoteStyle,
    shouldShowVideo,
    youtubeVideo,
    getYoutubeThumbnail,
    greenFooter,
    getGreenFooterIcon,
    imageGallery,
    getImageBorderRadius,
    shouldShowOnlineMeeting,
    getButtonStyles,
    getButtonIcon,
    getSchedulingProviderName,
    onlineMeeting,
    socialButtons,
    shouldShowSocialButtons,
    banner,
    shouldShowBanner,
    getBannerStyles,
    handleBannerClick,
    customButton,
    shouldShowCustomButton,
    getCustomButtonStyles,
    getCustomButtonArrow,
    handleCustomButtonClick,
    uploadBanner,
    shouldShowUploadBanner,
    getUploadBannerStyles,
    handleUploadBannerClick,
    feedback,
    shouldShowFeedback,
    getFeedbackIcon,
    getFeedbackStyles,
    handleFeedbackClick,
    videoConference,
    shouldShowVideoConference,
    getVideoConferenceStyles,
    getVideoConferenceIcon,
    handleVideoConferenceClick,
    webinar,
    shouldShowWebinar,
    getWebinarIcon,
    getWebinarStyles,
    handleWebinarClick,
    appDownload,
    shouldShowAppDownload,
    getAppDownloadStyles,
    getAppDownloadTitleStyles,
    getAppDownloadButtonStyles,
    handleAppDownloadClick,
    jobOffer,
    shouldShowJobOffer,
    getJobOfferStyles,
    getJobOfferIntroductionStyles,
    getJobOfferButtonStyles,
    handleJobOfferClick,
  };
};
