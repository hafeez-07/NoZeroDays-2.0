"use client";

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function useApp() {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useApp must be used within provider");
  }
  return context;
}
