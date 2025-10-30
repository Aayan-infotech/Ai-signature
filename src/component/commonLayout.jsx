import React from "react";
import Header from "./Navbar";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

export default function CommonLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
