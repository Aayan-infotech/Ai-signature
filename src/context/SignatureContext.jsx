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

  // Update quote style
  const updateQuoteStyle = useCallback((data) => {
    setQuoteStyle((prev) => ({ ...prev, ...data }));
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
    ]
  );

  return (
    <SignatureContext.Provider value={value}>
      {children}
    </SignatureContext.Provider>
  );
};

export default SignatureContext;
