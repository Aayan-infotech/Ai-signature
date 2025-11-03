import React from "react";
import { Typography, Grid, Paper, Box } from "@mui/material";
import Template1 from "../../Templates/Template1";
import Template2 from "../../Templates/Template2";
import { useSignature } from "../../hooks/useSignature";

export default function Template() {
  const { selectedTemplate, setSelectedTemplate, formData } = useSignature();

  const templates = [
    { id: "template1", name: "Classic", component: Template1 },
    { id: "template2", name: "Modern", component: Template2 },
  ];
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Free Template
      </Typography>
      <div className="row gy-4">
        {templates.map((template) => (
          <div className="col-lg-6 col-12" key={template.id}>
            <Paper
              elevation={selectedTemplate === template.id ? 8 : 2}
              sx={{
                p: 2,
                cursor: "pointer",
                border:
                  selectedTemplate === template.id
                    ? "3px solid #0f3460"
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
