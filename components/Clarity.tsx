"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export default function Clarity() {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
    
    if (clarityId) {
      clarity.init(clarityId);
    } else {
      console.warn("Clarity ID not found. Please set NEXT_PUBLIC_CLARITY_ID environment variable.");
    }
  }, []);

  return null;
}

