import { Outlet } from "react-router-dom";
import DashboardSidebar from "../component/DashboardSidebar";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import TemplateRender from "../component/TemplateRender";
import { Form, Row, Col, Card } from "react-bootstrap";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) setSidebarOpen(false);

    const handleResize = () => {
      setSidebarOpen(!mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  return (
    <div className="d-flex">
      <DashboardSidebar sidebarOpen={sidebarOpen} />
      <Box className={`${sidebarOpen ? "content-open" : "content-closed"}`}>
        <div className="row">
          <div className="col-lg-5 pe-lg-0">
            <Box sx={{ marginTop: 6.9 }}>
              <Card className="p-3 shadow-sm rounded-0">
                <Outlet />
              </Card>
            </Box>
          </div>
          <div className="col-lg-7 ps-lg-0">
            <Box sx={{ marginTop: 7 }}>
              <TemplateRender />
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default MainLayout;
