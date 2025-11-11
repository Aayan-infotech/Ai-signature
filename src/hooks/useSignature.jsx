import { useContext } from "react";
import SignatureContext from "../context/SignatureContext";

export const useSignature = () => {
  const context = useContext(SignatureContext);
  if (!context) {
    throw new Error("useSignature must be used within SignatureProvider");
  }
  return context;
};
