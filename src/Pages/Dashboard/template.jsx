import React from "react";
import { Typography, Grid, Paper, Box } from "@mui/material";
import Template1 from "../../Templates/Template1";
import Template2 from "../../Templates/Template2";
import Template3 from "../../Templates/Template3";
import Template4 from "../../Templates/Template4";
import Template5 from "../../Templates/Template5";
import Template6 from "../../Templates/Template6";
import Template7 from "../../Templates/Template7";
import Template8 from "../../Templates/Template8";
import Template9 from "../../Templates/Template9";
import Template10 from "../../Templates/Template10";
import Template11 from "../../Templates/Template11";
import Template12 from "../../Templates/Template12";
import { useSignature } from "../../hooks/useSignature";

export default function Template() {
  const { selectedTemplate, setSelectedTemplate, formData } = useSignature();

  const templates = [
    { id: "template1", name: "Classic", component: Template1 },
    { id: "template2", name: "Modern", component: Template2 },
  ];

  const premiumTemplates = [
    { id: "template3", name: "Classic", component: Template3 },
    { id: "template4", name: "Modern", component: Template4 },
    { id: "template5", name: "Classic", component: Template5 },
    { id: "template6", name: "Modern", component: Template6 },
    { id: "template7", name: "Classic", component: Template7 },
    { id: "template8", name: "Modern", component: Template8 },
    { id: "template9", name: "Classic", component: Template9 },
    { id: "template10", name: "Modern", component: Template10 },
    { id: "template11", name: "Classic", component: Template11 },
    { id: "template12", name: "Modern", component: Template12 },
  ];
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Free Template
      </Typography>
      <div className="row gy-4 mb-4">
        {templates.map((template) => (
          <div className="col-lg-6 col-12" key={template.id}>
            <Paper
              elevation={selectedTemplate === template.id ? 8 : 2}
              sx={{
                p: 2,
                cursor: "pointer",
                border:
                  selectedTemplate === template.id
                    ? "3px solid #2a8e8a"
                    : "1px solid #ddd",
                transition: "all 0.3s",
                "&:hover": { transform: "scale(1.02)" },
              }}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <Box
                sx={{
                  transform: "scale(0.5)",
                  transformOrigin: "top",
                  height: "200px",
                  overflow: "hidden",
                  pointerEvents: "none",
                  width: "100%",
                }}
              >
                <template.component data={formData} />
              </Box>
            </Paper>
          </div>
        ))}
      </div>
      <Typography variant="h6" gutterBottom>
        Premium Template
      </Typography>
      <div className="row gy-4">
        {premiumTemplates.map((template) => (
          <div className="col-lg-6 col-12" key={template.id}>
            <Paper
              elevation={selectedTemplate === template.id ? 8 : 2}
              sx={{
                p: 2,
                cursor: "pointer",
                border:
                  selectedTemplate === template.id
                    ? "3px solid #2a8e8a"
                    : "1px solid #ddd",
                transition: "all 0.3s",
                "&:hover": { transform: "scale(1.02)" },
              }}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <Box
                sx={{
                  transform: "scale(0.5)",
                  transformOrigin: "top",
                  height: "200px",
                  overflow: "hidden",
                  pointerEvents: "none",
                  width: "100%",
                }}
              >
                <template.component data={formData} />
              </Box>
            </Paper>
          </div>
        ))}
      </div>
    </div>
  );
}
