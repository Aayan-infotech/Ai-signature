import React, { createContext, useState, useContext, useCallback } from "react";

const SignatureContext = createContext();

export const SignatureProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Global styles
    fontFamily: "Roboto",
    fontSize: 13,
    lineSpacing: 1,

    // User information
    name: "Jason Erickson",
    title: "Online marketer",
    company: "JE marketing",
    phone: "212-931-0000",
    mobile: "",
    website: "www.je-marketing.com",
    email: "jason@je-marketing.com",
    address: "1937 Fieldcrest Road, NY 10011",
    image: "https://via.placeholder.com/80",

    // Design overrides
    design: {
      // Template color
      color: "#000000",

      // Name styles (override global if set)
      nameFont: "",
      nameColor: "#45668E",
      nameFontSize: "",
      nameLineSpacing: "",

      // Title styles
      titleFont: "",
      titleColor: "",
      titleFontSize: "",
      titleLineSpacing: "",

      // Company styles
      companyFont: "",
      companyColor: "",
      companyFontSize: "",

      // Details styles
      detailsFont: "",
      detailsColor: "",
      detailsSize: "",

      // Social icons
      socialSize: 16,
      socialSpace: 8,
      socialColorMode: "web", // 'web' or 'custom'
      socialCustomColor: "#1877F2",
      socialFill: "left", // filled, outlined, plain

      // Image styles
      shape: "rounded-2", // left=square, center=rounded, right=circle
      size: "center", // left=small, center=medium, right=large
      position: "left", // left, center, right, bottom

      // Details styles
      label: "left", // left=text, center=letter, right=icon, none
      direction: "left", // left=horizontal, center=vertical
      separator: "left", // left=line, center=circle, right=square, none
    },
  });

  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  // Update top-level form data
  const updateFormData = useCallback((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  // Update only design properties
  const updateDesignFormData = useCallback((data) => {
    setFormData((prev) => ({
      ...prev,
      design: { ...prev.design, ...data },
    }));
  }, []);

  // Helper to get computed style value with fallback chain
  const getStyleValue = useCallback(
    (designKey, parentKey, defaultValue = "") => {
      const designValue = formData.design[designKey];
      const parentValue = formData[parentKey];
      return designValue || parentValue || defaultValue;
    },
    [formData]
  );

  // Get all computed styles for template rendering
  const getComputedStyles = useCallback(() => {
    const { design, fontFamily, fontSize, lineSpacing } = formData;

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
      imageShape: "rounded-2", // instead of "shape"
      imageSize: "100px", // instead of "size"
      imagePosition: "start", // instead of "position"
      template: {
        color: design.color || "#000000",
      },
    };
  }, [formData, getStyleValue]);

  const value = {
    formData,
    updateFormData,
    updateDesignFormData,
    selectedTemplate,
    setSelectedTemplate,
    getComputedStyles,
    getStyleValue,
  };

  return (
    <SignatureContext.Provider value={value}>
      {children}
    </SignatureContext.Provider>
  );
};

export default SignatureContext;
