import React, { createContext, useState, useCallback, useMemo } from "react";
import {
  INITIAL_GLOBAL_STYLES,
  INITIAL_USER_INFO,
  INITIAL_DESIGN,
  INITIAL_SOCIAL_LINKS,
  INITIAL_STYLED_SIGNEDOFF,
  DISCLAIMER,
  DISCLAIMER_TEXT,
  QUOTE,
  QUOTE_TEXT,
  QUOTE_CATEGORY_MAP,
  VIDEO,
  GREEN_FOOTER_STYLE,
  GREEN_FOOTER_TEXT,
  IMAGE_GALLERY,
  ONLINE_MEETING,
  INITIAL_SOCIAL_BUTTONS,
  INITIAL_BANNER,
  INITIAL_CUSTOM_BUTTON,
  INITIAL_UPLOAD_BANNER,
  INITIAL_FEEDBACK,
  INITIAL_VIDEO_CONFERENCE,
  INITIAL_WEBINAR,
  INITIAL_APP_DOWNLOAD,
  INITIAL_JOB_OFFER,
  INITIAL_NEWSLETTER,
  INITIAL_CUSTOM_HTML,
} from "../utils/constant";

const SignatureContext = createContext();

export const SignatureProvider = ({ children }) => {
  const [globalStyles, setGlobalStyles] = useState(INITIAL_GLOBAL_STYLES);
  const [userInfo, setUserInfo] = useState(INITIAL_USER_INFO);
  const [design, setDesign] = useState(INITIAL_DESIGN);
  const [socialLinks, setSocialLinks] = useState(INITIAL_SOCIAL_LINKS);
  const [styledSignedOff, setStyledSignedOff] = useState(
    INITIAL_STYLED_SIGNEDOFF
  );
  const [disclamierStyle, setDisclamierStyle] = useState(DISCLAIMER);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const [quoteStyle, setQuoteStyle] = useState(QUOTE);
  const [youtubeVideo, setYoutubeVideo] = useState(VIDEO);
  const [greenFooter, setGreenFooter] = useState(GREEN_FOOTER_STYLE);
  const [imageGallery, setImageGallery] = useState(IMAGE_GALLERY);
  const [onlineMeeting, setOnlineMeeting] = useState(ONLINE_MEETING);
  const [socialButtons, setSocialButtons] = useState(INITIAL_SOCIAL_BUTTONS);
  const [banner, setBanner] = useState(INITIAL_BANNER);
  const [customButton, setCustomButton] = useState(INITIAL_CUSTOM_BUTTON);
  const [uploadBanner, setUploadBanner] = useState(INITIAL_UPLOAD_BANNER);
  const [feedback, setFeedback] = useState(INITIAL_FEEDBACK);
  const [videoConference, setVideoConference] = useState(
    INITIAL_VIDEO_CONFERENCE
  );
  const [webinar, setWebinar] = useState(INITIAL_WEBINAR);
  const [appDownload, setAppDownload] = useState(INITIAL_APP_DOWNLOAD);
  const [jobOffer, setJobOffer] = useState(INITIAL_JOB_OFFER);
  const [newsletter, setNewsletter] = useState(INITIAL_NEWSLETTER);
  const [customHtml, setCustomHtml] = useState(INITIAL_CUSTOM_HTML);
  const updateCustomHtml = useCallback((data) => {
    setCustomHtml((prev) => ({ ...prev, ...data }));
  }, []);
  // Add update function
  const updateNewsletter = useCallback((data) => {
    setNewsletter((prev) => ({ ...prev, ...data }));
  }, []);

  const updateAppDownload = useCallback((data) => {
    setAppDownload((prev) => ({ ...prev, ...data }));
  }, []);

  // Update webinar settings
  const updateWebinar = useCallback((data) => {
    setWebinar((prev) => ({ ...prev, ...data }));
  }, []);

  // Update video conference settings
  const updateVideoConference = useCallback((data) => {
    setVideoConference((prev) => ({ ...prev, ...data }));
  }, []);

  // Update feedback settings
  const updateFeedback = useCallback((data) => {
    setFeedback((prev) => ({ ...prev, ...data }));
  }, []);

  // Update upload banner settings
  const updateUploadBanner = useCallback((data) => {
    setUploadBanner((prev) => ({ ...prev, ...data }));
  }, []);

  // Update custom button settings
  const updateCustomButton = useCallback((data) => {
    setCustomButton((prev) => ({ ...prev, ...data }));
  }, []);

  // Update online meeting settings
  const updateOnlineMeeting = useCallback((data) => {
    setOnlineMeeting((prev) => ({ ...prev, ...data }));
  }, []);

  const getDisclaimerText = useCallback(() => {
    const { type, customText } = disclamierStyle;

    if (type === "custom" && customText) {
      return customText;
    }

    return DISCLAIMER_TEXT[type] || "";
  }, [disclamierStyle]);

  const getQuoteText = useCallback(() => {
    const { category, customText } = quoteStyle;

    if (category === "custom" && customText) {
      return customText;
    }

    return QUOTE_TEXT[category] || "";
  }, [quoteStyle]);

  const getGreenFooterText = useCallback(() => {
    const { category, customText } = greenFooter;
    console.log("category", category);
    console.log("121212", GREEN_FOOTER_TEXT[category]);
    if (category === "custom" && customText) {
      return customText;
    }

    return GREEN_FOOTER_TEXT[category] || "";
  }, [greenFooter]);

  // Update quote style
  const updateQuoteStyle = useCallback((data) => {
    setQuoteStyle((prev) => ({ ...prev, ...data }));
  }, []);

  const updateYoutubeVideo = useCallback((data) => {
    setYoutubeVideo((prev) => ({ ...prev, ...data }));
  }, []);

  const updateBanner = useCallback((data) => {
    setBanner((prev) => ({ ...prev, ...data }));
  }, []);

  // In SignatureContext - update updateSocialButtons function
  const updateSocialButtons = useCallback((data) => {
    console.log("Context: Updating social buttons with:", data);
    setSocialButtons((prev) => {
      const updated = { ...prev, ...data };
      console.log("Context: Social buttons updated to:", updated);
      return updated;
    });
  }, []);

  const getYoutubeVideoId = useCallback((url) => {
    if (!url) return null;

    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }, []);

  const updateGreenFooter = useCallback((data) => {
    setGreenFooter((prev) => ({ ...prev, ...data }));
  }, []);

  const updateImageGallery = useCallback((data) => {
    setImageGallery((prev) => ({ ...prev, ...data }));
  }, []);

  const updateJobOffer = useCallback((data) => {
    setJobOffer((prev) => ({ ...prev, ...data }));
  }, []);
  // Combined formData for backward compatibility
  const formData = useMemo(
    () => ({
      ...globalStyles,
      ...userInfo,
      design,
      socialLinks,
      styledSignedOff,
      disclaimerStyle: {
        ...disclamierStyle,
        text: getDisclaimerText(), // Include computed text in formData
      },
      quoteStyle: {
        ...quoteStyle,
        text: getQuoteText(),
      },
      youtubeVideo: {
        ...youtubeVideo,
        videoId: getYoutubeVideoId(youtubeVideo.url),
      },
      greenFooter: {
        ...greenFooter,
        text: getGreenFooterText(),
      },
      imageGallery,
      onlineMeeting,
      socialButtons,
      banner,
      customButton,
      uploadBanner,
      feedback,
      videoConference,
      webinar,
      appDownload,
      jobOffer,
      newsletter,
      customHtml,
    }),
    [
      globalStyles,
      userInfo,
      design,
      socialLinks,
      styledSignedOff,
      disclamierStyle,
      getDisclaimerText,
      quoteStyle,
      getQuoteText,
      youtubeVideo,
      getYoutubeVideoId,
      greenFooter,
      getGreenFooterText,
      imageGallery,
      onlineMeeting,
      socialButtons,
      banner,
      customButton,
      uploadBanner,
      feedback,
      videoConference,
      webinar,
      appDownload,
      jobOffer,
      newsletter,
      customHtml,
    ]
  );

  const updateFormData = useCallback((data) => {
    const { design: designData, socialLinks: socialData, ...rest } = data;

    if (designData) setDesign((prev) => ({ ...prev, ...designData }));
    if (socialData) setSocialLinks((prev) => ({ ...prev, ...socialData }));

    const globalStyleKeys = Object.keys(INITIAL_GLOBAL_STYLES);
    const globalStyleUpdates = {};
    const userInfoUpdates = {};

    Object.entries(rest).forEach(([key, value]) => {
      if (globalStyleKeys.includes(key)) {
        globalStyleUpdates[key] = value;
      } else {
        userInfoUpdates[key] = value;
      }
    });

    if (Object.keys(globalStyleUpdates).length > 0) {
      setGlobalStyles((prev) => ({ ...prev, ...globalStyleUpdates }));
    }
    if (Object.keys(userInfoUpdates).length > 0) {
      setUserInfo((prev) => ({ ...prev, ...userInfoUpdates }));
    }
  }, []);

  const updateDesignFormData = useCallback((data) => {
    setDesign((prev) => ({ ...prev, ...data }));
  }, []);

  const updateStyledSignedOff = useCallback((data) => {
    setStyledSignedOff((prev) => ({ ...prev, ...data }));
  }, []);

  const updateDisclaimerStyle = useCallback((data) => {
    setDisclamierStyle((prev) => ({ ...prev, ...data }));
  }, []);

  const getStyleValue = useCallback(
    (designKey, parentKey, defaultValue = "") => {
      const designValue = design[designKey];
      const parentValue = globalStyles[parentKey] || userInfo[parentKey];
      return designValue || parentValue || defaultValue;
    },
    [design, globalStyles, userInfo]
  );

  const getComputedStyles = useCallback(() => {
    return {
      name: {
        fontFamily: getStyleValue("nameFont", "fontFamily", "Roboto"),
        fontSize: getStyleValue("nameFontSize", "fontSize", 13),
        color: getStyleValue("nameColor", "nameColor", "#45668E"),
        lineHeight: getStyleValue("nameLineSpacing", "lineSpacing", 1),
      },
      title: {
        fontFamily: getStyleValue("titleFont", "fontFamily", "Roboto"),
        fontSize: getStyleValue("titleFontSize", "fontSize", 13),
        color: getStyleValue("titleColor", "titleColor", "#000000"),
        lineHeight: getStyleValue("titleLineSpacing", "lineSpacing", 1),
      },
      company: {
        fontFamily: getStyleValue("companyFont", "fontFamily", "Roboto"),
        fontSize: getStyleValue("companyFontSize", "fontSize", 13),
        color: getStyleValue("companyColor", "companyColor", "#000000"),
      },
      details: {
        fontFamily: getStyleValue("detailsFont", "fontFamily", "Roboto"),
        fontSize: getStyleValue("detailsSize", "fontSize", 13),
        color: getStyleValue("detailsColor", "detailsColor", "#000000"),
      },
      social: {
        size: design.socialSize || 16,
        space: design.socialSpace || 8,
        colorMode: design.socialColorMode || "web",
        customColor: design.socialCustomColor || "#1877F2",
      },
      imageShape: design.imageShape || "rounded-2",
      imageSize: design.imageSize || "100px",
      imagePosition: design.imagePosition || "start",
      detailsLabel: "left",
      detailsDirection: "left",
      detailsSeparator: "left",
      template: {
        color: design.color || "#000000",
      },
    };
  }, [design, getStyleValue]);

  const value = useMemo(
    () => ({
      formData,
      updateFormData,
      updateDesignFormData,
      selectedTemplate,
      setSelectedTemplate,
      getComputedStyles,
      getStyleValue,
      styledSignedOff,
      updateStyledSignedOff,
      disclamierStyle,
      updateDisclaimerStyle,
      getDisclaimerText,
      quoteStyle,
      updateQuoteStyle,
      getQuoteText,
      youtubeVideo,
      updateYoutubeVideo,
      getYoutubeVideoId,
      greenFooter,
      updateGreenFooter,
      getGreenFooterText,
      imageGallery,
      updateImageGallery,
      onlineMeeting,
      updateOnlineMeeting,
      socialButtons,
      updateSocialButtons,
      banner,
      updateBanner,
      customButton,
      updateCustomButton,
      uploadBanner,
      updateUploadBanner,
      feedback,
      updateFeedback,
      videoConference,
      updateVideoConference,
      webinar,
      updateWebinar,
      appDownload,
      updateAppDownload,
      jobOffer,
      updateJobOffer,
      newsletter,
      updateNewsletter,
      customHtml,
      updateCustomHtml,
    }),
    [
      formData,
      updateFormData,
      updateDesignFormData,
      selectedTemplate,
      getComputedStyles,
      getStyleValue,
      styledSignedOff,
      updateStyledSignedOff,
      disclamierStyle,
      updateDisclaimerStyle,
      getDisclaimerText,
      quoteStyle,
      updateQuoteStyle,
      getQuoteText,
      youtubeVideo,
      updateYoutubeVideo,
      getYoutubeVideoId,
      greenFooter,
      updateGreenFooter,
      getGreenFooterText,
      imageGallery,
      updateImageGallery,
      onlineMeeting,
      updateOnlineMeeting,
      socialButtons,
      updateSocialButtons,
      banner,
      updateBanner,
      customButton,
      updateCustomButton,
      uploadBanner,
      updateUploadBanner,
      feedback,
      updateFeedback,
      videoConference,
      updateVideoConference,
      webinar,
      updateWebinar,
      appDownload,
      updateAppDownload,
      jobOffer,
      updateJobOffer,
      newsletter,
      updateNewsletter,
      customHtml,
      updateCustomHtml,
    ]
  );

  return (
    <SignatureContext.Provider value={value}>
      {children}
    </SignatureContext.Provider>
  );
};

export default SignatureContext;
