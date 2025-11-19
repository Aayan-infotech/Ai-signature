// SignatureContext.jsx
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
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

const SignatureContext = createContext(null);

/**
 * Registry of all state keys and their default values.
 * Add new keys here to auto-include them in persistence and the reducer.
 */
const STATE_REGISTRY = {
  globalStyles: INITIAL_GLOBAL_STYLES,
  userInfo: INITIAL_USER_INFO,
  design: INITIAL_DESIGN,
  socialLinks: INITIAL_SOCIAL_LINKS,
  styledSignedOff: INITIAL_STYLED_SIGNEDOFF,
  disclamierStyle: DISCLAIMER,
  quoteStyle: QUOTE,
  youtubeVideo: VIDEO,
  greenFooter: GREEN_FOOTER_STYLE,
  imageGallery: IMAGE_GALLERY,
  onlineMeeting: ONLINE_MEETING,
  socialButtons: INITIAL_SOCIAL_BUTTONS,
  banner: INITIAL_BANNER,
  customButton: INITIAL_CUSTOM_BUTTON,
  uploadBanner: INITIAL_UPLOAD_BANNER,
  feedback: INITIAL_FEEDBACK,
  videoConference: INITIAL_VIDEO_CONFERENCE,
  webinar: INITIAL_WEBINAR,
  appDownload: INITIAL_APP_DOWNLOAD,
  jobOffer: INITIAL_JOB_OFFER,
  newsletter: INITIAL_NEWSLETTER,
  customHtml: INITIAL_CUSTOM_HTML,
  // any future state keys should be added here
};

// Safe session helpers
const saveToSession = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // ignore storage errors (quota etc.)
  }
};

