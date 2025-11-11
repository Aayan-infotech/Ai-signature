import React from "react";
import { Box, Typography } from "@mui/material";
import { useSignature } from "../hooks/useSignature";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import Template6 from "../Templates/Template6";
import Template7 from "../Templates/Template7";
import Template8 from "../Templates/Template8";
import Template9 from "../Templates/Template9";
import Template10 from "../Templates/Template10";
import Template11 from "../Templates/Template11";
import Template12 from "../Templates/Template12";

const TemplateRender = () => {
  const { selectedTemplate, formData } = useSignature();

  const templates = {
    template1: Template1,
    template2: Template2,
    template3: Template3,
    template4: Template4,
    template5: Template5,
    template6: Template6,
    template7: Template7,
    template8: Template8,
    template9: Template9,
    template10: Template10,
    template11: Template11,
    template12: Template12,
  };

  const SelectedTemplate = templates[selectedTemplate] || Template1;
  console.log(formData)

  return (
    <div className="position-fixed-design-card">
      <SelectedTemplate data={formData} />
    </div>
  );
};

export default TemplateRender;
