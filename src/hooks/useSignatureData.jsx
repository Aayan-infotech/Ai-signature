// hooks/useSignatureData.js
import { useMemo } from "react";

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
  } = data || {};

  // --- Display Data (Signature / Signoff / Custom)
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

  return {
    styles,
    displayData,
    socialLinks,
    getSocialColor,
    getFontFamily,
    shouldShowDisclaimer,
    shouldShowQuote,
    disclaimerStyle,
    quoteStyle,
  };
};