const loadFromSession = (key, fallback) => {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

// Create initial state from registry + sessionStorage
const getInitialState = () => {
  const state = {};
  Object.entries(STATE_REGISTRY).forEach(([k, defaultValue]) => {
    state[k] = loadFromSession(k, defaultValue);
  });

  // Add UI-only state that doesn't need persistence:
  state.selectedTemplate = loadFromSession("selectedTemplate", "template1");
  return state;
};

// Reducer: supports SET (replace) and MERGE (merge object into existing key)
function reducer(state, action) {
  switch (action.type) {
    case "SET_KEY": {
      // replace whole key with a value
      const { key, value } = action.payload;
      return { ...state, [key]: value };
    }
    case "MERGE_KEY": {
      // merge object value into state[key]
      const { key, value } = action.payload;
      const prev = state[key];
      // If prev is object, shallow merge; otherwise replace
      const next =
        prev && typeof prev === "object" && !Array.isArray(prev)
          ? { ...prev, ...value }
          : value;
      return { ...state, [key]: next };
    }
    case "SET_MULTIPLE": {
      return { ...state, ...action.payload };
    }
    case "RESET": {
      // reset to defaults (and clear sessionStorage)
      const newState = { ...getInitialState() };
      Object.keys(newState).forEach((k) => {
        saveToSession(k, newState[k]);
      });
      return newState;
    }
    default:
      return state;
  }
}

export const SignatureProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, null, getInitialState);

  // Generic setters (merge-style updates for most existing code)
  const setKey = useCallback((key, value) => {
    dispatch({ type: "SET_KEY", payload: { key, value } });
  }, []);

  const mergeKey = useCallback((key, value) => {
    dispatch({ type: "MERGE_KEY", payload: { key, value } });
  }, []);

  const setMultiple = useCallback((obj) => {
    dispatch({ type: "SET_MULTIPLE", payload: obj });
  }, []);

  const resetAll = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  // Keep specific update functions to maintain API parity with your previous code:
  const updateCustomHtml = useCallback(
    (data) => mergeKey("customHtml", data),
    [mergeKey]
  );
  const updateNewsletter = useCallback(
    (data) => mergeKey("newsletter", data),
    [mergeKey]
  );
  const updateAppDownload = useCallback(
    (data) => mergeKey("appDownload", data),
    [mergeKey]
  );
  const updateWebinar = useCallback(
    (data) => mergeKey("webinar", data),
    [mergeKey]
  );
  const updateVideoConference = useCallback(
    (data) => mergeKey("videoConference", data),
    [mergeKey]
  );
  const updateFeedback = useCallback(
    (data) => mergeKey("feedback", data),
    [mergeKey]
  );
  const updateUploadBanner = useCallback(
    (data) => mergeKey("uploadBanner", data),
    [mergeKey]
  );
  const updateCustomButton = useCallback(
    (data) => mergeKey("customButton", data),
    [mergeKey]
  );
  const updateOnlineMeeting = useCallback(
    (data) => mergeKey("onlineMeeting", data),
    [mergeKey]
  );
  const updateBanner = useCallback(
    (data) => mergeKey("banner", data),
    [mergeKey]
  );
  const updateGreenFooter = useCallback(
    (data) => mergeKey("greenFooter", data),
    [mergeKey]
  );
  const updateImageGallery = useCallback(
    (data) => mergeKey("imageGallery", data),
    [mergeKey]
  );
  const updateJobOffer = useCallback(
    (data) => mergeKey("jobOffer", data),
    [mergeKey]
  );
  const updateNewsletterWrapper = updateNewsletter; // alias if needed
  const updateSocialButtons = useCallback(
    (data) => mergeKey("socialButtons", data),
    [mergeKey]
  );

  // updateDesignFormData & updateFormData: keep behaviour from original
  const updateDesignFormData = useCallback(
    (data) => mergeKey("design", data),
    [mergeKey]
  );

  const updateFormData = useCallback(
    (data) => {
      // similar to your previous logic: split into design & social and top-level defaults
      const {
        design: designData,
        socialLinks: socialData,
        ...rest
      } = data || {};
      if (designData) mergeKey("design", designData);
      if (socialData) mergeKey("socialLinks", socialData);

      // partition rest into globalStyles keys vs userInfo
      const globalStyleKeys = Object.keys(INITIAL_GLOBAL_STYLES || {});
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
        mergeKey("globalStyles", globalStyleUpdates);
      }
      if (Object.keys(userInfoUpdates).length > 0) {
        mergeKey("userInfo", userInfoUpdates);
      }
    },
    [mergeKey]
  );

  // Persist to sessionStorage on any state change (single effect)
  useEffect(() => {
    // persist all keys except any UI-only transient keys if needed
    Object.keys(STATE_REGISTRY).forEach((k) => {
      try {
        saveToSession(k, state[k]);
      } catch (e) {
        // ignore
      }
    });
    // Also persist selectedTemplate if present
    if ("selectedTemplate" in state) {
      saveToSession("selectedTemplate", state.selectedTemplate);
    }
  }, [state]);

  // Utility getters that mirror your previous logic
  const getDisclaimerText = useCallback(() => {
    const { type, customText } = state.disclamierStyle || {};
    if (type === "custom" && customText) return customText;
    return (DISCLAIMER_TEXT && DISCLAIMER_TEXT[type]) || "";
  }, [state.disclamierStyle]);

  const getQuoteText = useCallback(() => {
    const { category, customText } = state.quoteStyle || {};
    if (category === "custom" && customText) return customText;
    return (QUOTE_TEXT && QUOTE_TEXT[category]) || "";
  }, [state.quoteStyle]);

  const getGreenFooterText = useCallback(() => {
    const { category, customText } = state.greenFooter || {};
    if (category === "custom" && customText) return customText;
    return (GREEN_FOOTER_TEXT && GREEN_FOOTER_TEXT[category]) || "";
  }, [state.greenFooter]);

  const getYoutubeVideoId = useCallback((url) => {
    if (!url) return null;
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }, []);

  // getStyleValue & getComputedStyles (keeps parity with your earlier code)
  const getStyleValue = useCallback(
    (designKey, parentKey, defaultValue = "") => {
      const designValue =
        (state.design && state.design[designKey]) || undefined;
      const parentValue =
        (state.globalStyles && state.globalStyles[parentKey]) ||
        (state.userInfo && state.userInfo[parentKey]);
      return designValue || parentValue || defaultValue;
    },
    [state.design, state.globalStyles, state.userInfo]
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
        size: (state.design && state.design.socialSize) || 16,
        space: (state.design && state.design.socialSpace) || 8,
        colorMode: (state.design && state.design.socialColorMode) || "web",
        customColor:
          (state.design && state.design.socialCustomColor) || "#1877F2",
      },
      imageShape: (state.design && state.design.imageShape) || "rounded-2",
      imageSize: (state.design && state.design.imageSize) || "100px",
      imagePosition: (state.design && state.design.imagePosition) || "start",
      detailsLabel: "left",
      detailsDirection: "left",
      detailsSeparator: "left",
      template: {
        color: (state.design && state.design.color) || "#000000",
      },
    };
  }, [state.design, getStyleValue]);

  // formData: combined structure for backward compatibility (derived)
  const formData = useMemo(() => {
    const youtubeUrl = (state.youtubeVideo && state.youtubeVideo.url) || "";
    return {
      ...state.globalStyles,
      ...state.userInfo,
      design: state.design,
      socialLinks: state.socialLinks,
      styledSignedOff: state.styledSignedOff,
      disclaimerStyle: {
        ...state.disclamierStyle,
        text: getDisclaimerText(),
      },
      quoteStyle: {
        ...state.quoteStyle,
        text: getQuoteText(),
      },
      youtubeVideo: {
        ...state.youtubeVideo,
        videoId: getYoutubeVideoId(youtubeUrl),
      },
      greenFooter: {
        ...state.greenFooter,
        text: getGreenFooterText(),
      },
      imageGallery: state.imageGallery,
      onlineMeeting: state.onlineMeeting,
      socialButtons: state.socialButtons,
      banner: state.banner,
      customButton: state.customButton,
      uploadBanner: state.uploadBanner,
      feedback: state.feedback,
      videoConference: state.videoConference,
      webinar: state.webinar,
      appDownload: state.appDownload,
      jobOffer: state.jobOffer,
      newsletter: state.newsletter,
      customHtml: state.customHtml,
      selectedTemplate: state.selectedTemplate,
    };
  }, [
    state,
    getDisclaimerText,
    getQuoteText,
    getGreenFooterText,
    getYoutubeVideoId,
  ]);

  // Keep API comparable to earlier implementation
  const contextValue = useMemo(() => {
    return {
      // state keys
      ...state,

      // derived
      formData,

      // generic
      setKey,
      mergeKey,
      setMultiple,
      resetAll,

      // specific convenience functions for backward compatibility
      updateFormData,
      updateDesignFormData,
      setSelectedTemplate: (t) => setKey("selectedTemplate", t),
      selectedTemplate: state.selectedTemplate,
      getComputedStyles,
      getStyleValue,
      styledSignedOff: state.styledSignedOff,
      updateStyledSignedOff: (d) => mergeKey("styledSignedOff", d),
      disclamierStyle: state.disclamierStyle,
      updateDisclaimerStyle: (d) => mergeKey("disclamierStyle", d),
      getDisclaimerText,
      quoteStyle: state.quoteStyle,
      updateQuoteStyle: (d) => mergeKey("quoteStyle", d),
      getQuoteText,
      youtubeVideo: state.youtubeVideo,
      updateYoutubeVideo: (d) => mergeKey("youtubeVideo", d),
      getYoutubeVideoId,
      greenFooter: state.greenFooter,
      updateGreenFooter,
      getGreenFooterText,
      imageGallery: state.imageGallery,
      updateImageGallery,
      onlineMeeting: state.onlineMeeting,
      updateOnlineMeeting,
      socialButtons: state.socialButtons,
      updateSocialButtons,
      banner: state.banner,
      updateBanner,
      customButton: state.customButton,
      updateCustomButton,
      uploadBanner: state.uploadBanner,
      updateUploadBanner,
      feedback: state.feedback,
      updateFeedback,
      videoConference: state.videoConference,
      updateVideoConference,
      webinar: state.webinar,
      updateWebinar,
      appDownload: state.appDownload,
      updateAppDownload,
      jobOffer: state.jobOffer,
      updateJobOffer,
      newsletter: state.newsletter,
      updateNewsletter: updateNewsletterWrapper,
      customHtml: state.customHtml,
      updateCustomHtml,
    };
  }, [
    state,
    formData,
    setKey,
    mergeKey,
    setMultiple,
    resetAll,
    updateFormData,
    updateDesignFormData,
    getComputedStyles,
    getStyleValue,
    getDisclaimerText,
    getQuoteText,
    getGreenFooterText,
    updateGreenFooter,
    updateImageGallery,
    updateOnlineMeeting,
    updateSocialButtons,
    updateBanner,
    updateCustomButton,
    updateUploadBanner,
    updateFeedback,
    updateVideoConference,
    updateWebinar,
    updateAppDownload,
    updateJobOffer,
    updateNewsletterWrapper,
    updateCustomHtml,
    getYoutubeVideoId,
  ]);

  return (
    <SignatureContext.Provider value={contextValue}>
      {children}
    </SignatureContext.Provider>
  );
};

export default SignatureContext;
