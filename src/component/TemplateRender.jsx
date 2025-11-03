import React from "react";
import { Box, Typography } from "@mui/material";
import { useSignature } from "../hooks/useSignature";
import Template1 from "../Templates/Template1";

const TemplateRender = () => {
  const { selectedTemplate, formData } = useSignature();

  const templates = {
    template1: Template1,
  };

  const SelectedTemplate = templates[selectedTemplate] || Template1;

  return (
    <div className="position-fixed-design-card">
      <SelectedTemplate data={formData} />
    </div>
  );
};

export default TemplateRender;
