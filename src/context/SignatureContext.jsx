import React, { createContext, useState } from "react";

const SignatureContext = createContext();

export const SignatureProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fontFamily: "Arial",
    name: "Jason Erickson",
    title: "Online marketer",
    company: "JE marketing",
    phone: "212-931-0000",
    mobile: "",
    website: "www.je-marketing.com",
    email: "jason@je-marketing.com",
    address: "1937 Fieldcrest Road, NY 10011",
    image: "https://via.placeholder.com/80",
  });

  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <SignatureContext.Provider
      value={{
        formData,
        updateFormData,
        selectedTemplate,
        setSelectedTemplate,
      }}
    >
      {children}
    </SignatureContext.Provider>
  );
};

export default SignatureContext;